import Card from "../Card/Card";
import Paginate from "../Paginado/Paginado";
import style from "./CardsContainer.module.css";
import {useSelector} from "react-redux";

const CardsContainer = ()=>{
    const videoGames = useSelector(state=>state.filteredGames);
    const {numPage}=useSelector(state=>state);
    const cantVGPerPage = 20;
  let desde = (numPage - 1) * cantVGPerPage; 
  let hasta = numPage * cantVGPerPage;       

  let cantPage = Math.floor(videoGames.length / cantVGPerPage);


  // 0,1,2,3    4,5,6,7   8,9,10,11
  const viewGames = videoGames?.slice(desde, hasta);

  console.log("#####num page", numPage) // sarasa
    return(
        <div>
            <div className={style.Container}>
                {viewGames?.map(videoGames=>{
                    return <Card
                    key={videoGames.id}
                    id={videoGames.id}
                    name={videoGames.nombre}
                    image={videoGames.imagen}
                    released={videoGames.fecha_de_lanzamiento}
                    rating={videoGames.rating}
                    genres={videoGames.genres}
                    />
                })}
            </div>
            <div>

            </div>
            <Paginate numPage={numPage} cantPage={cantPage} />
        </div>
    )
};
export default CardsContainer;