/**
 * Kiírja a bíráló adatait /
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        res.locals.biralo=[
            {
                _biraloid:'3',
                nev: 'Kis Bela',
                neptun:'HUBX7D',
                telszam:'0630',
                email: 'kisbela@'
            },
            {
                _biraloid:'2',
                nev: 'Nagy Bela',
                neptun:'HOBX7D',
                telszam:'0620',
                email: 'nagybela@'
            }
        ];
        return next();
    };

};