import style from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import React from "react";
import { searchVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
export default function SearchBar(props) {

   const dispatch=useDispatch();
   
   const[nombre,Setnombre]=useState("");
   const handleChange =(evento)=> {
      evento.preventDefault();
      Setnombre(evento.target.value)
   };
   // const game=useSelector((state)=>state.filteredGames)
   // console.log("Esto es lo que busco",game);
  function onSearch(nombre){
   dispatch(searchVideogames(nombre));
  }
  
   return (
      <div className={style.container}>
          <input value={nombre} onChange={handleChange} type='search' placeholder="Busque un nombre" />
         <button onClick={()=>{onSearch(nombre)}}>Buscar</button>
      </div>
   );
}
