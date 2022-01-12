const bodyRules = [];
let perDiff = require('../function/percent');
const { Rools, Rule } = require('rools');


bodyRules[2] = new Rule({
    name: 'DN2',
    when: [
        (facts) => perDiff(facts.body.bust, facts.body.waist).percent < 5,
        (facts) => perDiff(facts.body.bust, facts.body.hip).percent < 5,
        (facts) => perDiff(facts.body.waist, facts.body.hip).percent < 5,
    ],
    then: (facts) => {
        facts.body.type = "Dáng chữ nhật";
    },
});

bodyRules[3] = new Rule({
    name: 'DN3',
    when: [
        (facts) => perDiff(facts.body.hip, facts.body.bust).percent >= 5,
        (facts) => perDiff(facts.body.hip, facts.body.bust).sign === '<',
        (facts) => perDiff(facts.body.waist, facts.body.bust).percent < 5,
    ],
    then: (facts) => {
        facts.body.type = "Dáng quả táo";
    },
});


bodyRules[4] = new Rule({
    name: 'DN4',
    when: [
        (facts) => perDiff(facts.body.hip, facts.body.bust).percent >= 5,
        (facts) => perDiff(facts.body.hip, facts.body.bust).sign === '>',
    ],
    then: (facts) => {
        facts.body.type = "Dáng quả lê";
    },
});

bodyRules[5] = new Rule({
    name: 'DN5',
    when: [
        (facts) => perDiff(facts.body.waist, facts.body.bust).percent > 25,
        (facts) => perDiff(facts.body.waist, facts.body.bust).sign === '<',
        (facts) => perDiff(facts.body.waist, facts.body.hip).percent > 25,
        (facts) => perDiff(facts.body.waist, facts.body.hip).sign === '<',
    ],
    then: (facts) => {
        facts.body.type = "Dáng đồng hồ cát";
    },
});

bodyRules[6] = new Rule({
    name: 'DN5',
    when: [
        (facts) => perDiff(facts.body.bust, facts.body.hip).percent > 5,
        (facts) => perDiff(facts.body.bust, facts.body.hip).sign === '>',
        (facts) => facts.body.bust - facts.body.waist < 9,
    ],
    then: (facts) => {
        facts.body.type = "Dáng tam giác ngược";
    },
});

bodyRules[7] = new Rule({
    name: 'DN7',
    when: [
        (facts) => facts.body.type === "Dáng chữ nhật",
        
    ],
    then: (facts) => {
        facts.body.exercise = 'Tập nặng với bài tập cơ bựng. Giữ dáng cho phần còn loại của cơ thể bằng các bài tập nhẹ nhàng';
        facts.body.food = 'Thực phẩm giàu chất béo lành mạnh như bơ, cá hồi, các loại hạt,… Thực phẩm giàu protein thực vật. Hạn chế ăn đồ ngọt và các loại thức ăn nhanh.';
        facts.body.clothes = [
            {
                name: 'Áo: Áo cổ cao hoặc trung để che đi ngực nhỏ. Áo có túi ở ngực, có nơ, bèo nhún hoặc cổ bèo sẽ làm ngực bạn có cảm giác to hơn. Áo trễ vai khoe vai nhỏ thon. Tay áo tạo đường cong trên dưới (Xắn tay, Tay bồng, Tay áo flutter, tay áo xòe, tay áo bẻ cổ). Áo triết eo, chiếc áo có đai giả ở phần em và xòe dưới phần mông.',
                pic: 'QT-AO.png',
            },
            {
                name: 'Quần: Phù hợp với mọi kiểu quẩn',
                pic: 'QT-Q.png',
            },
            {
                name: 'Chân váy: Tạo hình khối cho đi phần khuyết điểm bên dưới: Váy xếp ly, Váy bubble, váy xếp ly phần dưới, chân váy xòe tròn, váy đuôi cá.',
                pic: '',
            },
            {
                name: 'Váy: Chọn các kiểu dang váy triết eo đè tạo điểm nhấn.',
                pic: 'QT-V.png',
            },
        ];
    },
});

