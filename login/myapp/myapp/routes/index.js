var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.sendfile("./views/form.html")
});

router.post('/login', function(req, res) {
  var fName=req.body.firstName;
  res.send("Hello " +fName)
});

module.exports = router;
