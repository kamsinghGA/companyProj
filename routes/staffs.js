var express = require('express');
var router = express.Router();
var staffCtrl = require('../controllers/staffs');

// GET /pastWorks
router.get('/', staffCtrl.index);

module.exports = router;