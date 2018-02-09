/**
 * API endpoint test for dummy data
 */
import supertest from 'supertest';
import chai from 'chai';
import app from '../app';

const { expect } = chai,
    request = supertest(app),
    invalidRecipeID = 5;

describe('All test cases for application', () => {
    describe('Test case for loading application home page', () => {
        it('should load application home page', (done) => {
            request.get('/')
                .set('Content-Type', 'application/json')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).deep.equal({
                        name: 'Don Ulor',
                        message: 'Welcome to More-Recipes'
                    });
                    if (err) done(err);
                    done();
                });
        });
    });

    describe('Test Case For Invalid Routes', () => {
        it('Should return a message when an invalid route is accessed', (done) => {
            request
                .get('/api/v1/some-rubbish')
                .set('Connection', 'keep alive')
                .set('Content-Type', 'application/json')
                .expect(404)
                .end((err, res) => {
                    expect(res.status).to.equal(404);
                    expect(res.body.message).to.equal('Invalid routes');
                    done();
                });
        });

        it('should fail to get route', (done) => {
            request.get('/api/v1')
                .set('Contet-Type', 'application/json')
                .expect(404)
                .end((err, res) => {
                    expect(res.body).deep.equal({
                        message: 'Invalid routes'
                    });
                    if (err) done(err);
                    done();
                });
        });

        it('should return `404` page for all invalid routes', (done) => {
            request.get('/more-recipes/recipes')
                .set('Content-Type', 'application/json')
                .expect(404)
                .end((err, res) => {
                    expect(res.body).deep.equal({
                        message: 'Invalid routes'
                    });
                    if (err) done(err);
                    done();
                });
        });
    });
});