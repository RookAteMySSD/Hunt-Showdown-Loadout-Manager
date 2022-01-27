const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/mongoBackend'

const db = mongoose.connect(URL, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${URL}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${URL}`);
    console.log(err);
  });

module.exports = db;