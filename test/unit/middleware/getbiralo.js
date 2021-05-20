const expect = require('chai').expect;
const getbiralo = require('../../../middleware/biralo/getbiralo');

describe('getbiralo middleware ', function () {

    it('should set res.locals.biralo with a biralo object from db', function (done) {
        const mw = getbiralo({
            biraloModel:{
                findOne:(p1, cb)=>{
                    expect(p1).to.be.eql({_id: "5" });
                    cb(null, "mockbiralo");
                }
            }
        });

        const resMock={
            locals:{}
        }

        mw({
            params:{
                biraloid: "5"
            }
        },
        resMock
        ,()=>{
            expect(resMock.locals).to.be.eql({biralo: "mockbiralo" });
            done();
        });
    });

    it('should call next with error when db error', function (done) {
        const mw = getbiralo({
            biraloModel:{
                findOne: (p1,cb)=> {
                    expect(p1).to.be.eql({_id: '5' });
                    cb('Database error',null);
                }
            }
        });

        const resMock= {
            locals: {}
        };
        mw({
            params:{
                biraloid: '5'
            }
        },resMock,
        (err)=>{
            expect(err).to.be.eql('Database error');
            done();
        });
    });

    it('should call next when no biralo is found in db', function (done) {
        const mw = getbiralo({
            biraloModel:{
                findOne: (p1,cb)=> {
                    expect(p1).to.be.eql({_id: '5' });
                    cb(undefined,null);
                }
            }
        });

        const resMock= {
            locals: {}
        };
        mw({
            params:{
                biraloid: '5'
            }
        },resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            done();
        });

    });
});