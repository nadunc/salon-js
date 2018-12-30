let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./index');
let should = chai.should();


chai.use(chaiHttp);

describe('Stylists', () => {

    describe('/GET stylists', () => {
        it('it should GET all the stylists', (done) => {
            chai.request(server)
                .get('/stylists')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.success.should.be.a('boolean')
                    res.body.data.should.be.a('array');
                    done();
                });
        });
    });

});