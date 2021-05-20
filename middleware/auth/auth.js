 /**
 * If the user is not logged in, redirects to login /
 */
 module.exports = function(objectrepository) {
     return function(req, res, next) {
         if (typeof req.session.belepve === 'undefined' || req.session.belepve !== true) {
             return res.redirect('/login');
         }
         next();
     };
 };