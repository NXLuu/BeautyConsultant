const skinRules = require('../controllers/skin.rule');
const db = require('../db.js');
const { Rools, Rule } = require('rools');
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
                stars: 347,
            },
            skin: {
                normalP: 0,
                dryP: 0,
                oilP: 0,
                conbineP: 0,
            },
        };

        return facts;
    }

    async index(req, res, next) {
        // let 
        let facts = user.getFacts(req.cookies.id);

        res.render('skin/index', {
            facts: facts,
        });
    }

    async post(req, res, next) {
        // let 
        let id = req.cookies.id;
        const facts = user.getFacts(id);

        facts.skins = {
            normalP: 0,
            dryP: 0,
            oilP: 0,
            combineP: 0,
            product: [],
            sunProtect: {}
        };

        for (let attr in req.body) {
            facts.skins[attr] = req.body[attr];
        }

        // evaluation
        const rools = new Rools();
        await rools.register(skinRules);
        await rools.evaluate(facts);

        console.log(facts);
        
        user.update(id, facts);

        res.render('skin/index', {
            facts: facts,
        });
    }
}

module.exports = new SkinController();