const chai = require('chai')
const expect = require("chai").expect;
const chaiHttp = require('chai-http');
const client = require('../services/zendesk');
const request = require("request");



chai.use(chaiHttp);

//test response status
describe("Zendesk ticket viewer", function () {


    describe("Get tickets with after cursor", function () {

        const url = "http://localhost:3007/?aftercursor=eyJvIjoibmljZV9pZCIsInYiOiJhUndBQUFBQUFBQUEifQ%3D%3D";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
    })

    describe("Get ticket with before cursor", function () {

        const url = "http://localhost:3007/?beforecursor=eyJvIjoibmljZV9pZCIsInYiOiJhUndBQUFBQUFBQUEifQ%3D%3D";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    });
})

describe('responds', function () {

    //test response status 
    it('should load', function (done) {
        chai.request('http://localhost:3007')
            .get('/')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    //test if there are headers in the responce
    it('has headers in the request', function () {
        chai.request('http://localhost:3007')
            .get('/')
            .end(function (err, res) {
                expect(request).to.have.status(200);
                done();
            });
    });

    //test if response is json
    it('has JSON as response', function () {
        chai.request('http://localhost:3007')
            .get('/')
            .end(function (err, res) {
                expect(request).to.be.json;
                done();
            });
    });
})