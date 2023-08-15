const supertest = require("supertest");
const { Genres } = require("../../src/db");
const expect = require("chai").expect;

describe("Genres", () => {
  let genre;

  beforeEach(() => {
    genre = Genres.findOne({ where: { nombre: "Action" } });
  });

  it("should find the genre Action",async () => {
    const response = await supertest("http://localhost:3001").get("/genres");
    const firstResponse = response[0];

    if (firstResponse) {
      expect(firstResponse.status).to.be.equal(200);
      expect(firstResponse.body).to.deep.equal({
        id: genre.id,
        nombre: genre.nombre
      });
    } else {
      console.log("No response received");
    }
  
  });
});