const express = require('express');
const router = express.Router();
const controller = require('../controllers/face.controller');

router.get('/', controller.index);
router.post('/', controller.post);
module.exports = router;