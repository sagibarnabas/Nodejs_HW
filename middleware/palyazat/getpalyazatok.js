/**
 * Kilistázza a pályázatok /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const palyazatModel = requireOption(objectrepository, 'palyazatModel');

    return function(req, res, next) {
        palyazatModel.find({}, (err, palyazatok) => {
            if (err) {
                return next(err);
            }

            res.locals.palyazatok = palyazatok;
            return next();
        });
    };
};