/**
 * Kiírja a bíráló adatait /
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const biraloModel = requireOption(objectrepository, 'biraloModel');

    return function(req, res, next) {
        biraloModel.findOne({ _id: req.params.biraloid }, (err, biralo) => {
            if (err || !biralo) {
                return next(err);
            }

            res.locals.biralo = biralo;
            return next();
        });
    };
};