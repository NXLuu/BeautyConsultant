const express = require('express');
const router = express.Router();
const controller = require('../controllers/skin.controller');
const acneController = require('../controllers/ance.controller');

router.get('/', controller.index);
router.get('/acne', acneController.index);
router.post('/acne', acneController.post);
router.post('/skin1', controller.post);
module.exports = router;