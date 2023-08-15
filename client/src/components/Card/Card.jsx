import style from './Card.module.css';
import {Link} from "react-router-dom";

const Card = (props)=>{
    const id = props.id
    let genero;
    let prueba=props.genres.map((ele)=>ele.nombre);
    if(prueba[0]===undefined){
        genero=props.genres;
    }
    else{
        genero=props.genres.map((ele)=>ele.nombre)
    }
    
    return(
        <div className={style.Container}>
            <Link to={`/detail/${id}`}>
                <button className={style.button}>{props.name}</button>
            </Link>
            <img className={style.image} src={props.image} alt={props.name} />
            <p className={style.text}>Rating: {props.rating}</p>
            <p className={style.text}>Genres: {genero.join(" , ")}</p>
        </div>
    )
};
export default Card; 
