const expect = require('chai').expect;
const getbiralo = require('../../../middleware/biralo/getbiralo');

describe('getbiralo middleware ', function () {

    it('should return biralo', function (done) {
        const mw = getbiralo({});
        mw({},{},()=>{

        });
    });
});