const supertest =require("supertest") ;

describe("Funciona", () => {
  it("should return a 200 status code and the message 'Funciono'", () => {
    const response = supertest("http://localhost:3001").get("/funciona");

    expect(response.status).toBe(200);
    expect(response.body).toEqual("Funciono");
  });
});