var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({

  title: String,
  content: String,
  tags: [],
  location: []
});

var Note = mongoose.model('Note', noteSchema);

//export to project
module.exports = Note;
