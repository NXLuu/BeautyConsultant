const skinRules = require('../controllers/skin.rule');
const db = require('../db.js');

const { Rools, Rule } = require('rools');
const { uuid } = require('uuidv4');
class UserController {
    constructor() {
        this.form = this.form.bind(this);
        this.postForm = this.postForm.bind(this);
    }

    form(req, res, next) {
        res.render('user');
    }

    postForm(req, res, next) {
        let facts = {
            user:{},
        };

        console.log(req.body)

        facts.user.name = req.body['name'];
        facts.user.age = req.body['age'];
        facts.id = uuid();

        res.cookie('id', facts.id);

        db.get('users')
            .push(facts)
            .write();


            
        res.redirect('/cate');
    }
}

module.exports = new UserController();