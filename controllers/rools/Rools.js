const RuleSet = require('./RuleSet');
const Logger = require('./Logger');
const Delegator = require('./Delegator');
const WorkingMemory = require('./WorkingMemory');
const ConflictResolution = require('./ConflictResolution');
const observe = require('./observe');
const RuleError = require('./RuleError');

class Rools {
  constructor({ logging } = {}) {
    this.rules = new RuleSet();
    this.maxPasses = 1000; 
    this.logger = new Logger(logging);
  }

  async register(rules) {
    rules.forEach((rule) => this.rules.register(rule));
  }

  async evaluate(facts, { strategy } = {}) {
    const startDate = new Date();
    // init
    const memory = new WorkingMemory({
      actions: this.rules.actions,
      premises: this.rules.premises,
    });
    const conflictResolution = new ConflictResolution({ strategy, logger: this.logger });
    const delegator = new Delegator();
    const proxy = observe(facts, (segment) => delegator.delegate(segment));
   
    let pass = 0; 
    for (; pass < this.maxPasses; pass += 1) {
      const next = await this.pass(proxy, delegator, memory, conflictResolution, pass);
      if (!next) break; // for
    } 
   
    const endDate = new Date();
    return {
      updated: [...memory.accessedByActions], // for backward compatibility
      accessedByActions: [...memory.accessedByActions],
      accessedByPremises: [...memory.accessedByPremises],
      fired: pass,
      elapsed: endDate.getTime() - startDate.getTime(),
    };
  }

  async pass(facts, delegator, memory, conflictResolution, pass) {
  
    const premisesAgenda = pass === 0 ? memory.premises : memory.getDirtyPremises();

   
    premisesAgenda.forEach((premise) => {
      try {
        delegator.set((segment) => { 
          const segmentName = (typeof segment === 'symbol') ? segment.toString() : segment;
      
          memory.segmentInPremise(segment, premise);
        });
        memory.getState(premise).value = premise.when(facts); 
      } catch (error) { 
        memory.getState(premise).value = undefined;
       
      } finally {
        delegator.unset();
      }
    });
  
    const actionsAgenda = pass === 0 ? memory.actions : premisesAgenda
      .reduce((acc, premise) => [...new Set([...acc, ...premise.actions])], [])
      .filter((action) => {
        const { fired, discarded } = memory.getState(action);
        return !fired && !discarded;
      });
   
   
    actionsAgenda.forEach((action) => {
      memory.getState(action).ready = action.premises.reduce((acc, premise) => acc
        && memory.getState(premise).value, true);
    });

    const conflictSet = memory.actions.filter((action) => { 
      const { fired, ready, discarded } = memory.getState(action);
      return ready && !fired && !discarded;
    });
   
   
    const action = conflictResolution.select(conflictSet);
    if (!action) {
  
      return false; 
    }
   
    
    memory.getState(action).fired = true; 
    try {
      memory.clearDirtySegments();
      delegator.set((segment) => { 
        const segmentName = (typeof segment === 'symbol') ? segment.toString() : segment;
       
        memory.segmentInAction(segment);
      });
      await action.fire(facts); 
    } catch (error) { 
      
      throw new RuleError(`error in action (then): ${action.name}`, error);
    } finally {
      delegator.unset();
    }
    
    return true;
  }
}

module.exports = Rools;