bodyRules[8] = new Rule({
    name: 'DN8',
    when: [
        (facts) => facts.body.type === "Dáng quả táo",

    ],
    then: (facts) => {
        facts.body.exercise = 'Chú trọng đến những động tác giảm mỡ thừa như gập bụng, squats, plank,…. Các bài tập cường độ cao.';
        facts.body.food = 'Nên chia nhỏ khoảng 5 - 6 bữa hàng ngày, ăn ít nhưng phải ăn thường xuyên. Đồng thời, bạn nên ăn nhiều thực phẩm giàu chất xơ, trái cây tươi, rau cải, vitamin C và sữa ít béo để phù hợp cho cơ thể của mình. Hãy tránh ăn các loại thực phẩm dễ gây ra tình trạng đầy hơi, sưng phù như đồ ăn nhanh, bánh mì...';
        facts.body.clothes = [
            {
                name: 'Áo: Phần cổ áo nên rộng và sâu. Để thu hứt ánh nhìn khỏi phần bụng và tạo cảm giác cơ thể mảnh mai hơn. Cổ áo hình chữ V. Tạo sự cân đối phía trên vai bằng các loại áo cộc. Nên tránh sử dụng loại tay áo bó chặt tay vì nó sẽ làm lộ rõ sự thiếu cân bằng giữa tay và thân trên. Các dạng áo xòe phía dưới đẻ che đi khuyết điểm phần bụng. Dáng ôm phía trên ngực và xòe phía dưới, dáng xòe rủ Swing. Dáng áo Draping, Dáng Áo tunic. Dáng Áo 2 vạt',
                pic: 'CN-AO.png',
            },
            {
                name: 'Quần: Dáng quần rộng giúp cân đối phía trên cơ thể.(Quần ống rộng, quần xuông, quần ống loe)',
                pic: '',
            },
            {
                name: 'Chân váy: Đánh lược hướng bằng các chân váy dài tới gối, hay dưới gối(Dáng váy chữ A, chân váy flip, chân váy xéo, Chân váy Trumpet, Chân váy loe)',
                pic: 'CN-CV.png',
            },
            {
                name: 'Váy: Tránh mặc các bộ đầm quá ông. Những dáng váy mặc đẹp cho dáng này đó là các loại váy (đầm) chữ A, dáng váy triết eo cao (Empire), dáng xuông là những dáng váy giúp giảm sự chú ý của người nhìn ở phần giữa (bụng).',
                pic: 'CN-V.png',
            },
        ];
    },
});

bodyRules[9] = new Rule({
    name: 'DN9',
    when: [
        (facts) => facts.body.type === "Dáng quả lê",

    ],
    then: (facts) => {
        facts.body.exercise = 'Tập trung vào các bài tập làm thon gọn phần thân dưới. các bài tập gia tăng sức mạnh cho tay, các bài tập phức hợp phối hợp với những động tác tác động khối cơ xung quanh';
        facts.body.food = 'Các loại thịt, cá, trứng, hay các sản phẩm từ sữa và thực phẩm có hàm lượng protein cao. Các loại trái cây như dưa hấu, dứa đều rất tốt cho dáng người vì nó sẽ làm sạch cơ thể khỏi các độc tố dư thừa tích tụ, làm chậm quá trình trao đổi chất. Cần tránh ăn những loại thực phẩm có hàm lượng natri cao, đồng thời giảm lượng muối tiêu thụ hàng ngày và tránh các thực phẩm tinh chế như bánh mì, mì, gạo...';
        facts.body.clothes = [
            {
                name: 'Áo: Đường viền cổ áo nên rộng. Cổ áo lớn, đường viền ren và đường bèo nhún đều tạo thêm khối lượng cho phần trên cơ thể của bạn, do đó cân bằng với phần hông rộng hơn. Tay áo nếu chọn tay áo ngắn thì hãy chọn tay áo rộng và tông dáng. Tuy nhiên tay áo dài thì ống nên nhỏ.  Những chiếc áo vừa vặn và ôm sát giúp làm nổi bật vòng eo. Áo không được vượt quá hông vì như vậy sẽ khiến hông có vẻ rộng hơn. Chọn những chiếc áo được cắt cúp ở eo hoặc những chiếc áo có phần cuối ở đường ngang hông. Thắt áo sơ mi vào đáy quần giúp làm nổi bật thân hình có đường cong của bạn.',
                pic: 'QL-AO.png',
            },
            {
                name: 'Quần: Thu nhỏ phần dưới và giảm bớt phần hông. Chọn màu tối hơn, đường kẻ rõ ràng và đường khâu đơn giản để tránh thu hút sự chú ý vào phần dưới cơ thể. Quần xuông ống loe, quần xuông ống đứng',
                pic: 'QL-Q.png',
            },
            {
                name: 'Chân váy: chân váy chữ A',
                pic: '',
            },
            {
                name: 'Váy: những chiếc váy có phom dáng rộng hơn ở phần dưới sẽ hiệu quả hơn trong việc cân bằng phần hôn',
                pic: 'Ql-V.png',
            },
        ];
    },
});

