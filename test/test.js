const chai = require('chai');
const expect = chai.expect;
const app = require('../app');
const { response } = require('express');

describe('App', () => {
    it('deberia devolver ¡Hola Mundo! en la ruta /', () =>{
        return app.get('/').then(response => {
            expect(response.text).to.equal('¡Hola Mundo!, Daniel Sebastian Reynoso Feliz 2021-1571')
        })

    })

})