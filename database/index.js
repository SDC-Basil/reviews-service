const mongoose = require('mongoose');
require('dotenv').config()
const { Schema } = mongoose;

mongoose.connect('mongodb://mongo:27017/Reviews', {
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db = mongoose.connection;

db.once('open', _ => {
  console.log('Database connected: Reviews')

})

db.on('error', err => {
  console.error('connection error:', err)
})

module.exports = db;

