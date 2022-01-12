class Question {
    constructor(question, answer, type, condition) {
        this.active = true;
        this.question = question;
        this.answer = answer;
        this.type = type;
        this.condition = condition;

        this.checkCondition = this.checkCondition.bind(this);
        this.loopAllAttr = this.loopAllAttr.bind(this);
    }

    loopAllAttr(obj, conditionObj) {
        for (let attr in conditionObj) {

            let ele = conditionObj[attr];

            if (typeof (ele) === 'object') {
                return this.loopAllAttr(obj[attr], ele)
            } else {
                if (obj[attr] != ele)
                    return false;
            }
        }

        return true;
    }

    checkCondition(facts) {
        return this.loopAllAttr(facts, this.condition);
    }

    
}

module.exports = Question;