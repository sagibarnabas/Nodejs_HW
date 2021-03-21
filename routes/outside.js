var authMW = require('../middleware/auth/auth');
var logoutMW = require('../middleware/auth/logout');
var checkpswMW = require('../middleware/auth/checkpsw');
var renderMW = require('../middleware/auth/render');
var sendmepwMW = require('../middleware/auth/sendmepw');

var getbiralokMW = require('../middleware/biralo/getbiralok');
var getbiraloMW = require('../middleware/biralo/getbiralo');
var savebiraloMW = require('../middleware/biralo/savebiralo');
var deletebiraloMW = require('../middleware/biralo/deletebiralo');

var getpalyazatokMW = require('../middleware/palyazat/getpalyazatok');
var getpalyazatMW = require('../middleware/palyazat/getpalyazat');
var savepalyazatMW = require('../middleware/palyazat/savepalyazat');
var deletepalyazatMW = require('../middleware/palyazat/deletepalyazat');


module.exports = function (app) {
    var objectRepository = {};


    app.get('/',
        authMW(objectRepository),
        renderMW(objectRepository,'index.html')
    );
    app.use('/login',
        getbiraloMW(objectRepository),
        checkpswMW(objectRepository),
        renderMW(objectRepository, 'login.html')
    );
    app.use('/sendpw/:biraloid',
        getbiraloMW(objectRepository),
        sendmepwMW(objectRepository),
        renderMW(objectRepository, 'login.html')
    );
    app.get('/biralok',
        authMW(objectRepository),
        getbiralokMW(objectRepository),
        renderMW(objectRepository, 'referens.html')
    );
    app.use('/biralo/new',
        authMW(objectRepository),
        savebiraloMW(objectRepository),
        renderMW(objectRepository, 'biralomodosit.html')
    );
    app.use('/biralo/edit/:biraloid',
        authMW(objectRepository),
        getbiraloMW(objectRepository),
        savebiraloMW(objectRepository),
        renderMW(objectRepository, 'biralomodosit.html')
    );
    app.get('/biralo/delete/:biraloid',
        authMW(objectRepository),
        savebiraloMW(objectRepository),
        deletebiraloMW(objectRepository)
    );
    app.get('/palyazatok',
        authMW(objectRepository),
        getpalyazatokMW(objectRepository),
        renderMW(objectRepository, 'index.html')
    );
    app.use('/palyazat/new',
        authMW(objectRepository),
        savepalyazatMW(objectRepository),
        renderMW(objectRepository, 'ujpalyazat.html')
    );
    app.use('/palyazat/:palyazatid/edit',
        authMW(objectRepository),
        getpalyazatMW(),
        getpalyazatokMW(objectRepository),
        renderMW(objectRepository, 'palyazatmodositas.html')
    );
    app.get('/palyazat/:palyazatid/delete',
        authMW(objectRepository),
        getpalyazatMW(objectRepository),
        deletepalyazatMW(objectRepository),
    );
    app.get('/logout',
        authMW(objectRepository),
        logoutMW(objectRepository),
        renderMW(objectRepository, 'profil.html')
    )
    app.get('/profil/:biraloid',
        authMW(objectRepository),
        getbiraloMW(objectRepository),
        renderMW(objectRepository, 'profil.html')
    )
};