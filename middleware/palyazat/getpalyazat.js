/**
 * Kiírja a pályázat adatait /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const palyazatModel = requireOption(objectrepository, 'palyazatModel');

    return function(req, res, next) {
        palyazatModel.findOne(
            {
                _id: req.params.palyazatid
            },
            (err, palyazat) => {
                if (err || !palyazat) {
                    return next(err);
                }

                res.locals.palyazat = palyazat;
                return next();
            }
        );
    };
};