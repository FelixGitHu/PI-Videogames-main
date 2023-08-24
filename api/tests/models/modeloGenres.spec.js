const supertest = require("supertest");
const { Genres } = require("../../src/db");
const chai = require("chai");
const expect = chai.expect;

describe("Genres", () => {
  let genre;

  it("should find the genre Action",async () => {
    const response = await supertest("http://localhost:3001").get("/genres");
    genre = await Genres.findOne({ where: { nombre: "Action" } });
    const firstResponse = response;
    if (firstResponse.status===200) {
      expect(firstResponse.status).to.be.equal(200);
      expect(firstResponse.body[0]).to.deep.equal(
        {
        id: genre.id,
        nombre: genre.nombre
      }
    );
    console.log("Se encontro el genre Action");
    } else {
      console.log("No response received");
    }
  });
});