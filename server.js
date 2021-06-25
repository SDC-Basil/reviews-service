var express = require('express');
var database = require('./database');
var app = express();
app.use(express.json());
require('dotenv').config();

var router = require('./routes.js');
app.use('/', router);



app.listen(process.env.PORT, function() {
  console.log(`listening on port 3000`);
});


