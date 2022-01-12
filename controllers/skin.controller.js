const skinRules = require('../controllers/skin.rule');
const Question = require('../model/Question');
const db = require('../db.js');
const { Rools, Rule } = require('rools');
let listQues = require('../model/ListQues');
let user = require('../function/user.js');
class SkinController {
    constructor() {
        this.index = this.index.bind(this);
    }

    async start() {
        // facts
        const facts = {
            user: {
                name: 'frank',
                age: 24,
                stars: 347,
            },
            skins: {
                normalP: 0,
                dryP: 0,
                oilP: 0,
                combineP: 0,
                product: [],
                sunProtect: {}
            },
        };

        return facts;
    }

    async index(req, res, next) {
        // let 
        // let facts = user.getFacts(req.cookies.id);
        let facts = await this.start();
        let arrayQues = [];

        for (let ele of listQues) {
            if (ele.checkCondition(facts))
                arrayQues.push(ele);
        }
        
        res.render('skin/index2', {
            questions: arrayQues,
            action: '/skin/skin1'
        });
    }

    async post(req, res, next) {
        // let 
        let id = req.cookies.id;
        const facts = user.getFacts(id);

        facts.skins.normalP = 0;
        facts.skins.dryP = 0;
        facts.skins.oilP = 0;
        facts.skins.combineP = 0;
        facts.skins.product = [];
        facts.skins.sunProtect = {};

        for (let attr in req.body) {
            facts.skins[attr] = req.body[attr];
        }

        // evaluation
        const rools = new Rools();
        await rools.register(skinRules);
        await rools.evaluate(facts);

        console.log(facts);

        user.update(id, facts);

        let arrayQues = [];

        for (let ele of listQues) {
            if (ele.checkCondition(facts))
                arrayQues.push(ele);
        }


        console.log(arrayQues);

        if (arrayQues.length > 0) {
            res.render('skin/index2', {
                questions: arrayQues
            });
        }
        else {
            if (facts.skins.acne === "Y") {
                res.redirect('/skin/acne');
            } else {
                res.redirect('/result');
            }
        }
            
    }
}

module.exports = new SkinController();