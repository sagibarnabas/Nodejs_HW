var express = require('express');
var app = express();

app.use(express.static('static'));
console.log("kek");
require('./routes/outside')(app);
var server = app.listen(3000, function () {
    console.log("On: 3000");
});