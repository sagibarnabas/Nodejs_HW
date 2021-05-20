/**
 * Elementi a pályázat adatait /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const palyazatModel = requireOption(objectrepository, 'palyazatModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.email === 'undefined' ||
            typeof req.body.neptun === 'undefined' ||
            typeof req.body.telefon === 'undefined' ||
            typeof req.body.pontszam === 'undefined' ||
            typeof req.body.mirepalyazik === 'undefined' ||
            typeof req.body.statusz === 'undefined' ||
            typeof req.body.kat === 'undefined' ||
            typeof req.body.hianyossagok === 'undefined' ||
            typeof req.body.biralo === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.palyazat === 'undefined') {
            res.locals.palyazat = new palyazatModel();
        }

        res.locals.palyazat.nev = req.body.nev;
        res.locals.palyazat.email = req.body.email;
        res.locals.palyazat.neptun = req.body.neptun;
        res.locals.palyazat.telefon = req.body.telefon;
        res.locals.palyazat.pontszam = req.body.pontszam;
        res.locals.palyazat.mirepalyazik = req.body.mirepalyazik;
        res.locals.palyazat.statusz = req.body.statusz;
        res.locals.palyazat.kat = req.body.kat;
        res.locals.palyazat.hianyossagok = req.body.hianyossagok;
        res.locals.palyazat._biralta = req.body.biralo._id;

        res.locals.palyazat.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};