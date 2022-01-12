const acneRule = [];
const { Rools, Rule } = require('rools');
acneRule[1] = new Rule({
    name: 'ACNE1',
    when: (facts) => facts.acne.redness === "N",
    then: (facts) => {
        facts.acne.category = 'Không bỏng rát';
    },
});

acneRule[2] = new Rule({
    name: 'ACNE2',
    when: (facts) => facts.acne.redness === "Ít",
    then: (facts) => {
        facts.acne.category = 'Không bỏng rát';
    },
});

acneRule[3] = new Rule({
    name: 'ACNE3',
    when: (facts) => facts.acne.redness === "Trung bình",
    then: (facts) => {
        facts.acne.category = 'Bỏng rát';
    },
});

acneRule[4] = new Rule({
    name: 'ACNE4',
    when: (facts) => facts.acne.redness === "Nhiều",
    then: (facts) => {
        facts.acne.category = 'Bỏng rát';
    },
});

acneRule[5] = new Rule({
    name: 'ACNE5',
    when: (facts) => facts.acne.parts === "Vùng chữ T",
    then: (facts) => {
        facts.acne.cateParts = 'Thông thường';
        facts.acne.areaP = 2
    },
});

acneRule[6] = new Rule({
    name: 'ACNE6',
    when: (facts) => facts.acne.parts === "Mũi",
    then: (facts) => {
        facts.acne.cateParts = 'Thông thường';
        facts.acne.areaP = 1
    },
});

acneRule[7] = new Rule({
    name: 'ACNE7',
    when: (facts) => facts.acne.parts === "Khuôn mặt",
    then: (facts) => {
        facts.acne.cateParts = 'Thông thường';
        facts.acne.areaP = 1
    },
});

acneRule[8] = new Rule({
    name: 'ACNE8',
    when: (facts) => facts.acne.parts === "Cổ",
    then: (facts) => {
        facts.acne.cateParts = 'Hiếm';
        facts.acne.areaP = 2
    },
});

acneRule[9] = new Rule({
    name: 'ACNE9',
    when: (facts) => facts.acne.parts === "Ngực",
    then: (facts) => {
        facts.acne.cateParts = 'Hiếm';
        facts.acne.areaP = 2
    },
});

acneRule[10] = new Rule({
    name: 'ACNE10',
    when: (facts) => facts.acne.parts === "Lưng",
    then: (facts) => {
        facts.acne.cateParts = 'Hiếm';
        facts.acne.areaP = 3
    },
});

acneRule[11] = new Rule({
    name: 'ACNE11',
    when: (facts) => facts.acne.parts === "Mông",
    then: (facts) => {
        facts.acne.cateParts = 'Cực hiếm';
        facts.acne.areaP = 3
    },
});

acneRule[12] = new Rule({
    name: 'ACNE12',
    when: (facts) => facts.acne.parts === "Đùi",
    then: (facts) => {
        facts.acne.cateParts = 'Cực hiếm';
        facts.acne.areaP = 3
    },
});

acneRule[13] = new Rule({
    name: 'ACNE13',
    when: (facts) => facts.acne.parts === "Đùi",
    then: (facts) => {
        facts.acne.cateParts = 'Cực hiếm';
        facts.acne.areaP = 3
    },
});

acneRule[14] = new Rule({
    name: 'ACNE14',
    when: (facts) => facts.acne.parts === "Cánh tay",
    then: (facts) => {
        facts.acne.cateParts = 'Cực hiếm';
        facts.acne.areaP = 3
    },
});

acneRule[15] = new Rule({
    name: 'ACNE15',
    when: [
        (facts) => facts.acne.category === 'Không bỏng rát',
        (facts) => facts.acne.cateParts === 'Thông thường',
    ],
    then: (facts) => {
        facts.acne.type = 'Không viêm';
    },
});


acneRule[16] = new Rule({
    name: 'ACNE16',
    when: [
        (facts) => facts.acne.category === 'Bỏng rát',
        (facts) => facts.acne.cateParts === 'Thông thường',
    ],
    then: (facts) => {
        facts.acne.type = 'Viêm';
    },
});

acneRule[17] = new Rule({
    name: 'ACNE17',
    when: [
        (facts) => facts.acne.category === 'Bỏng rát',
        (facts) => facts.acne.cateParts === 'Cực hiếm',
    ],
    then: (facts) => {
        facts.acne.type = 'Nang';
    },
});

