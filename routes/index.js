var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/note.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

// Get route new Note
router.get('/new', function(req, res, next) {
  res.render('new', {title: 'NEW NOTE'});
});


//POST route
router.post('/newNote', function(req, res, next) {

  var title = req.body.title;
  console.log(title);
  var content = req.body.content;
  var tags = req.body.tags;

  var note = new Note({
    title: title,
    content: content,
    tags: tags

  });






  note.save(function(err, note) {
    if (err) {
      return next(err);
    }
    console.log('saved note');
    res.send(note);
  });
});
module.exports = router;
