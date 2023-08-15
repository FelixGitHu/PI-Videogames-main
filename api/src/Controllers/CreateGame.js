const express=require('express');
require('dotenv').config();
const axios=require('axios');
const {API_KEY,URL}=process.env;
const {Videogame,Genres} =require('../db');
const { getAllVideogames } = require('../Handlers/getAllVideogames');
const { asignarImagenes } = require('../Handlers/imagenes');


const createGame=async(req,res)=>{
    let {nombre, descripcion, fecha_de_lanzamiento, rating, plataformas, imagen,genres} = req.body

    if(!imagen){
        imagen=asignarImagenes();
    }

    if (!nombre || !descripcion || !plataformas || !imagen || !rating || !fecha_de_lanzamiento) {
        return res.status(400).send("Faltan parametros");
    }
    const findVideogame = await Videogame.findAll({ where: { nombre: nombre } });
    if (findVideogame.length != 0) {
        return res.send("El nombre ya esta en uso");
    }
    
    let newGame = await Videogame.create({
        nombre,
        descripcion,
        rating,
        fecha_de_lanzamiento,
        imagen,
        plataformas: plataformas,
    });
     
    let genreDatabase = await Genres.findAll({
      where: { nombre: genres },
    });
    
    await newGame.addGenres(genreDatabase);
    //newGame.genres = newGame.getGenres().pluck('nombre');
    //console.log(newGame.genres);
    
    const nombreArray = genreDatabase.map(genre => genre.nombre);
    newGame={
        nombre,
        descripcion,
        rating,
        fecha_de_lanzamiento,
        imagen,
        plataformas: plataformas,
        genres:nombreArray,
    }
    console.log(newGame);
    
    // //Ver como agregar en genre que viene de la BD
    
    return res.status(200).json({"El Videogame fue creado con exito":newGame});

}

module.exports={
    createGame,
}