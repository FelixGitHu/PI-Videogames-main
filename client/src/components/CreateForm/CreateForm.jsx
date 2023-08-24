import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { getAllGames, postGame } from "../../redux/actions";
import style from "./CreateForm.module.css";


export default function CreateForm () {
    const navigation = useNavigate();
    const dispatch=useDispatch();
    const genres = useSelector((state) => state.allMyGenres);
    const video = useSelector((state) => state.allGames);
    //console.log("Estos son los genres",genres);
    // console.log("Estos son los VG",video.length);
    const [error, setError] = useState({
      name: "Name is a must",
      description: "",
      rating: "",
      released: "",
      img: "",
      platforms: [],
      genres: [],
    });
    const getAllPlatforms=()=>{
        
        let plats=video.map((e)=>e.plataformas);
        plats=plats.flat();
        
        let uniquePlats=new Set(plats);
        const arr=[...uniquePlats]
        return arr; 
    }
    const allPlataforms=getAllPlatforms()
    //console.log(allPlataforms)
    const [input, setInput] = useState({
      name: "",
      description: "",
      rating: "",
      released: "",
      img: "",
      platforms: [],
      genres: [],
    }); 
    
    function validate(input) {
      let error = {};
  
      if (!input.name) {
        error.name = "Name is a must";
      } else if (input.name.length > 50) {
        error.name = "Name is too long";
      }
  
      if (!input.description) {
        error.description = "Description is required ";
      } else if (input.description.length > 1500) {
        error.description = "Description is too long. (Max = 1500 characters)";
      }
  
      if (!input.rating) {
        error.rating = "Rating is required";
      } else if (input.rating > 5 || input.rating < 0) {
        error.rating = "Rating must range between 0 to 5";
      }
  
      if (!input.released) {
        error.released = "Date of release is required";
      } else if (input.released.length < 10) {
        error.released = "Date of release is to long";
      }
      // if (!input.img) {
      //   error.img = "Image URL is required";
      // }
  
      if (!input.genres[0]) {
        error.genres = "Minimun one Genre is required ";
      }
  
      if (!input.platforms[0]) {
        error.platforms = "Minimun one Platform is required";
      }
  
      return error;
    }
  
    function handleOnChange(evento) {
      evento.preventDefault();
      setInput({
        ...input,
        [evento.target.name]: evento.target.value,
      });
      setError(
        validate({
          ...input,
          [evento.target.name]: evento.target.value,
        })
      );
  
      console.log(input);
    }
    function handleSelectGenres(evento) {
      evento.preventDefault();
      if (!input.genres.includes(evento.target.value)) {
        setInput({
          ...input,
          genres: [...input.genres, evento.target.value],
        });
        setError(
          validate({
            ...input,
            genres: [...input.genres, evento.target.value],
          })
        );
      } else {
        setInput({
          ...input,
        });
      }
    }
    function handleSelectPlataforms(evento) {
      evento.preventDefault();
      if (!input.platforms.includes(evento.target.value)) {
        setInput({
          ...input,
          platforms: [...input.platforms, evento.target.value],
        });
        setError(
          validate({
            ...input,
            platforms: [...input.platforms, evento.target.value],
          })
        );
      } else {
        setInput({
          ...input,
        });
      }
    }
    
   
  
    function handleSubmit(evento) {
      evento.preventDefault();
  
      let crear = {
        nombre: input.name,
        descripcion: input.description,
        rating: input.rating,
        fecha_de_lanzamiento: input.released,
        imagen: input.img,
        plataformas: input.platforms,
        genres: input.genres,
      };
  
      dispatch(postGame(crear));
      dispatch(getAllGames());

      setInput({
        name: "",
        description: "",
        rating: "",
        released: "",
        img: "",
        platforms: [],
        genres: [],
      });
  
      alert("VideoGame Created");
      navigation("/home");//usar el use navigate(/home)
    }
  
    return (
      <div >
        <div >
  
          <div >

          <div >
  
          <h1 className={style.titulo} >Crea tu videojuego</h1>
          <form className={style.form} onSubmit={(evento) => handleSubmit(evento)}>
            <div>
              <p style={{color: "aquamarine"}}>Name:</p>
              <input
                className={style.input}
                type="text"
                value={input.name}
                name="name"
                onChange={handleOnChange}
              />
              {error.name && <span style={{color: "red"}}>{error.name}</span>}
            </div>
  
  
            <div>
              <p style={{color: "aquamarine"}}>Released:</p>
              <input
                className={style.input}
                type="date"
                value={input.released}
                name="released"
                onChange={handleOnChange}
              />
              {error.released && <span style={{color: "red"}}>{error.released}</span>}
            </div>
  
            <div>
              <p style={{color: "aquamarine"}}>ImageUrl:(Puede ir vacio)</p>
              <input
                className={style.input}
                type="text"
                value={input.img}
                name="img"
                onChange={handleOnChange}
              />
              {error.img && <span style={{color: "red"}}>{error.img}</span>}
            </div>
  
            <div>
              <p style={{color: "aquamarine"}}>Rating:</p>
              <input
                className={style.input}
                type="number"
                value={input.rating}
                name="rating"
                onChange={handleOnChange}
              />
              {error.rating && <span style={{color: "red"}}>{error.rating}</span>}
            </div>

            <div>
              <p style={{color: "aquamarine"}}>Genres</p>
              <select className={style.input} onChange={(evento) => handleSelectGenres(evento)}>

              <option value="all">All</option>
              {genres.map((genero)=>{return <option value={genero.nombre}>{genero.nombre}</option>})}

            </select>
            <div style={{color: "aquamarine"}}>
              {input.genres.map((ele)=>ele).join(', ')};
            </div>
            {error.genres && <span style={{color: "red"}}>{error.genres}</span>}
            </div>
            <div>
            <p style={{color: "aquamarine"}}>Platforms</p>
              <select className={style.input} onChange={(evento) => handleSelectPlataforms(evento)}>
             
              <option value="all">All</option>
              {(allPlataforms).map((value)=>{return <option value={value}>{value}</option>})}

              </select>
              <div style={{color: "aquamarine"}}>
                {input.platforms.map((ele)=>ele).join(', ')}
              </div>
            </div>
            {error.platforms && <span style={{color: "red"}}>{error.platforms}</span>}
            <div>
              <p style={{color: "aquamarine"}}>Description:</p>
              <textarea
              className={style.textArea}
                type="text"
                value={input.description}
                name="description"
                onChange={handleOnChange}
              />
              {error.description && (
                <span style={{color: "red"}}>{error.description}</span>
              )}
            </div>
            {((Object.keys(error).length)) ? (
            <div >
              <input type="submit" disabled name="Send" />
            </div>
          ) : (
            <div>
              <input type="submit"  name="Send" />
            </div>
          )}
          </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
  