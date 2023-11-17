const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../app');

describe('App', () => {
    it('deberia devolver ¡Hola Mundo! en la ruta /', (done) => {
        supertest(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('¡Hola Mundo!, Daniel Sebastian Reynoso Feliz 2021-1571');
                done();
            });
    });
});
