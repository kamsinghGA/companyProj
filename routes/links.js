var express = require('express');
var router = express.Router();
var linkCtrl = require('../controllers/links');

// GET /pastWorks
router.get('/', linkCtrl.index);

module.exports = router;