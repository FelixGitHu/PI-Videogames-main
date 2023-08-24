const express=require('express');
require('dotenv').config();
const axios=require('axios');
const {API_KEY,URL}=process.env;
const {Videogame} =require('../db');
const { getAllVideogames } = require('../Handlers/getAllVideogames');


const allGames= async(req,res)=>{
    try {
        const {name} = req.query
        //console.log("Hola");
        let videogamesTotal = await getAllVideogames();
        if(name){
            //console.log(name);
            let videogameName = videogamesTotal.filter((ele) => ele.nombre.toLowerCase() .includes (name.toLowerCase()));
            //*Devulve varios juegos ej Portal y Portal 2 o los de Witcher
            //console.log(videogamesTotal);
            if(videogameName.length) {
                return res.status(200).json(videogameName);
            }
            else{
                return res.status(404).send('No se encuentra el videojuego');
            }
            
        }else{
            return res.status(200).json(videogamesTotal)
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

module.exports={
    allGames,
}