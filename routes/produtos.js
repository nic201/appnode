var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'TuaSaúde', descricao: 'Medicinal:', beneficio: 'Reducao de danos:' });
});

module.exports = router;

