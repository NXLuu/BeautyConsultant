const faceRules = [];
const { Rools, Rule } = require('rools');
let perDiff = require('../function/percent');

faceRules[0] = new Rule({
    name: 'DN0',
    when: [
        (facts) => facts.face.a1 > facts.face.a2,
        (facts) => facts.face.a2 > facts.face.a3,
        (facts) => facts.face.foreHeadW > facts.face.cheekW,
        (facts) => facts.face.cheekW > facts.face.jawLine,
    ],
    then: (facts) => {
        facts.face.type = "Mặt trái tim";
    },
});

faceRules[1] = new Rule({
    name: 'DN1',
    when: [
        (facts) => perDiff(facts.face.a1, facts.face.a2).percent < 7,
        (facts) => perDiff(facts.face.a1, facts.face.a3).percent < 7,
        (facts) => perDiff(facts.face.a2, facts.face.a3).percent < 7,
        (facts) => facts.face.faceL > facts.face.cheekW,
        (facts) => facts.face.foreHeadW > facts.face.jawLine,
    ],
    then: (facts) => {
        facts.face.type = "Mặt trái xoan";
    },
});

faceRules[2] = new Rule({
    name: 'DN2',
    when: [
        (facts) => perDiff(facts.face.a1, 90).percent < 7,
        (facts) => facts.face.a1 > facts.face.a2,
        (facts) => facts.face.a2 > facts.face.a3,
        (facts) => facts.face.faceL > facts.face.cheekW,
        (facts) => perDiff(facts.face.cheekW, facts.face.foreHeadW).percent < 15,
        (facts) => perDiff(facts.face.cheekW, facts.face.jawLine).percent < 15,
    ],
    then: (facts) => {
        facts.face.type = "Mặt chữ nhật, thuôn dài";
    },
});

faceRules[3] = new Rule({
    name: 'DN3',
    when: [
        (facts) => perDiff(facts.face.a1, 90).percent < 7,
        (facts) => facts.face.a1 > facts.face.a2,
        (facts) => perDiff(facts.face.a2, facts.face.a3).percent < 7,
        (facts) => perDiff(facts.face.faceL, facts.face.cheekW).percent < 10,
        (facts) => perDiff(facts.face.foreHeadW, facts.face.jawLine).percent < 10,
        (facts) => perDiff(facts.face.cheekW, facts.face.foreHeadW).percent < 10,
    ],
    then: (facts) => {
        facts.face.type = "Mặt vuông";
    },
});

faceRules[4] = new Rule({
    name: 'DN4',
    when: [
        (facts) => perDiff(facts.face.a1, 90).percent < 7,
        (facts) => facts.face.a1 > facts.face.a2,
        (facts) => perDiff(facts.face.a2, facts.face.a3).percent < 7,
        (facts) => perDiff(facts.face.faceL, facts.face.cheekW).percent < 10,
        (facts) => perDiff(facts.face.foreHeadW, facts.face.jawLine).percent < 10,
        (facts) => perDiff(facts.face.cheekW, facts.face.foreHeadW).percent >= 10,
    ],
    then: (facts) => {
        facts.face.type = "Mặt tròn";
    },
});

faceRules[5] = new Rule({
    name: 'DN5',
    when: [
        (facts) => facts.face.type === "Mặt trái tim",
    ],
    then: (facts) => {
        facts.face.hair = [
            {
                name: 'Tóc rẽ ngôi lệch tự nhiên',
                des: 'Chúng giúp khuôn mặt trở nên bớt cứng nhắc, che đi các phần góc cạnh một cách khéo léo và tạo được sự thân thiện cho người đối diện. Hơn thế nữa, khi bạn thả xõa tóc thì phần thái dương sẽ không bị lộ. Bởi đây chính là phần khuyết điểm mà người có mặt trái tim cần phải che giấu đi nhiều nhất.'
            },
            {
                name: 'Tạo mẫu tóc bob ngắn và ôm sát vào mặt',
                des: 'Kiểu tóc này sẽ giúp các cô nàng có mặt trái tim trở nên thực sự nổi bật và không cần phải quá cầu kì trong việc trang điểm vẫn trở nên rất nổi bật. Vì thế, nếu bạn sở hữu khuôn mặt như vậy thì nên thử xem sao nhé. Chúng sẽ giúp bạn trẻ hơn khá nhiều tuổi.'
            },
            {
                name: 'Hô biến với tóc xoăn nhẹ nhàng',
                des: 'Đừng để tóc của bạn xoăn nhiều quá vì chúng sẽ khiến khuôn mặt trở nên già hơn. Hãy tạo cảm giác nhẹ nhàng cho khuôn mặt bằng kiểu tóc xoăn nhẹ và có thể rẽ mái lệch cũng được nhé. Chúng sẽ khiến mặt trái tim của bạn trở nên gọn nhẹ phần thái dương và toát ra được nhiều nét quyến rũ.'
            },
        ];
    },
});

