/**
 * Kilistázza a biralokat /
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const biraloModel = requireOption(objectrepository, 'biraloModel');

    return function(req, res, next) {
        biraloModel.find({}, (err, biralok) => {
            if (err) {
                return next(err);
            }

            res.locals.biralok = biralok;
            return next();
        });
    };
};