const express = require('express');

var my_index = require('./controllers/carController');
var index = new my_index;

const router = express.Router();

router.get('/', index.IndexView);

module.exports = router;