faceRules[6] = new Rule({
    name: 'DN6',
    when: [
        (facts) => facts.face.type === "Mặt trái xoan",
    ],
    then: (facts) => {
        facts.face.hair = [
            {
                name: 'Tóc tém sành điệu',
                des: 'Nhìn những cô nàng mặt trái xoan mọi người thường thấy sự nữ tính, dịu dàng. Tuy nhiên, ẩn sâu trong đó là một tâm hồn nổi loạn thì bạn nên phá cách chọn kiểu tóc ngắn sành điệu cho mình.Kiểu tóc tem này thường cắt ngắn cao tới phần tai nên giúp lộ được nhiều đường nét thanh tú, nhã nhặn của khuôn mặt trái xoan.Việc lựa chọn kiểu tóc này còn giúp bạn trở nên năng động và trẻ trung hơn rất nhiều.Vì thế, hãy thử một lần đổi mới cho mái tóc của mình kiểu tóc tém này xem sao nhé.'
            },
            {
                name: 'Tóc bob cá tính',
                des: 'Nếu ban không muốn người khác phải nhàm chán với phong cách xưa cũ của mình thì hãy can đảm để tóc bob nhé. Chúng có độ dài vừa phải nên bạn sẽ thấy mình vừa năng động, tươi trẻ mà vẫn giữ được nét đáng yêu, nữ tính.'
            },
            {
                name: 'Tóc ngắn kết hợp uốn xoăn',
                des: 'Đây là một trong những kiểu tóc từng tạo nên cơn sớt. Cho tới nay, chúng vẫn chưa hạ nhiệt và được nhiều chị em mái tóc trái xoan lựa chọn. Bởi kiểu tóc này được cắt tỉa rất khéo léo, vừa uốn xoăn vừa có độ ngắn vừa phải nên tạo ra được sự sành điệu, kiêu sa.'
            },
            {
                name: 'Để ngôi rẽ kết hợp tóc xoăn dài',
                des: 'Kiểu tóc này sẽ khiến bạn nhìn chín chắn hơn đó ạ. Tuy nhiên, độ mềm mại của mái tóc không khiến bạn bị mất đi phần quyến rũ vốn có. Vì thế, đừng lo lắng nhé. Hãy tới các tiệm tóc uy tín và các chuyên gia tạo mẫu tóc sẽ giúp bạn hô biến đẹp hơn bao giờ hết.'
            },
        ];
    },
});

faceRules[7] = new Rule({
    name: 'DN7',
    when: [
        (facts) => facts.face.type === "Mặt tròn",
    ],
    then: (facts) => {
        facts.face.hair = [
            {
                name: 'Tóc ngắn uốn cụp hoặc xoăn nhẹ',
                des: 'Có thể nói, các cô gái có khuôn mặt tròn rất dễ chọn các kiểu tóc. Trong đó, tóc ngắn là kiểu phổ biến mà nhiều người lựa chọn. Bạn nên để tóc ngắn tới tầm gần tai, để thẳng hoặc uốn nhẹ cụp vào bên trong một chút. Cách tạo kiểu dáng tóc này sẽ giúp bạn có thể trẻ ra vài tuổi và tràn đầy sức sống.'
            },
            {
                name: 'Tóc ngắn mái thưa',
                des: 'Phần mái lưa thưa giúp khuôn mặt của bạn càng trở nên bầu bình, đáng yêu hơn. Vì thế, hãy chọn kiểu tóc ngắn mái thưa để toát lên được phong cách năng động của mình nhưng không làm mất đi sự nữ tính, yêu kiều của một người con gái.'
            },
            {
                name: 'Tóc buộc cao đuôi ngựa',
                des: 'Nếu bạn không thích để thả tóc lướt mướt thì có thể nuôi dài tóc và cột cao lên. Phong cách này sẽ giúp bạn thấy tự tin hơn và toát lên được thần thái của một người con gái hoạt bát, nhanh nhẹn.'
            },
        ];
    },
});