acneRule[50] = new Rule({
    name: 'ACNE50',
    when: [
        (facts) => facts.acne.category === 'Bỏng rát',
        (facts) => facts.acne.cateParts === 'Hiếm',
    ],
    then: (facts) => {
        facts.acne.type = 'Nang';
    },
});

acneRule[18] = new Rule({
    name: 'ACNE18',
    when: [
        (facts) => facts.acne.type === 'Không viêm',
        (facts) => facts.acne.color === 'Trắng',
    ],
    then: (facts) => {
        facts.acne.name = 'Mụn trứng cá';
    },
});

acneRule[19] = new Rule({
    name: 'ACNE19',
    when: [
        (facts) => facts.acne.type === 'Không viêm',
        (facts) => facts.acne.color === 'Đen',
    ],
    then: (facts) => {
        facts.acne.name = 'Mụn đầu đen';
    },
});

acneRule[20] = new Rule({
    name: 'ACNE20',
    when: [
        (facts) => facts.acne.type === 'Nang',
        (facts) => facts.acne.color === 'Vàng',
        (facts) => facts.acne.painful === 'Y',
        (facts) => facts.acne.pus === 'Y',
        (facts) => facts.acne.hard === 'N',
    ],
    then: (facts) => {
        facts.acne.name = 'Mụn Nang';
    },
});

acneRule[21] = new Rule({
    name: 'ACNE21',
    when: [
        (facts) => facts.acne.type === 'Viêm',
        (facts) => facts.acne.pus === 'Y',
        (facts) => facts.acne.hard === 'Y',
    ],
    then: (facts) => {
        facts.acne.name = 'Mụn viêm';
    },
});

acneRule[22] = new Rule({
    name: 'ACNE22',
    when: [ 
        (facts) => facts.acne.type === 'Viêm',
        (facts) => facts.acne.pus === 'Y',
        (facts) => facts.acne.color === 'Trắng',
    ],
    then: (facts) => {
        facts.acne.name = 'Mụn mủ';
    },
});

acneRule[23] = new Rule({
    name: 'ACNE23',
    when: [
        (facts) => facts.acne.type === 'Nang',
        (facts) => facts.acne.color === 'Đỏ',
        (facts) => facts.acne.painful === 'Y',
        (facts) => facts.acne.pus === 'N',
        (facts) => facts.acne.hard === 'Y',
    ],
    then: (facts) => {
        facts.acne.name = 'Mụn bọc u';
    },
});

acneRule[24] = new Rule({
    name: 'ACNE24',
    when: [
        (facts) => facts.acne.name === 'Mụn bọc u',
        (facts) => facts.acne.severity >= 11,
    ],
    then: (facts) => {
        facts.acne.treatment = 'isotretinoin'
    }
});

acneRule[100] = new Rule({
    name: 'ACNE24',
    when: [
        (facts) => facts.acne.name === 'Mụn Nang',
        (facts) => facts.acne.severity >= 11,
    ],
    then: (facts) => {
        facts.acne.treatment = 'isotretinoin'
    }
});

acneRule[25] = new Rule({
    name: 'ACNE25',
    when: [
        (facts) => facts.acne.name === 'Mụn bọc u',
        (facts) => facts.acne.severity < 11,
        (facts) => facts.acne.severity >= 6,
    ],
    then: (facts) => {
        facts.acne.treatment = 'antibiotics + adapalene + BPO'
    }
});

acneRule[26] = new Rule({
    name: 'ACNE26',
    when: [
        (facts) => facts.acne.name === 'Mụn bọc u',
        (facts) => facts.acne.severity < 6,
        (facts) => facts.acne.severity >= 0,
    ],
    then: (facts) => {
        facts.acne.treatment = 'antibiotics + adapalene'
    }
});

acneRule[27] = new Rule({
    name: 'ACNE27',
    when: [
        (facts) => facts.acne.name === 'Mụn trứng cá',
    ],
    then: (facts) => {
        facts.acne.treatment = 'topical retinoid'
    }
});

acneRule[28] = new Rule({
    name: 'ACNE28',
    when: [
        (facts) => facts.acne.name === 'Mụn đầu đen',
    ],
    then: (facts) => {
        facts.acne.treatment = 'topical retinoid'
    }
});


acneRule[29] = new Rule({
    name: 'ACNE29',
    when: [
        (facts) => facts.acne.name === 'Mụn mủ',
        (facts) => facts.acne.severity >= 11,
    ],
    then: (facts) => {
        facts.acne.treatment = 'isotretinoin'
    }
});

