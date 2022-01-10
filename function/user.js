const db = require('../db.js');

module.exports.getFacts = (id) => {

   

    let user = db.get('users')
        .find({ id: id })
        .value();

    return user;
}

module.exports.update = (id, facts) => {
    let user = db.get('users')
        .find({ id: id })
        .assign(facts)
        .write();

    return user;
}