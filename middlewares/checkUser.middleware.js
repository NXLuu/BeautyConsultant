const db = require('../db.js');

module.exports.requireAuth = async (req, res, next) => {
    
    let userId = req.cookies.id;

    console.log(req.cookies.id);

    if (!userId) {
        res.redirect('/create-user');
        return;
    }

    let user = db.get('users')
                .find({id: userId})
                .value();

    console.log(user);

    if (!user) {
        res.redirect('/create-user');
        return;
    }

    res.locals.user = user;
    next();
}