acneRule[30] = new Rule({
    name: 'ACNE30',
    when: [
        (facts) => facts.acne.name === 'Mụn mủ',
        (facts) => facts.acne.severity < 11,
    ],
    then: (facts) => {
        facts.acne.treatment = 'adapalene/clindamycin + BPO'
    }
});

acneRule[31] = new Rule({
    name: 'ACNE31',
    when: [
        (facts) => facts.acne.name === 'Mụn viêm',
    ],
    then: (facts) => {
        facts.acne.treatment = 'benzoyl peroxide or salicylic acid'
    }
});

acneRule[32] = new Rule({
    name: 'ACNE32',
    when: [
        (facts) => facts.acne.name === 'Mụn viêm',
    ],
    then: (facts) => {
        facts.acne.typeP = 2;
        facts.acne.pic = 'papule.png';
    }
});

acneRule[33] = new Rule({
    name: 'ACNE33',
    when: [
        (facts) => facts.acne.name === 'Mụn trứng cá',
    ],
    then: (facts) => {
        facts.acne.typeP = 0;
        facts.acne.pic = 'white-head.png';
    }
});

acneRule[34] = new Rule({
    name: 'ACNE34',
    when: [
        (facts) => facts.acne.name === 'Mụn đầu đen',
    ],
    then: (facts) => {
        facts.acne.typeP = 0;
        facts.acne.pic = 'black-head.png';
    }
});

acneRule[35] = new Rule({
    name: 'ACNE35',
    when: [
        (facts) => facts.acne.name === 'Mụn mủ',
    ],
    then: (facts) => {
        facts.acne.typeP = 3;
        facts.acne.pic = 'pustule.png';
    }
});

acneRule[36] = new Rule({
    name: 'ACNE36',
    when: [
        (facts) => facts.acne.name === 'Mụn bọc u',
    ],
    then: (facts) => {
        facts.acne.typeP = 4;
        facts.acne.pic = 'nodule.png';
    }
});

acneRule[37] = new Rule({
    name: 'ACNE37',
    when: [
        (facts) => facts.acne.name === 'Mụn Nang',
    ],
    then: (facts) => {
        facts.acne.typeP = 5;
        facts.acne.pic = 'cystk.png';
    }
});

acneRule[38] = new Rule({
    name: 'ACNE38',
    when: [
        (facts) => facts.acne.detailPart === 'Cằm',
    ],
    then: (facts) => {
        facts.acne.areaP = 1
    }
});

acneRule[39] = new Rule({
    name: 'ACNE39',
    when: [
        (facts) => facts.acne.detailPart === 'Mũi',
    ],
    then: (facts) => {
        facts.acne.areaP = 1
    }
});

acneRule[40] = new Rule({
    name: 'ACNE40',
    when: [
        (facts) => facts.acne.detailPart === 'Má',
    ],
    then: (facts) => {
        facts.acne.areaP = 2
    }
});

acneRule[41] = new Rule({
    name: 'ACNE41',
    when: [
        (facts) => facts.acne.detailPart === 'Chán',
    ],
    then: (facts) => {
        facts.acne.areaP = 2
    }
});

acneRule[42] = new Rule({
    name: 'ACNE42',
    when: [
        (facts) => facts.acne.noOfLession === '0 – 4',
    ],
    then: (facts) => {
        facts.acne.noP = 1
    }
});

acneRule[43] = new Rule({
    name: 'ACNE43',
    when: [
        (facts) => facts.acne.noOfLession === '5 – 9',
    ],
    then: (facts) => {
        facts.acne.noP = 2
    }
});

acneRule[44] = new Rule({
    name: 'ACNE44',
    when: [
        (facts) => facts.acne.noOfLession === '10 - 19',
    ],
    then: (facts) => {
        facts.acne.noP = 3
    }
});

acneRule[45] = new Rule({
    name: 'ACNE45',
    when: [
        (facts) => facts.acne.noOfLession === '20 - 29',
    ],
    then: (facts) => {
        facts.acne.noP = 4
    }
});

acneRule[46] = new Rule({
    name: 'ACNE46',
    when: [
        (facts) => facts.acne.noOfLession === '>=30',
    ],
    then: (facts) => {
        facts.acne.noP = 5
    }
});

module.exports = acneRule;