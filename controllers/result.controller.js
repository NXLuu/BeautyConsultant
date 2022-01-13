const db = require('../db.js');
const acneRules = require('../controllers/acne.rule');
const fuzzySystem = require('../test');
const { Rools, Rule } = require('rools');
let listQues = require('../model/AcneQuestion');
let user = require('../function/user.js');
class AcneController {
    constructor() {
        this.index = this.index.bind(this);
        
    }

    index(req, res, next) {
        // let 
        let facts = user.getFacts(req.cookies.id);

        console.log(facts);

        res.render('res', {
            facts: facts
        });
    }

    reset(req, res, next) {
        let facts = user.getFacts(req.cookies.id);

        facts.skins = {};
        facts.face = {};
        facts.body = {};

        res.redirect('/cate');
    }

    async post(req, res, next) {
        // let 
        let id = req.cookies.id;
        let facts = user.getFacts(id);
        facts.acne = {};
        for (let attr in req.body) {
            facts.acne[attr] = req.body[attr];
        }

        console.log(facts);

        // evaluation
        const rools = new Rools();
        await rools.register(acneRules);
        await rools.evaluate(facts);



        if (facts.acne.name === undefined) {
            facts.acne = {}

            res.render('skin/index2', {
                questions: this.getQues(facts),
                error: true,
                mess: 'Không nhận diện được loại mụn mà bạn đang gặp phải. Vui lòng nhập lại'
            });
        } else {
            let typeP = facts.acne.typeP;
            let areaP = facts.acne.areaP;
            let noOfLession = +facts.acne.noOfLession;
            let severity = fuzzySystem.getPreciseOutput([typeP, areaP, noOfLession]);
            facts.acne.severity = severity[0];

            await rools.evaluate(facts);
            user.update(id, facts);
            console.log(facts);

            res.redirect('/result');
        }

    }
}

module.exports = new AcneController();