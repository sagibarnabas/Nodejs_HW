/**
 * Törli a pályázatot /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.palyazat === 'undefined') {
            return next();
        }

        res.locals.palyazat.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};