var express = require('express');
var app = express();

app.use(express.static('static'));
require('./routes/outside')(app);
console.log("öccá");
var server = app.listen(3000, function () {
    console.log("On: 3000");
});