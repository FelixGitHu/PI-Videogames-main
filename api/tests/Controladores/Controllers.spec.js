const app = require('../../src/app');
const supertest = require('supertest');
const agent = supertest(app);
const chai = require("chai");
const expect = chai.expect;

describe("Controllers", () => {
    
  it('should return a 200 OK status code if the name query parameter is specified', async () => {
    
    const response = await agent.get('/videogames?name=The Witcher 3');
    const body=await response.body;
    const status=await response.status;
    expect(status).to.be.equal(200);
    expect(body[0]).to.have.property('nombre')
  });
});