bodyRules[10] = new Rule({
    name: 'DN10',
    when: [
        (facts) => facts.body.type === "Dáng đồng hồ cát",

    ],
    then: (facts) => {
        facts.body.exercise = 'Chơi các môn thể thao ngoài trời. Bơi một giờ mỗi ngày là hoàn hảo cho loại cơ thể này, cũng như các môn thể thao tim mạch cao khác như đạp xe và chạy bộ.';
        facts.body.food = 'Cần chọn lựa những loại thực phẩm có chỉ số đường huyết thấp và ăn 5 - 6 bữa nhỏ/ngày. Đồng thời, nên ăn nhiều trái cây tươi và rau cải để cung cấp đủ dinh dưỡng thiết yếu cho cơ thể. Thay vì ăn các loại thực phẩm tinh chế như bánh mì trắng, mì, gạo... bạn nên chuyển sang ăn thực phẩm tươi, hay ngũ cốc nguyên chất sẽ tốt hơn.';
        facts.body.clothes = [
            {
                name: 'Áo:	Cổ áo không làm mất đi đường nét tự nhiê của cơ thể. Dáng cổ áo tròn hoặc hơi tròn là lựa chọn tuyệt vời cho dáng người của bạn. Ví dụ như dáng cổ áo Oval, Cổ áo chữ V. Tay áo vừa (ôm), dáng ôm, tay ngắn, tay lỡ (3/4), dáng tay bồng ôm ở phần cổ tay (Bishop). Áo tập trung vào vùng eo mà vẫn giữ được sự cân bằng của dáng và giữ được những đường cong tự nhiên. Những dáng áo có dây ở dưới chân áo hoặc áo buộc eo như dạng wrap.',
                pic: 'DH-AO.png',
            },
            {
                name: 'Quần: Tốt nhất là bạn nên mặc quần ống rộng và ống suông dài xuống sàn. Quần ống côn, ống suông hoặc ống loe cũng rất tốt.',
                pic: 'DH-Q.png',
            },
            {
                name: 'Chân váy: Một trong những dáng váy hợp nhất với dáng này là chân váy bút chì. Dáng váy được thiết kế để làm nổi bật được cong và thẳng từ phía đùi xuống chân, tạo nên đường cong cân bằng hoàn hảo.',
                pic: 'DH-CV.png',
            },
            {
                name: 'Váy: Đầm triết eo hoặc đầm có dây lưng là một trong những lựa chọn tuyệt vời dành cho dáng người này. Hoặc những dáng váy như dây buộc (Wrap) nó giúp bạn giữ được đường cong và che bớt phần bụng. Những chiếc đầm (váy) xòe tròn hoặc dáng đầm (váy) hoa tulip với ít họa tiết sẽ là sự lựa chọn thay thế dành cho bạn.',
                pic: 'DH-V.png',
            },
        ];
    },
});


bodyRules[11] = new Rule({
    name: 'DN11',
    when: [
        (facts) => facts.body.type === "Dáng tam giác ngược",

    ],
    then: (facts) => {
        facts.body.exercise = 'Thực hiện các bài tập Cardio. Cải thiện thân dưới bằng các bài tập gym cho hông nở. Tập luyện săn chắc thân trên.';
        facts.body.food = 'Hạn chế đồ ngọt cũng những thực phẩm chứa nhiều tinh bột, để tránh làm tăng lượng đường trong cơ thể, dẫn đến tích tụ mỡ thừa.';
        facts.body.clothes = [
            {
                name: 'Áo: Những chiếc áo giúp tạo độ sâu ở phần ngực, giúp vai gọn như: dáng áo hình chữ U, hoặc chữ V, dáng lệch vai đều là những lựa chọn tuyệt vời dành cho dáng tam giác ngược. Tay áo phải làm cho vai thon gọn hơn. Chọn những loại tay áo rộng có độ rủ, hoặc dáng tay áo có đường cắt giúp phần trên nhỏ hơn so với thực tế. Khi phối đồ bạn nên chọn màu áo tối hơn so với màu quần hoặc chân váy, chọn loại áo sơ mi cổ nhỏ, không họa tiết, hoặc họa tiết ít/nhỏ để chuyển sự chú ý tới phần dưới của cơ thể.',
                pic: 'TG-AO.png',
            },
            {
                name: 'Quần: Dáng quần như baggy, turns up, quần nhiều túi, hoặc túi hộp (combat, Cargo), quần ống lửng, quần rộng ống, quần ống loe, quần harem -> Làm phần thân dưới của bạn trông to hơn',
                pic: 'TG-Q.png',
            },
            {
                name: 'Chân váy: Những dáng váy xòe, phồng từ phần hông trở xuống đều giúp vòng 3 lớn hơn như dáng váy xòe tròn, dáng váy chữ A, dáng váy xòe (Ba lê), dáng dập ly rủ (bias cut),',
                pic: 'TG-CV.png',
            },
            {
                name: 'Váy: Những dáng váy mặc đẹp đơn giản là những dáng có đường thẳng phía trên và phồng phía dưới như váy chữ A, váy triết ngực, váy xuông đều là sự lựa chọn của bạn.',
                pic: 'TG-V.png',
            },
        ];
    },
});

bodyRules[12] = new Rule({
    name: 'DN5',
    when: [
        (facts) => facts.body.type = "Dáng tam giác ngược",
    ],
    then: (facts) => {
        facts.body.type = "Dáng tam giác ngược";
    },
});
module.exports = bodyRules;
