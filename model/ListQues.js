const Question = require('./Question');

let listQuestion = [];

listQuestion[0] = new Question(
    'Da bạn có ở trạng thái cân bằng hay không(Không quá khô hoặc không quá dầu)?',
    { name: 'balance', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            balance: undefined
        }
    }
);

listQuestion[1] = new Question(
    'Bạn đánh giá màu da của bạn thế nào?',
    { name: 'color', ans: [{ name: 'Da xỉn màu', value: 'Da xỉn màu' }, { name: 'Da sáng bóng', value: 'Da sáng bóng' }, { name: 'Da sáng', value: 'Da sáng' }] },
    'select',
    {
        skins: {
            color: undefined
        }
    }
);

listQuestion[2] = new Question(
    'Bạn có bị da dầu ở vùng cữ T không? (Khu vực từ trán dến cánh mui và cằm)?',
    { name: 'oilT', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            oilT: undefined
        }
    }
);

listQuestion[3] = new Question(
    'Bạn đánh giá bề mặt da của bạn thế nào?',
    { name: 'suface', ans: [{ name: 'Da mịn màng', value: 'Da mịn màng' }, { name: 'Da thô ráp', value: 'Da thô ráp' }] },
    'select',
    {
        skins: {
            suface: undefined
        }
    }
);

listQuestion[4] = new Question(
    'Da của bạn có căng không?',
    { name: 'isStretch', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            isStretch: undefined
        }
    }
);

listQuestion[5] = new Question(
    'Nước da của bạn có đều màu không?',
    { name: 'toner', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            toner: undefined
        }
    }
);

listQuestion[6] = new Question(
    'Lỗ chân lông của bạn ở mưc độ nào?',
    { name: 'pores', ans: [{ name: 'Không nhìn thấy', value: 'Không nhìn thấy' }, { name: 'To', value: 'To' }, { name: 'Nhỏ', value: 'Nhỏ' }] },
    'select',
    {
        skins: {
            pores: undefined
        }
    }
);

listQuestion[7] = new Question(
    'Tính chất công việc của bạn?',
    { name: 'work', ans: [{ name: 'Trong phòng diều hòa', value: 'Trong phòng diều hòa' }, { name: 'Trong phòng bình thường', value: 'Trong phòng bình thường' }, { name: 'Ngoài trời', value: 'Ngoài trời' }] },
    'select',
    {
        skins: {
            work: undefined
        }
    }
);

listQuestion[8] = new Question(
    'Bạn có bị vấn đề về mụn không?',
    { name: 'acne', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            acne: undefined
        }
    }
);

listQuestion[9] = new Question(
    'Bạn có quan tâm đến vấn đề trị thâm không',
    { name: 'deep', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            deep: undefined
        }
    }
);

listQuestion[10] = new Question(
    'Bạn có quan tâm đến vấn đề lão hóa không?',
    { name: 'old', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            old: undefined
        }
    }
);

listQuestion[11] = new Question(
    'Bạn có đang mang thai không',
    { name: 'pregnant', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] },
    'radio',
    {
        skins: {
            pregnant: undefined
        }
    }
);

listQuestion[12] = new Question(
    'Hỏi bạn đã sử dụng các sản phẩm có chứa retinoids chưa',
    { name: 'timeCare', ans: [{ name: 'Nhỏ hơn 6 tháng', value: '<6' }, { name: 'Lớn hơn 6 tháng', value: '>6' }] }, 'select', {
    skins: {
        pregnant: 'N',
        acne: 'Y',
        timeCare: undefined
    }
});

listQuestion[13] = new Question(
    'Bạn có đổ nhiều mồ hôi không?',
    { name: 'sweat', ans: [{ name: 'Có', value: 'Y' }, { name: 'Không', value: 'N' }] }, 'radio', {
        skins: {
            work: 'Ngoài trời',
            sweat: undefined
        }
    })

module.exports = listQuestion;