const mongoose = require('mongoose');
require('dotenv').config()
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/Reviews', {
    auth: {
        user: process.env.DB_USER,
        password: process.env.DB_PW
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false
})

const db = mongoose.connection;

db.once('open', _ => {
  console.log('Database connected: Reviews')

})

db.on('error', err => {
  console.error('connection error:', err)
})

module.exports = db;

