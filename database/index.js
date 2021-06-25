const mongoose = require('mongoose');
require('dotenv').config()
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/allreviews', {
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Succesfully connected with mongoose')
});

module.exports = db;

