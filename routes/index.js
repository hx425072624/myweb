var express = require('express');
var request = require('request-promise');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json("succss");
    // res.render('index', { title: 'Express' });
});

router.get('/code', function(req, res, next) {
    res.json("succss");
});

module.exports = router;
