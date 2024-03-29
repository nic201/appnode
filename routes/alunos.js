var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/all', function(req, res, next) {
         var db = require("../db");
         db.findAll(function(err,docs){
             if(err) return console.log(err);
             res.render('alunos', { title: 'alunos', alunos: docs });
        })
    });
    router.get('/delete/:id', function (req, res,next){
        var db = require("../db");
        db.deleteAlunos(req.params.id, function(err,docs){
            if(err) return console.log(err);
            res.redirect('/alunos/all');
        })
    })  
 
module.exports = router;
