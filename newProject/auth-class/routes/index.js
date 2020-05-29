var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next){
  res.render('home');
});

router.get("/register", (req, res,)=>{
  res.render('registration',{
    message: 'This is the registration page',
    messageClass: 'alert-success'
  });
});

module.exports = router;
