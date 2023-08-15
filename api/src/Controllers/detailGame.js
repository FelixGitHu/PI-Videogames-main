const express=require('express');
require('dotenv').config();
const axios=require('axios');
const {API_KEY,URL}=process.env;
const {Videogame,Genres} =require('../db');
const { getAllVideogames } = require('../Handlers/getAllVideogames');


const detailGame=async (req,res)=>{
    const {id} = req.params;
    try{
        if(!id.includes('-')){
            let allVideogames = await getAllVideogames();
            let idGame = await allVideogames.filter(game => game.id === Number(id));
            if(idGame.length){
                const {data} = await axios(`${URL}/games/${id}?key=${API_KEY}`);
                const description=data.description;
                return res.status(200).json({...idGame[0],description});//lo que devuleve es un objeto
                //ver como agregar la descripcion a idGame
            }
            else{
                return res.status(200).send('No se encontro ningun juego con ese ID');
            }
        }else {
            let gameFound = await Videogame.findByPk(id,{
                include: [{
                    model: Genres,
                    attributes: ['nombre'],
                    through : {
                        attributes: [],
                    }
                }]
              })
              //console.log("Este es game Found",gameFound);
            const newgameFound =[gameFound].map((ele)=>{
                return{
                    id:ele.id,
                    nombre:ele.nombre,
                    imagen:ele.imagen,
                    genres:ele.genres.map((ele)=>ele.nombre),
                    fecha_de_lanzamiento:ele.fecha_de_lanzamiento,
                    description:ele.descripcion,
                    plataformas:ele.plataformas,
                    rating:ele.rating,
                }
            })
            //console.log("Esto es el nuevo",newgameFound);
            return res.status(200).json(newgameFound[0]);
        }
    }catch(error){
        return res.status(404).send(error)
    }
        
}

module.exports={
    detailGame,
}