const db = require('../db.js');
const faceRules = require('../controllers/face.rule');
const { Rools, Rule } = require('rools');
let user = require('../function/user.js');
class faceController {
    constructor() {
        this.index = this.index.bind(this);
        this.post = this.post.bind(this);
    }

    async index(req, res, next) {

        res.render('face/index', {
            action: '/face'
        });

    }

    async post(req, res, next) {
        // let 
        let id = req.cookies.id;
        let facts = user.getFacts(id);
        facts.face = {};
        for (let attr in req.body) {
            facts.face[attr] = +req.body[attr];
        }



        // evaluation
        const rools = new Rools();
        await rools.register(faceRules);
        await rools.evaluate(facts);



        if (facts.face.type === undefined) {
            res.render('face/index', {
                error: true,
                mess: 'Không nhận diện được dáng người của bạn. Vui lòng nhập lại'
            });
        } else {
            console.log(facts);
            user.update(id, facts);
            res.redirect('/result');
        }

    }
}

module.exports = new faceController();