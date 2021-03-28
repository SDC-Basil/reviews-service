var express = require('express');
var database = require('./database');
var app = express();
var router = require('./routes.js');
var cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/', router);



app.listen(3000, function() {
  console.log(`listening on port 3000`);
});


