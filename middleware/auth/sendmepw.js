/**
 * Elküld egy új jelszót a felhasználónak/
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("Elkuldtem a jelszot!");
        return res.redirect('/');
    };
};