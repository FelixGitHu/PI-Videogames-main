const express=require('express');
const { createGame } = require('../Controllers/CreateGame');
const { detailGame } = require('../Controllers/detailGame');
const { allGames } = require('../Controllers/getGames');
const { getAllGames } = require('../../../client/src/redux/actions');
const Videogame = require('../db');



const routerVideogames= express.Router();

routerVideogames.get('/:id', detailGame);
routerVideogames.get('/', allGames); // uso esta ruta para sacar los juegos por el nombre usando query
routerVideogames.post('/', createGame);
routerVideogames.delete('/:id',async(req,res)=>{
    try {
        const id=Number(req.params);
        const idEncontrado= await Videogame.destroy({
        where:{
            id:id
        }
    })
    res.status(200).send("Se borro con exito");
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports={
    routerVideogames,
}