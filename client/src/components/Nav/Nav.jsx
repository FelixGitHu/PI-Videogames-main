import React from "react";

import stylesNav from "./Nav.module.css"
import { Link,NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Nav =({onSearch,out})=>{
    //Renderizar los select
    return(
        <div className={stylesNav.container}>
            <NavLink className={stylesNav.boton} to="/createVideosgame">Create Videogame</NavLink>
            <NavLink className={stylesNav.boton} to="/home">HOME</NavLink>
            <SearchBar/>
            <button className={stylesNav.btn} onClick={out}>LOGOUT</button>
        </div>
    )

};

export default Nav;