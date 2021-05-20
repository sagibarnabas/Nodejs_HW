const authMW = require('../middleware/auth/auth');
const logoutMW = require('../middleware/auth/logout');
const checkpswMW = require('../middleware/auth/checkpsw');
const renderMW = require('../middleware/auth/render');
const sendmepwMW = require('../middleware/auth/sendmepw');

const getbiralokMW = require('../middleware/biralo/getbiralok');
const getbiraloMW = require('../middleware/biralo/getbiralo');
const savebiraloMW = require('../middleware/biralo/savebiralo');
const deletebiraloMW = require('../middleware/biralo/deletebiralo');

const getpalyazatokMW = require('../middleware/palyazat/getpalyazatok');
const getpalyazatMW = require('../middleware/palyazat/getpalyazat');
const savepalyazatMW = require('../middleware/palyazat/savepalyazat');
const deletepalyazatMW = require('../middleware/palyazat/deletepalyazat');


const biraloModel = require('../models/biralo');
const palyazatModel = require('../models/palyazat');

module.exports = function (app) {
    const objectRepository = {
        biraloModel:biraloModel,
        palyazatModel:palyazatModel
    };

    app.use('/login',
        getbiraloMW(objectRepository),
        checkpswMW(objectRepository),
        renderMW(objectRepository, 'login')
    );
    app.use('/sendpw',
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
        getbiraloMW(objectRepository),
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
        getpalyazatMW(objectRepository),
        savepalyazatMW(objectRepository),
        renderMW(objectRepository, 'palyazatmodosit')
    );
    app.get('/palyazat/:palyazatid/delete',
        authMW(objectRepository),
        getpalyazatMW(objectRepository),
        deletepalyazatMW(objectRepository),
    );
    app.get('/profil',
        authMW(objectRepository),
        getbiraloMW(objectRepository),
        getpalyazatokMW(objectRepository),
        renderMW(objectRepository, 'profil')
    )
    app.use('/logout',
        logoutMW(objectRepository))

    app.get('/',
        authMW(objectRepository),
        getpalyazatokMW(objectRepository),
        renderMW(objectRepository,'index')
    );
};