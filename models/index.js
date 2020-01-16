// require runs the code from the given file and returns its exports
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/decades-of-dance', { useNewUrlParser: true } );

const db = mongoose.connection;

db.once('open', function() {
    console.log('db is now open.');
  });

const DanceModel = require('./dance');
const DecadesModel = require('./decade');
module.exports = {
    Dance: DanceModel,
    Decade: DecadesModel
  }