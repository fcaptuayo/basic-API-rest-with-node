var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get("/user", function (req, res, next) {
    res.status(200).send({
        success: 'true',
        message: 'Return all clients.',
    })
});

router.get('/api/v1/clients', (req, res) => {
    res.status(200).send({
        success: 'true',
        response: 'Return all clients.'
    })
});

router.get('/api/v1/events', (req, res) => {
    res.status(200).send({
        success: 'true',
        response: 'Return all events.'
    })
});



module.exports = router;
