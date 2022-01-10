const acneRule = [];
const { Rools, Rule } = require('rools');
acneRule[1] = new Rule({
    name: 'ACNE1',
    when: (facts) => facts.skins.acne.redness === "N",
    then: (facts) => {
        facts.skins.acne.category = 'Không bỏng rát';
    },
});

acneRule[2] = new Rule({
    name: 'ACNE2',
    when: (facts) => facts.skins.acne.redness === "Ít",
    then: (facts) => {
        facts.skins.acne.category = 'Không bỏng rát';
    },
});

acneRule[3] = new Rule({
    name: 'ACNE3',
    when: (facts) => facts.skins.acne.redness === "Trung bình",
    then: (facts) => {
        facts.skins.acne.category = 'Bỏng rát';
    },
});

acneRule[4] = new Rule({
    name: 'ACNE4',
    when: (facts) => facts.skins.acne.redness === "Nhiều",
    then: (facts) => {
        facts.skins.acne.category = 'Bỏng rát';
    },
});

acneRule[5] = new Rule({
    name: 'ACNE5',
    when: (facts) => facts.skins.acne.parts === "Vùng chữ T",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Thông thường';
    },
});

acneRule[6] = new Rule({
    name: 'ACNE6',
    when: (facts) => facts.skins.acne.parts === "Mũi",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Thông thường';
    },
});

acneRule[7] = new Rule({
    name: 'ACNE7',
    when: (facts) => facts.skins.acne.parts === "Khuôn mặt",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Thông thường';
    },
});

acneRule[8] = new Rule({
    name: 'ACNE8',
    when: (facts) => facts.skins.acne.parts === "Cổ",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Hiếm';
    },
});

acneRule[9] = new Rule({
    name: 'ACNE9',
    when: (facts) => facts.skins.acne.parts === "Ngực",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Hiếm';
    },
});

acneRule[10] = new Rule({
    name: 'ACNE10',
    when: (facts) => facts.skins.acne.parts === "Lưng",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Hiếm';
    },
});

acneRule[11] = new Rule({
    name: 'ACNE11',
    when: (facts) => facts.skins.acne.parts === "Mông",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Cực hiếm';
    },
});

acneRule[12] = new Rule({
    name: 'ACNE12',
    when: (facts) => facts.skins.acne.parts === "Đùi",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Cực hiếm';
    },
});

acneRule[13] = new Rule({
    name: 'ACNE13',
    when: (facts) => facts.skins.acne.parts === "Đùi",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Cực hiếm';
    },
});

acneRule[14] = new Rule({
    name: 'ACNE14',
    when: (facts) => facts.skins.acne.parts === "Cánh tay",
    then: (facts) => {
        facts.skins.acne.cateParts = 'Cực hiếm';
    },
});

acneRule[15] = new Rule({
    name: 'ACNE15',
    when: [
        (facts) => facts.skins.acne.category === 'Không bỏng rát',
        (facts) => facts.skins.acne.cateParts === 'Thông thường',
    ],
    then: (facts) => {
        facts.skins.acne.type = 'Không viêm';
    },
});


acneRule[16] = new Rule({
    name: 'ACNE16',
    when: [
        (facts) => facts.skins.acne.category === 'Bỏng rát',
        (facts) => facts.skins.acne.cateParts === 'Thông thường',
    ],
    then: (facts) => {
        facts.skins.acne.type = 'Viêm';
    },
});

acneRule[17] = new Rule({
    name: 'ACNE17',
    when: [
        (facts) => facts.skins.acne.category === 'Bỏng rát',
        (facts) => facts.skins.acne.cateParts === 'Cực hiếm',
    ],
    then: (facts) => {
        facts.skins.acne.type = 'Nang';
    },
});

acneRule[18] = new Rule({
    name: 'ACNE18',
    when: [
        (facts) => facts.skins.acne.type === 'Không viêm',
        (facts) => facts.skins.acne.color === 'Trắng',
    ],
    then: (facts) => {
        facts.skins.acne.name = 'Mụn trứng cá';
    },
});

acneRule[19] = new Rule({
    name: 'ACNE19',
    when: [
        (facts) => facts.skins.acne.type === 'Không viêm',
        (facts) => facts.skins.acne.color === 'Đen',
    ],
    then: (facts) => {
        facts.skins.acne.name = 'Mụn đầu đen';
    },
});

acneRule[20] = new Rule({
    name: 'ACNE20',
    when: [
        (facts) => facts.skins.acne.type === 'Nang',
        (facts) => facts.skins.acne.color === 'Vàng',
        (facts) => facts.skins.acne.painful === 'Y',
        (facts) => facts.skins.acne.pus === 'Y',
        (facts) => facts.skins.acne.soft === 'Y',
    ],
    then: (facts) => {
        facts.skins.acne.name = 'Mụn Nang';
    },
});

acneRule[21] = new Rule({
    name: 'ACNE21',
    when: [
        (facts) => facts.skins.acne.type === 'Viêm',
        (facts) => facts.skins.acne.pus === 'Y',
        (facts) => facts.skins.acne.hard === 'Y',
    ],
    then: (facts) => {
        facts.skins.acne.name = 'Mụn viêm';
    },
});

acneRule[22] = new Rule({
    name: 'ACNE22',
    when: [ 
        (facts) => facts.skins.acne.type === 'Viêm',
        (facts) => facts.skins.acne.pus === 'Y',
        (facts) => facts.skins.acne.color === 'Trắng',
    ],
    then: (facts) => {
        facts.skins.acne.name = 'Mụn mủ';
    },
});

acneRule[23] = new Rule({
    name: 'ACNE23',
    when: [
        (facts) => facts.skins.acne.type === 'Nang',
        (facts) => facts.skins.acne.color === 'Đỏ',
        (facts) => facts.skins.acne.painful === 'Y',
        (facts) => facts.skins.acne.pus === 'N',
        (facts) => facts.skins.acne.hard === 'Y',
    ],
    then: (facts) => {
        facts.skins.acne.name = 'Mụn bọc u';
    },
});

acneRule[24] = new Rule({
    name: 'ACNE24',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn bọc u',
        (facts) => facts.skins.acne.severity >= 11,
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'isotretinoin'
    }
});

acneRule[25] = new Rule({
    name: 'ACNE25',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn bọc u',
        (facts) => facts.skins.acne.severity < 11,
        (facts) => facts.skins.acne.severity >= 6,
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'antibiotics + adapalene + BPO'
    }
});

acneRule[26] = new Rule({
    name: 'ACNE26',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn bọc u',
        (facts) => facts.skins.acne.severity < 6,
        (facts) => facts.skins.acne.severity >= 0,
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'antibiotics + adapalene'
    }
});

acneRule[27] = new Rule({
    name: 'ACNE27',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn trứng cá',
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'topical retinoid'
    }
});

acneRule[28] = new Rule({
    name: 'ACNE28',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn đầu đen',
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'topical retinoid'
    }
});


acneRule[29] = new Rule({
    name: 'ACNE29',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn mủ',
        (facts) => facts.skins.acne.severity >= 11,
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'isotretinoin'
    }
});

acneRule[30] = new Rule({
    name: 'ACNE30',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn mủ',
        (facts) => facts.skins.acne.severity < 11,
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'adapalene/clindamycin + BPO'
    }
});

acneRule[31] = new Rule({
    name: 'ACNE31',
    when: [
        (facts) => facts.skins.acne.name = 'Mụn viêm',
    ],
    then: (facts) => {
        facts.skins.acne.treatment = 'benzoyl peroxide or salicylic acid'
    }
});

module.exports = acneRule;