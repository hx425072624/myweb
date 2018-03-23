var express = require('express');
var request = require('request-promise');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:code/:state', function(req, res, next) {
    var url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx3c34ae163c186094&secret=0d190f6a943b775f2db8323cc7eb2e8a&grant_type=authorization_code&code="+req.query.code;
    var options = {
        uri:url,
        json: true // Automatically parses the JSON string in the response
    };
    request(options).then(function (response) {
        if (response.access_token){
            console.log(response);
            req.session.access_token=response;//save openid and token in session


        }
        else {
            console.log(response);
            ///TODO:error code
        }
    }).catch(function (err) {
        ///TODO:error
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
