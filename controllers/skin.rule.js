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

skinRules[140] = new Rule({
    name: 'TOK140',
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
        (facts) => facts.skins.normalP >= facts.skins.combineP,
        (facts) => facts.skins.normalP >= 100
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
        (facts) => facts.skins.dryP >= facts.skins.combineP,
        (facts) => facts.skins.dryP >= 100
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
        (facts) => facts.skins.oilP >= facts.skins.combineP,
        (facts) => facts.skins.oilP >= 100
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
        (facts) => facts.skins.combineP >= facts.skins.dryP,
        (facts) => facts.skins.combineP >= 100
    ],
    then: (facts) => {
        facts.skins.type = "Da hỗn hợp";
    },
});

skinRules[18] = new Rule({
    name: 'TOK18',
    when: [
        (facts) => facts.skins.acne === "Y",
        (facts) => facts.skins.timeCare === "<6",

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
        (facts) => facts.skins.timeCare === ">6",
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

skinRules[38] = new Rule({
    name: 'TOK38',
    when: [
        (facts) => facts.skins.work === "Ngoài trời",
        (facts) => facts.skins.sweat === "Y",
    ],
    then: (facts) => {
        facts.skins.sunProtect.label = "Very water resistant";
        facts.skins.product.push('Da bạn hay tiếp xúc nhiều với bụi bẩn bổ sung thêm AHA (Axit mandelic, axit lactic)và  (Axit béo) gia tăng khả năng làm sạch');
    },
});

skinRules[39] = new Rule({
    name: 'TOK39',
    when: [
        (facts) => facts.skins.type === "Da thường",
    ],
    then: (facts) => {
        facts.skins.forms = "gel, lotion";
        facts.skins.tip = "Hãy sử dụng các sản phẩm dịu nhẹ và có tác dụng nuôi dưỡng, cấp nước và mang lại sự cân bằng cho làn da của bạn.Giữ mọi thứ đơn giản.không cần mất nhiều thời gian lựa chọn mỹ phẩm chăm sóc da phù hợp.Tuy nhiên, nên lựa chọn các dòng mỹ phẩm có nguồn gốc, uy tín, tránh dùng các sản phẩm trắng nhanh.";
        facts.skins.goodGradient = [
            "Dimethicone: Làm mịn và mền da mà không có dầu",
            "Algae Extract: chất giữ ẩm nguồn gốc tảo biển",
            "Panthenol: provitamin B5: dưỡng ẩm làm mềm, dịu không gây kích ứng",
            "Sodium Hyaluronate: HA có tác dụng hỗ trợ sản xuất collagen trong cơ thể và giúp duy trì độ đàn hồi",
            "Glycolic Acid: Thuộc họ AHA dễ dàng hấp thụ, thẩm thấu sâu. An toàn cho mọi loại da. Làn da sáng hơn đều màu hơn.",
        ];
        facts.skins.badGradient = [
            "SD Alcohol 40, Denatured Alcohol, Ethanol and Isopropyl Alcohol: Có thể làm khô da.",
            "Mineral Oil, Petrolatum: Thành phần này có thể gây tắc lỗ chân lông trên da",
            "Isopropyl Myristate and Isopropyl Palmitate: Thành phần này có thể khuyến khích lỗ chân lông bị tắc",
        ]
    },
});

skinRules[40] = new Rule({
    name: 'TOK4',
    when: [
        (facts) => facts.skins.type === "Da dầu",
    ],
    then: (facts) => {
        facts.skins.forms = "froam(dạng bọt)";
        facts.skins.tip = "Làm sạch hai lần. Vào buổi sáng, bạn có thể sử dụng sữa rửa mặt tạo bọt và tiếp theo là toner có axit glycolic để tẩy tế bào chết trên da, đồng thời làm thông thoáng lỗ chân lông và loại bỏ bụi bẩn. Vào ban đêm, làm sạch và săn chắc da một lần nữa và cân nhắc sử dụng kem dưỡng da ban đêm chứa retinoid để kiểm soát dầu.";
        facts.skins.goodGradient = [
            "Salicylic and buffered glycolic acid: Để hòa tan dầu béo bề mặt nặng hơn và làm sạch sâu lớp biểu bì.",
            "Oil-free ingredients: Kiểm soát và hạn chế lượng dầu thừa ở trên bề mặt da, làm giảm độ bóng nhờn ở những bạn sở hữu làn da dầu.",
            "Sodium Hyaluronate: Đây là một thành phần dưỡng ẩm hoạt tính sinh học có thể liên kết độ ẩm gấp 1000 lần trọng lượng của nó đối với da. Nó là một trong những thành phần dưỡng ẩm da được sử dụng phổ biến nhất cho da nhờn",
            "Sodium PCA: Một chất liên kết nước giúp hấp thụ nước trong da.",
        ];
        facts.skins.badGradient = [
            "Comedogenic products:  Gây bít tắc lỗ chân lông có thể dẫn đến mụn.",
            "Mineral Oil and Petrolatum: Nó có thể gây tắc lỗ chân lông trên da.",
        ]
    },
});

skinRules[41] = new Rule({
    name: 'TOK41',
    when: [
        (facts) => facts.skins.type === "Da khô",
    ],
    then: (facts) => {
        facts.skins.forms = "cream có oil";
        facts.skins.tip = "Tránh rửa mặt quá nhiều do nó có thể dẫn đến việc khô da. Vì thế buổi sáng không cần phải rửa mặt nếu đã làm nó vào buổi tố. serum chống oxy hóa, kem dưỡng mắt và kem dưỡng ẩm có chỉ số SPF 30 hoặc cao hơn. Vào cuối ngày, hãy sử dụng kem hoặc chất tẩy rửa dạng dầu không làm mất đi lớp dầu tự nhiên của da và thoa kem dưỡng ẩm ban đêm.";
        facts.skins.goodGradient = [
            "Hyaluronic acid: có thể hấp thụ gấp 1.000 lần trọng lượng của nó trong nước, làm cho nó trở thành một thành phần chính khi chống lại làn da khô",
            "Glycerine: chất giữ ẩm hiệu quả nhất",
            "Squalane: Hoạt động tương tự bã nhờn, giúp da không bị mất nước trong giấc ngủ.",
        ];
        facts.skins.badGradient = [
            "Denatured alcohols: Chất làm se da.",
            "Fragrances: Nước hoa là chất gây kích ứng da phổ biến và nổi tiếng là nguyên nhân hàng đầu gây dị ứng da. Mặc dù không phải là vấn đề đối với tất cả mọi người, nhưng da khô sẽ khiến bạn dễ bị kích ứng hơn",
            "Salicylic Acid:  Khi sử dụng cho da khô, nó có thể dẫn đến mẩn đỏ, kích ứng và viêm do thiếu dầu.",
        ]
    },
});

skinRules[42] = new Rule({
    name: 'TOK42',
    when: [
        (facts) => facts.skins.type === "Da hỗn hợp",
    ],
    then: (facts) => {
        facts.skins.forms = "sử dụng 2 sản phẩm cho 2 vùng da mặt khác nhau: froam(dạng bọt) cho vùng da dầu, cream có oil cho vùng da khô ";
        facts.skins.tip = "Chìa khóa để chăm sóc da hỗn hợp đó là tạo sự cân bằng trên da, bạn hãy tìm cách cung cấp độ ẩm cho khu vực da khô, mà không làm tăng độ bóng dầu ở những khu vực da khác. Sử dụng những loại kem dưỡng ẩm khác nhau cho những vùng da mặt khác nhau. Sữa rửa mặt dạng kem";
        facts.skins.goodGradient = [
            "Hyaluronic acid: có thể hấp thụ gấp 1.000 lần trọng lượng của nó trong nước cho vùng da khô",
            "Oil-free ingredients: Kiểm soát và hạn chế lượng dầu thừa ở trên bề mặt da, làm giảm độ bóng nhờn cho vùng da dầu",
            "Sodium PCA: Một chất liên kết nước giúp hấp thụ nước trong da. cho vùng da dầu",
        ];
        facts.skins.badGradient = [
            "Fragrances: Nước hoa là chất gây kích ứng da phổ biến và nổi tiếng là nguyên nhân hàng đầu gây dị ứng da. Mặc dù không phải là vấn đề đối với tất cả mọi người, nhưng da khô sẽ khiến bạn dễ bị kích ứng hơn",
            "SD Alcohol 40, Denatured Alcohol, Ethanol and Isopropyl Alcohol: Có thể làm khô da.",
            "Glycolic Acid: Công dụng của nó trong việc kiểm soát dầu, nó không được khuyến khích cho những người có làn da khô.",
            "Isopropyl Myristate and Isopropyl Palmitate.: Nó có thể khuyến khích các lỗ chân lông bị tắc.",
        ]
    },
});

module.exports = skinRules;