faceRules[8] = new Rule({
    name: 'DN8',
    when: [
        (facts) => facts.face.type === "Mặt vuông",
    ],
    then: (facts) => {
        facts.face.hair = [
            {
                name: 'Tóc dài và duỗi thẳng',
                des: 'Kiểu tóc này không quá phức tạp nên sẽ tạo ra cho bạn một phong cách giản đơn nhưng rất năng động. Đặc biệt khi để tóc dài duỗi thẳng, bạn có thể biến tấu nhiều kiểu khác nhau tùy thuộc vào bối cảnh. Bạn có thể tết tóc hoặc cột cao, cột thấp… để phù hợp với các mẫu quần áo. Đặc biệt, mái tóc dài giúp khuôn mặt vuông trở nên dài hơn và bớt to, bớt thô nên bạn hãy ưu tiên kiểu tóc này nhé.'
            },
            {
                name: 'Tóc bob xoăn nhẹ',
                des: 'Thay vì để tóc dài lõa xõa thì bạn có thể chọn kiểu tóc bob gọn gàng, trẻ trung và đầy năng động. Chúng giúp cho góc cạnh trên khuôn mặt được che đi một cách duyên dáng. Chính vì thế, nhiều sao Hàn đã tận dụng và lựa chọn kiểu tóc này như một phép màu để khuôn mặt trở nên rạng ngời hơn.'
            },
            {
                name: 'Tóc dài xoăn gợn sóng',
                des: 'Những lọn tóc xoăn sẽ làm cho phần thô cứng của khuôn mặt vuông bị che bớt đi. Thay vào đó, nhìn vào khuôn mặt của bạn, mọi người sẽ thấy mềm mại, nhẹ nhàng và nữ tính hơn.'
            },
        ];
    },
});

faceRules[9] = new Rule({
    name: 'DN9',
    when: [
        (facts) => facts.face.type === "Mặt chữ nhật, thuôn dài"
    ],
    then: (facts) => {
        facts.face.hair = [
            {
                name: 'Kiểu tóc ngắn tỉa layer',
                des: 'Với kiểu tóc này, bạn sẽ được cắt tỉa tóc thành nhiều lớp khác nhau một cách tinh tế để che đi chiều dài của khuôn mặt chữ nhật. Vì thế, nhìn vào đó, bạn sẽ thấy một cấu trúc mặt hài hòa cân xứng hơn. Bạn có thể phá cách hơn với phần tóc bên hàm bằng cách bo cụp vào hoặc ngắn hẳn lên để khuôn mặt thêm nhỏ nhắn và xinh xắn.'
            },
            {
                name: 'Kiểu tóc xoăn đuôi gợn sóng',
                des: 'Phần đuôi tóc gợn sóng tạo ra độ mềm mại kết hợp với chiều dài của tóc vừa phải sẽ thu ngắn sự chênh lệch tỷ lệ dài rộng của khuôn mặt. Nhờ đó, bạn sẽ thấy khuôn mặt của mình trở nên đáng yêu, bầu bình hơn.'
            },
            {
                name: 'Tóc dài xoăn wavy',
                des: 'Các cô gái có mặt chữ nhật và phần hàm rộng thì nên chọn kiểu tóc xoăn wavy nhé. Chúng sẽ hô biến làm cho khuôn mặt được gọn gàng hơn phần gò má, quai hàm và cân xứng với chiều dài rộng của khuôn mặt.'
            },
        ];
    },
});

module.exports = faceRules;
