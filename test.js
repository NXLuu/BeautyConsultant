const fuzzyis = require('fuzzyis');

const { LinguisticVariable, Term, Rule, FIS } = fuzzyis;


let system = new FIS();



// create base of rules for example about "tips"
// in that example we have two input fuzzy variables: services and food
// based on that inputs and some rules for our inference system
// we should get precise value = how many money (in percents) we should leave as a tips

let inputs = [
    new LinguisticVariable('types', [0, 6]),
    new LinguisticVariable('area', [0, 4]),
    new LinguisticVariable('noOfLessions', [0, 50])
];

let outputs = [
    new LinguisticVariable('severity', [0, 75])
];

let TYPES = inputs[0];
let AREA = inputs[1];
let NOOFLESSIONS = inputs[2];
let SEVERITY = outputs[0];


TYPES.addTerm(new Term('normal', 'trapeze', [-0.5, 0, 1, 1.5]));
TYPES.addTerm(new Term('average', 'trapeze', [1.5, 2, 3, 3.5]));
TYPES.addTerm(new Term('bad', 'trapeze', [3.5, 4, 5, 5.5]));

AREA.addTerm(new Term('common', 'sigma', [0, 1]));
AREA.addTerm(new Term('rare', 'sigma', [1, 2]));
AREA.addTerm(new Term('severe', 'sigma', [2, 3]));

NOOFLESSIONS.addTerm(new Term('veryfew', 'triangle', [0, 2, 4]));
NOOFLESSIONS.addTerm(new Term('few', 'triangle', [5, 7.5, 10]));
NOOFLESSIONS.addTerm(new Term('some', 'triangle', [10, 15, 20]));
NOOFLESSIONS.addTerm(new Term('many', 'triangle', [20, 25, 30]));
NOOFLESSIONS.addTerm(new Term('toomany', 'triangle', [30, 40, 50]));

SEVERITY.addTerm(new Term('mild', 'triangle', [0, 2, 5]));
SEVERITY.addTerm(new Term('moderate', 'triangle', [5, 7, 10]));
SEVERITY.addTerm(new Term('severe', 'triangle', [10, 12, 15]));
SEVERITY.addTerm(new Term('verysevere', 'triangle', [15, 25, 40]));
SEVERITY.addTerm(new Term('worst', 'triangle', [40, 55, 75]));


system.inputs = inputs;
system.outputs = outputs;



system.rules = [
    new Rule(
        ['normal', 'common', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'common', 'few'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'common', 'some'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'common', 'many'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'common', 'toomany'],
        ['moderate'],
        'and'
    ),
    // -----
    new Rule(
        ['normal', 'rare', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'rare', 'few'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'rare', 'some'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'rare', 'many'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['normal', 'rare', 'toomany'],
        ['severe'],
        'and'
    ),

    // -----
    new Rule(
        ['normal', 'severe', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['normal', 'severe', 'few'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['normal', 'severe', 'some'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['normal', 'severe', 'many'],
        ['severe'],
        'and'
    ),
    new Rule(
        ['normal', 'severe', 'toomany'],
        ['severe'],
        'and'
    ),
    //----
    new Rule(
        ['average', 'common', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['average', 'common', 'few'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['average', 'common', 'some'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['average', 'common', 'many'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['average', 'common', 'toomany'],
        ['moderate'],
        'and'
    ),

    //----
    new Rule(
        ['average', 'rare', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['average', 'rare', 'few'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['average', 'rare', 'some'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['average', 'rare', 'many'],
        ['severe'], 
        'and'
    ),
    new Rule(
        ['average', 'rare', 'toomany'],
        ['severe'],
        'and'
    ),

    //----
    new Rule(
        ['average', 'severe', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['average', 'severe', 'few'],
        ['severe'],
        'and'
    ),
    new Rule(
        ['average', 'severe', 'some'],
        ['severe'],
        'and'
    ),
    new Rule(
        ['average', 'severe', 'many'],
        ['verysevere'],
        'and'
    ),
    new Rule(
        ['average', 'severe', 'toomany'],
        ['verysevere'],
        'and'
    ),
    
    //---
    new Rule(
        ['bad', 'common', 'veryfew'],
        ['mild'],
        'and'
    ),
    new Rule(
        ['bad', 'common', 'few'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['bad', 'common', 'some'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['bad', 'common', 'many'],
        ['severe'],
        'and'
    ),
    new Rule(
        ['bad', 'common', 'toomany'],
        ['verysevere'],
        'and'
    ),

    //---
    new Rule(
        ['bad', 'rare', 'veryfew'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['bad', 'rare', 'few'],
        ['moderate'],
        'and'
    ),
    new Rule(
        ['bad', 'rare', 'some'],
        ['verysevere'],
        'and'
    ),
    new Rule(
        ['bad', 'rare', 'many'],
        ['worst'],
        'and'
    ),
    new Rule(
        ['bad', 'rare', 'toomany'],
        ['worst'],
        'and'
    ),
    //---
    new Rule(
        ['bad', 'severe', 'veryfew'],
        ['severe'],
        'and'
    ),
    new Rule(
        ['bad', 'severe', 'few'],
        ['verysevere'],
        'and'
    ),
    new Rule(
        ['bad', 'severe', 'some'],
        ['worst'],
        'and'
    ),
    new Rule(
        ['bad', 'severe', 'many'],
        ['worst'],
        'and'
    ),
    new Rule(
        ['bad', 'severe', 'toomany'],
        ['worst'],
        'and'
    ),
    
];

module.exports = system;



