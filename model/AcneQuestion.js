const Question = require('./Question');

let listQuestion = [];

listQuestion[0] = new Question(
    'Bằng sự quan sát hay đánh giá mức độ đỏ của mụn',
    { name: 'redness', ans: [{ name: 'Không', value: 'N' }, { name: 'Ít', value: 'Ít' }, { name: 'Trung bình', value: 'Trung bình' }, { name: 'Nhiều', value: 'Nhiều' }, ] },
    'radio',
    {
        acne: {
            redness: undefined
        }
    }
);


listQuestion[1] = new Question(
    'Mụn ở vùng nào trên cơ thể',
    { name: 'parts', ans: [{ name: 'Vùng chữ T', value: 'Vùng chữ T' }, { name: 'Mũi', value: 'Mũi' }, { name: 'Khuôn mặt', value: 'Khuôn mặt' }, { name: 'Cổ', value: 'Cổ' }, { name: 'Ngực', value: 'Ngực' }, { name: 'Lưng', value: 'Lưng' }, { name: 'Mông', value: 'Mông' }, { name: 'Đùi', value: 'Đùi' }, { name: 'Cánh tay', value: 'Cánh tay' },] },
    'radio',
    {
        acne: {
            parts: undefined
        }
    }
);

listQuestion[2] = new Question(
    'Có cảm thấy đau khi sờ vào không',
    { name: 'painful', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        acne: {
            painful: undefined
        }
    }
);

listQuestion[3] = new Question(
    'Có mủ chảy ra không',
    { name: 'pus', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        acne: {
            pus: undefined
        }
    }
);

listQuestion[4] = new Question(
    'Khi sờ lên bạn có thầy mềm không',
    { name: 'hard', ans: [{ name: 'Có', value: 'N' }, { name: 'Không', value: 'Y' }] },
    'radio',
    {
        acne: {
            hard: undefined
        }
    }
);

listQuestion[5] = new Question(
    'Bạn quan sát thấy màu sắc của mụn thế nào',
    { name: 'color', ans: [{ name: 'Trắng', value: 'Trắng' }, { name: 'Đỏ', value: 'Đỏ' }, { name: 'Đen', value: 'Đen' }, { name: 'Vàng', value: 'Vàng' }] },
    'radio',
    {
        acne: {
            color: undefined
        }
    }
);

listQuestion[6] = new Question(
    'Số lượng mụn',
    { name: 'noOfLession', ans: [{ name: '0 – 4', value: 3.5 }, { name: '5 – 9', value: 7 }, { name: '10 - 19', value: 15 }, { name: '20 - 29', value: 27 }, { name: '>=30', value: 40 }] },
    'radio',
    {
        acne: {
            noOfLession: undefined
        }
    }
);

module.exports = listQuestion;