const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

xdescribe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  xdescribe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    xdescribe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Super Mario Bros' });
      });
    });
  });
});
