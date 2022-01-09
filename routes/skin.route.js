const express = require('express');
const router = express.Router();
const controller = require('../controllers/skin.controller');

router.get('/', controller.index);
router.post('/skin1', controller.post);
module.exports = router;