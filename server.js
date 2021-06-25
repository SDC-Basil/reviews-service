var express = require('express');
var database = require('./database');
var app = express();
var router = require('./routes.js');
var cors = require('cors');


app.use(cors());
app.use(express.json());
app.get('/loaderio-578eae4f02bb2542173fedad54dbcaac/', (req, res) => res.send(process.env.LOADER))
app.use('/', router);



app.listen(3000, function() {
  console.log(`listening on port 3000`);
});


