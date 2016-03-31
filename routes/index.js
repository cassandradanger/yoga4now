var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/digest',function(request,response){
  console.log('hit digest route');
  response.sendFile(path.join(__dirname,"../jsonFiles/digest.json"));
});

router.get('/stress',function(request,response){
  console.log('hit stress route');
  response.sendFile(path.join(__dirname,"../jsonFiles/stress.json"));
});

router.get('/evening',function(request,response){
  console.log('hit evening route');
  response.sendFile(path.join(__dirname,"../jsonFiles/evening.json"));
});

router.get('/backache',function(request,response){
  console.log('hit backache route');
  response.sendFile(path.join(__dirname,"../jsonFiles/backache.json"));
});

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../views/index.html'))
});
module.exports = router;
