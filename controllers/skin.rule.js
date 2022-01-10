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

skinRules[18] = new Rule({
    name: 'TOK18',
    when: [
        (facts) => facts.skins.acne === "Y",
        (facts) => facts.skins.timeCare < 6,

    ],
    then: (facts) => {
        facts.skins.product.push('Retinol');
    },
});

skinRules[19] = new Rule({
    name: 'TOK19',
    when: [
        (facts) => facts.skins.acne === "Y",
        (facts) => facts.skins.pregnant === "N",
        (facts) => facts.skins.timeCare > 6,

    ],
    then: (facts) => {
        facts.skins.product.push('Adaplyn(0.1%)');
    },
});

skinRules[20] = new Rule({
    name: 'TOK20',
    when: [
        (facts) => facts.skins.old === "Y",
        (facts) => facts.skins.pregnant === "N",
    ],
    then: (facts) => {
        facts.skins.product.push('Retinoic');
    },
});

skinRules[21] = new Rule({
    name: 'TOK21',
    when: [
        (facts) => facts.skins.type === "Da khô",
    ],
    then: (facts) => {
        facts.skins.product.push('Niacinamide (<5%)');
    },
});

skinRules[22] = new Rule({
    name: 'TOK22',
    when: [
        (facts) => facts.skins.deep === "Y",
    ],
    then: (facts) => {
        facts.skins.product.push('Niacinamide (5%-10%)');
    },
});

skinRules[23] = new Rule({
    name: 'TOK23',
    when: [
        (facts) => facts.user.age > 30,
    ],
    then: (facts) => {
        facts.skins.product.push('Niacinamide (>20%)');
    },
});


skinRules[24] = new Rule({
    name: 'TOK24',
    when: [
        (facts) => facts.skins.work === "Trong phòng diều hòa",
    ],
    then: (facts) => {
        facts.skins.sunProtect.spf = 'SPF 15 hoặc SPF 30';
    },
});


skinRules[25] = new Rule({
    name: 'TOK25',
    when: [
        (facts) => facts.skins.work === "Trong phòng bình thường",
    ],
    then: (facts) => {
        facts.skins.sunProtect.spf = 'SPF 15 hoặc SPF 30';
    },
});

skinRules[26] = new Rule({
    name: 'TOK26',
    when: [
        (facts) => facts.skins.work === "Ngoài trời",
    ],
    then: (facts) => {
        facts.skins.sunProtect.spf = 'SPF 50';
    },
});

skinRules[27] = new Rule({
    name: 'TOK27',
    when: [
        (facts) => facts.skins.type === "Da khô",
    ],
    then: (facts) => {
        facts.skins.sunProtect.type = 'Chống nắng vật lý';
    },
});

skinRules[28] = new Rule({
    name: 'TOK28',
    when: [
        (facts) => facts.skins.type === "Da dầu",
    ],
    then: (facts) => {
        facts.skins.sunProtect.type = 'Chống nắng hóa học';
    },
});

skinRules[29] = new Rule({
    name: 'TOK29',
    when: [
        (facts) => facts.skins.type === "Da hỗn hợp",
    ],
    then: (facts) => {
        facts.skins.sunProtect.type = 'Chống nắng hóa học';
    },
});

skinRules[30] = new Rule({
    name: 'TOK30',
    when: [
        (facts) => facts.skins.type === "Da thường",
    ],
    then: (facts) => {
        facts.skins.sunProtect.type = 'Chống nắng vật lý';
    },
});

skinRules[31] = new Rule({
    name: 'TOK31',
    when: [
        (facts) => facts.user.age < 20,
    ],
    then: (facts) => {
        facts.skins.normalP += 5;
        facts.skins.oilP += 20;
        facts.skins.dryP += 50;
        facts.skins.combineP += 25;
    },
});

skinRules[32] = new Rule({
    name: 'TOK32',
    when: [
        (facts) => facts.user.age >= 20,
        (facts) => facts.user.age < 30,
    ],
    then: (facts) => {
        facts.skins.normalP += 20;
        facts.skins.oilP += 20;
        facts.skins.dryP += 35;
        facts.skins.combineP += 25;
    },
});

skinRules[33] = new Rule({
    name: 'TOK33',
    when: [
        (facts) => facts.user.age >= 30,
        (facts) => facts.user.age < 40,
    ],
    then: (facts) => {
        facts.skins.normalP += 10;
        facts.skins.oilP += 30;
        facts.skins.dryP += 30;
        facts.skins.combineP += 30;
    },
});

skinRules[34] = new Rule({
    name: 'TOK34',
    when: [
        (facts) => facts.user.age >= 40,
    ],
    then: (facts) => {
        facts.skins.normalP += 5;
        facts.skins.oilP += 60;
        facts.skins.dryP += 20;
        facts.skins.combineP += 15;
    },
});

skinRules[35] = new Rule({
    name: 'TOK35',
    when: [
        (facts) => facts.skins.work === "Trong phòng diều hòa",
    ],
    then: (facts) => {
        facts.skins.dryP += 60;
    },
});

skinRules[36] = new Rule({
    name: 'TOK36',
    when: [
        (facts) => facts.skins.work === "Trong phòng bình thường",
    ],
    then: (facts) => {
        facts.skins.normalP += 25;
        facts.skins.combineP += 25;
    },
});

skinRules[37] = new Rule({
    name: 'TOK37',
    when: [
        (facts) => facts.skins.work === "Ngoài trời",
    ],
    then: (facts) => {
        facts.skins.oilP += 70;
        facts.skins.dryP += 20;
        facts.skins.combineP += 25;
    },
});

module.exports = skinRules;
