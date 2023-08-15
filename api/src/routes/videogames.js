const express=require('express');
const { createGame } = require('../Controllers/CreateGame');
const { detailGame } = require('../Controllers/detailGame');
const { allGames } = require('../Controllers/getGames');


const routerVideogames= express.Router();

routerVideogames.get('/:id', detailGame);
routerVideogames.get('/', allGames); // uso esta ruta para sacar los juegos por el nombre usando query
routerVideogames.post('/', createGame);

module.exports={
    routerVideogames,
}