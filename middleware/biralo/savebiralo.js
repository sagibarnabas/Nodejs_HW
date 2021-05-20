/**
 * Elementi a bírálót /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const biraloModel = requireOption(objectrepository, 'biraloModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.email === 'undefined' ||
            typeof req.body.neptun === 'undefined' ||
            typeof req.body.telefon === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.biralo === 'undefined') {
            res.locals.biralo = new biraloModel();
        }

        res.locals.biralo.nev = req.body.nev;
        res.locals.biralo.email = req.body.email;
        res.locals.biralo.neptun = req.body.neptun;
        res.locals.biralo.telefon = req.body.telefon;

        res.locals.biralo.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/biralok');
        });
    };
};