const skinRules = [];
const { Rools, Rule } = require('rools');
skinRules[1] = new Rule({
    name: 'TOK1',
    when: (facts) => facts.skins.balance === "Y",
    then: (facts) => {
        facts.skins.normalP += 45;
    },
});

skinRules[2] = new Rule({
    name: 'TOK2',
    when: (facts) => facts.skins.color === "Da sáng",
    then: (facts) => {
        facts.skins.normalP += 25;
    },
});

skinRules[3] = new Rule({
    name: 'TOK3',
    when: (facts) => facts.skins.color === "Da xỉn màu",
    then: (facts) => {
        facts.skins.dryP += 20;
        facts.skins.oilP += 5;
    },
});

skinRules[13] = new Rule({
    name: 'TOK13',
    when: (facts) => facts.skins.color === "Da sáng bóng",
    then: (facts) => {
        facts.skins.oilP += 80;
    },
});

skinRules[4] = new Rule({
    name: 'TOK4',
    when: (facts) => facts.skins.oilT === "Y",
    then: (facts) => {
        facts.skins.combineP += 100;
    },
});

skinRules[5] = new Rule({
    name: 'TOK5',
    when: (facts) => facts.skins.suface === "Da mịn màng",
    then: (facts) => {
        facts.skins.normalP += 55;
    },
});

skinRules[6] = new Rule({
    name: 'TOK6',
    when: (facts) => facts.skins.suface === "Da thô rap",
    then: (facts) => {
        facts.skins.dryP += 55;
    },
});

skinRules[7] = new Rule({
    name: 'TOK7',
    when: (facts) => facts.skins.isStretch === "Y",
    then: (facts) => {
        facts.skins.dryP += 50;
    },
});

skinRules[8] = new Rule({
    name: 'TOK8',
    when: (facts) => facts.skins.toner === "Da đều màu",
    then: (facts) => {
        facts.skins.normalP += 35;
    },
});

skinRules[9] = new Rule({
    name: 'TOK9',
    when: (facts) => facts.skins.toner === "Da không đều màu",
    then: (facts) => {
        facts.skins.dryP += 15;
    },
});

skinRules[10] = new Rule({
    name: 'TOK10',
    when: (facts) => facts.skins.pores === "Không nhìn thấy",
    then: (facts) => {
        facts.skins.dryP += 50;
    },
});

skinRules[11] = new Rule({
    name: 'TOK11',
    when: (facts) => facts.skins.pores === "To",
    then: (facts) => {
        facts.skins.oilP += 25;
        facts.skins.combineP += 25;
    },
});

skinRules[12] = new Rule({
    name: 'TOK12',
    when: (facts) => facts.skins.pores === "Nhỏ",
    then: (facts) => {
        facts.skins.normalP += 50;
    },
});

skinRules[14] = new Rule({
    name: 'TOK14',
    when: [
        (facts) => facts.skins.normalP >= facts.skins.dryP,
        (facts) => facts.skins.normalP >= facts.skins.oilP,
        (facts) => facts.skins.normalP >= facts.skins.combineP
    ],
    then: (facts) => {
        facts.skins.type = "Da thường";
    },
});

skinRules[15] = new Rule({
    name: 'TOK15',
    when: [
        (facts) => facts.skins.dryP >= facts.skins.normalP,
        (facts) => facts.skins.dryP >= facts.skins.oilP,
        (facts) => facts.skins.dryP >= facts.skins.combineP
    ],
    then: (facts) => {
        facts.skins.type = "Da khô";
    },
});

skinRules[16] = new Rule({
    name: 'TOK16',
    when: [
        (facts) => facts.skins.oilP >= facts.skins.dryP,
        (facts) => facts.skins.oilP >= facts.skins.normalP,
        (facts) => facts.skins.oilP >= facts.skins.combineP
    ],
    then: (facts) => {
        facts.skins.type = "Da dầu";
    },
});

skinRules[17] = new Rule({
    name: 'TOK17',
    when: [
        (facts) => facts.skins.combineP >= facts.skins.normalP,
        (facts) => facts.skins.combineP >= facts.skins.oilP,
        (facts) => facts.skins.combineP >= facts.skins.dryP
    ],
    then: (facts) => {
        facts.skins.type = "Da hỗn hợp";
    },
});

module.exports = skinRules;
