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
});