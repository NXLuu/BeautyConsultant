var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');
router.get('/', controller.form);
router.post('/', controller.postForm);

module.exports = router;