/**
 * Megjeleníti a kért oldalt /
 */
module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        res.render(viewName, res.tpl);
    };

};