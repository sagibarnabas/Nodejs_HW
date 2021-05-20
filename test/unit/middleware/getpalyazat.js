const expect = require('chai').expect;
const getpalyazat = require('../../../middleware/palyazat/getpalyazat');

describe('getpalyazat middleware ', function () {

    it('should set res.locals.palyazat with a palyazat object from db', function (done) {
        const mw = getpalyazat({
            palyazatModel:{
                findOne:(p1, cb)=>{
                    expect(p1).to.be.eql({_id: "15" });
                    cb(null, "mockpalyazat");
                }
            }
        });

        const resMock={
            locals:{}
        }

        mw({
                params:{
                    palyazatid: "15"
                }
            },
            resMock
            ,()=>{
                expect(resMock.locals).to.be.eql({palyazat: "mockpalyazat" });
                done();
            });
    });

    it('should call next with error when db error', function (done) {
        const mw = getpalyazat({
            palyazatModel:{
                findOne: (p1,cb)=> {
                    expect(p1).to.be.eql({_id: '15' });
                    cb('Database error',null);
                }
            }
        });

        const resMock= {
            locals: {}
        };
        mw({
                params:{
                    palyazatid: '15'
                }
            },resMock,
            (err)=>{
                expect(err).to.be.eql('Database error');
                done();
            });
    });

    it('should call next when no palyazat is found in db', function (done) {
        const mw = getpalyazat({
            palyazatModel:{
                findOne: (p1,cb)=> {
                    expect(p1).to.be.eql({_id: '15' });
                    cb(undefined,null);
                }
            }
        });

        const resMock= {
            locals: {}
        };
        mw({
                params:{
                    palyazatid: '15'
                }
            },resMock,
            (err)=>{
                expect(err).to.be.eql(undefined);
                done();
            });

    });
});