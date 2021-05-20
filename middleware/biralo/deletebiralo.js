/**
 * Törli a bírálót /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.biralo === 'undefined') {
            return next();
        }

        res.locals.biralo.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/biralok');
        });
    };
};