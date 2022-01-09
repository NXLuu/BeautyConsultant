const skinRules = require('../controllers/skin.rule');
const { Rools, Rule } = require('rools');
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
        let facts = await this.start();

        res.render('skin/index', {
            facts: facts,
        });
    }

    async post(req, res, next) {
        // let 
        console.log(req.body);
        const facts = {
            user: {
                name: 'frank',
                stars: 347,
            },
            skins: {
                normalP: 0,
                dryP: 0,
                oilP: 0,
                combineP: 0,
            },
        };

        for (let attr in req.body) {
            facts.skins[attr] = req.body[attr];
        }

        // evaluation
        const rools = new Rools();
        await rools.register(skinRules);
        await rools.evaluate(facts);

        console.log(facts);

        res.render('skin/index', {
            facts: facts,
        });
    }
}

module.exports = new SkinController();