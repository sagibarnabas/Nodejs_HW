const biraloModel=require('./models/biralo');
let egybiralo= new biraloModel();
egybiralo.nev='Jozsi';
egybiralo.email='jozsi@vik.hu';
egybiralo.neptun= 'JOZS1I';
egybiralo.telefon= 10251;
egybiralo.referens=true;
egybiralo.save((err)=>{
    console.log(err);
});



/*
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static('static'));
require('./routes/outside')(app);
var server = app.listen(3000, function () {
    console.log("On: 3000");
});
*/