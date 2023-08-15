import {useSelector,useDispatch} from "react-redux";
import { useEffect, useState} from 'react';
import { clear, getVideogameByID } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../Home/Loader";
import style from "./Detail.module.css";


const Detail=()=>{

    const {id}=useParams();
    let idParams=id;
    console.log(idParams);
    const dispatch=useDispatch();
    
    useEffect(() => {//Hacer que el useEffect no use el timer sino que espere a que se cargue videogameById
        dispatch(getVideogameByID(idParams));
        return () => {
            dispatch(clear());
          };
    }, []);
    const videogameById=useSelector((state)=>state.idGames);
    console.log(videogameById);
    // useEffect(() => {  
    // }, [dispatch]);
   

    
    return(
        <>
        {videogameById.length <=0 ?(

            <Loader/>
              
            ):(
            <div style={{backgroundImage: `url(${videogameById.imagen})`, width:"97vw",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
            <h1 style={{color: "red"}}>{videogameById.nombre}</h1>
            <h1 style={{color: "black"}}>{videogameById.description}</h1>
            <h1 style={{color: "red"}}>Fecha de estreno :{videogameById.fecha_de_lanzamiento}</h1>
            <h1 style={{color: "red"}}>Genres :{videogameById.genres.join("--")}</h1>
            <h1 style={{color: "red"}}>Plataformas :{videogameById.plataformas.join("--")}</h1>
            <h1 style={{color: "red"}}>Rating :{videogameById.rating}</h1>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
        )
    }
    </>
    )
}

export default Detail;