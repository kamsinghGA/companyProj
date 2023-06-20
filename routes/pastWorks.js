var express = require('express');
var router = express.Router();
var pastCtrl = require('../controllers/pastWorks');

// GET /pastWorks
router.get('/', pastCtrl.index);

module.exports = router;