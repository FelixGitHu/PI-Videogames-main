const express=require('express');
require('dotenv').config();
const axios=require('axios');
const {Genres} = require('../db');
const {API_KEY,URL}=process.env;
const routerGenres= express.Router();

routerGenres.get('/',async (req,res)=>{
    
    try { 
        const lleno=await Genres.findAll();
        if(lleno.length===0){
            const apigenres = await axios(`${URL}/genres?key=${API_KEY}`)
            const genres = apigenres.data.results.map(ele => ele.name)
            genres.forEach(genre => { // Creando la base da datos de todos lo generos usando el modelo de Genre
            Genres.findOrCreate({
             where: {nombre: genre}
        })
        })
            return res.status(200).json(genres);
        }   
        // const videogamesGenre = await Genres.findAll({
        //  attributes: ['nombre']
        // })
        // let databaseGenre = videogamesGenre.map(p => p.nombre)        
        return res.status(200).json(lleno);
     } catch (error) {
        return res.send(`Error in route /genres ${error}`);
     } 
})

/*
Obtiene un arreglo con todos los géneros existentes de la API. =>axios
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
*/
module.exports={
    routerGenres,
}