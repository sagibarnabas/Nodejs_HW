/**
 * Kilistázza a bírálókat /
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.biralok=[
            {
                _biraloid:'1',
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
        next();
    };
};