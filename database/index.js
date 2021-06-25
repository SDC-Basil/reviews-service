const mongoose = require('mongoose');
require('dotenv').config()
const { Schema } = mongoose;

mongoose.connect('mongodb://18.188.153.202:27017/review', {
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

