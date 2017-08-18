var request = require('supertest');

describe('ContactController', function() {

    describe('#GetAllContacts()', function() {
        it('Get all contacts from the database', function (done) {
        
            request(sails.hooks.http.app)
                .get('/contact')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                    done();
                });
        });
    });
    describe('AddContact', function() {

        describe('#AddContact()', function() {
            it('Check Parameters', function (done) {
            
                request(sails.hooks.http.app)
                    .put('/contact/')
                    .send({  })
                    .expect( 400)
                    .end(function(err, res) {
                        if (err) throw err;
                        console.log(body);
                        done();
                    });
        
            });
            it('Add a contact to the database', function (done) {
            
                request(sails.hooks.http.app)
                    .put('/contact/')
                    .send({ name: 'Name',phoneNumber:'111-222-3333' })
                    .expect(200)
                    .end(function(err, res) {
                        if (err) throw err;
                        done();
                    });
            
            });
        });
    });
});