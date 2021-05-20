const Schema = require('mongoose').Schema;
const db = require('../config/db');

const palyazat = db.model('palyazat', {
    nev: String,
    email: String,
    neptun: String,
    telefon: String,
    pontszam: String,
    mirepalyazik: String,
    statusz: String,
    kat: String,
    hianyossagok: String,
    _biralta: {
        type: Schema.Types.ObjectId,
        ref: 'biralo'
    }
});

module.exports = palyazat;