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
        renderMW(objectRepository,'index')
    );
    app.use('/login',
        getbiraloMW(objectRepository),
        checkpswMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
    app.use('/sendpw/:biraloid',
        getbiraloMW(objectRepository),
        sendmepwMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
    app.get('/biralok',
        authMW(objectRepository),
        getbiralokMW(objectRepository),
        renderMW(objectRepository, 'referens')
    );
    app.use('/biralo/new',
        authMW(objectRepository),
        savebiraloMW(objectRepository),
        renderMW(objectRepository, 'biralomodosit')
    );
    app.use('/biralo/:biraloid/edit',
        authMW(objectRepository),
        getbiraloMW(objectRepository),
        savebiraloMW(objectRepository),
        renderMW(objectRepository, 'biralomodosit')
    );
    app.get('/biralo/:biraloid/delete',
        authMW(objectRepository),
        savebiraloMW(objectRepository),
        deletebiraloMW(objectRepository)
    );
    app.get('/palyazatok',
        authMW(objectRepository),
        getpalyazatokMW(objectRepository),
        renderMW(objectRepository, 'index')
    );
    app.use('/palyazat/new',
        authMW(objectRepository),
        savepalyazatMW(objectRepository),
        renderMW(objectRepository, 'palyazatmodosit')
    );
    app.use('/palyazat/:palyazatid/edit',
        authMW(objectRepository),
        getpalyazatMW(),
        getpalyazatokMW(objectRepository),
        renderMW(objectRepository, 'palyazatmodosit')
    );
    app.get('/palyazat/:palyazatid/delete',
        authMW(objectRepository),
        getpalyazatMW(objectRepository),
        deletepalyazatMW(objectRepository),
    );
    app.get('/logout',
        authMW(objectRepository),
        logoutMW(objectRepository),
        renderMW(objectRepository, 'profil')
    )
    app.get('/profil/:biraloid',
        authMW(objectRepository),
        getbiraloMW(objectRepository),
        renderMW(objectRepository, 'profil')
    )
};