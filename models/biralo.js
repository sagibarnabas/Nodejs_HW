const Schema = require('mongoose').Schema;
const db = require('../config/db');

const biralo = db.model('biralo', {
    nev: String,
    email: String,
    neptun: String,
    telefon: Number,
    referens: String
});

module.exports = biralo;