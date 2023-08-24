const app = require('../../src/app');
const supertest = require('supertest');
const agent = supertest(app);
const chai = require("chai");
const expect = chai.expect;

describe("Funciona", () => {
  it("should return a 200 status code and the message 'Funciono'", async () => {
    const response = await agent.get("/funciona");

    expect(response.status).to.be.equal(200);
    expect(response.text).to.deep.equal("Funciono");
  });
});