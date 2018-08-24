var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send('here are all your characters');
});

router.get('/:id', function(req, res, next) {
  res.send('Here is your character');
});

router.post('/', function(req, res, next) {
  res.send('you created a character');
});

router.put('/:id', function(req, res, next) {
  res.send('you updated your character');
});

router.delete('/:id', function(req, res, next) {
  res.send('you deleted your character');
});

module.exports = router;
