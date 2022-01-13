const express = require('express');
const router = express.Router();
const controller = require('../controllers/skin.controller');
const resController = require('../controllers/result.controller');

router.get('/', resController.index);
router.get('/reset', resController.reset);
module.exports = router;