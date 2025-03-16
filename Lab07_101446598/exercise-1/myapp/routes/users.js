const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  console.log(`First Name: ${req.body.firstname}`);
  console.log(`Last Name: ${req.body.lastname}`);
  res.send('POST received!');
});

router.use(bodyParser,bodyParser.urlencoded({extended: true}))
module.exports = router;
