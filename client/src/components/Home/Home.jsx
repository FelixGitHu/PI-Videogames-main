import style from './Home.module.css';
import CardsContainer from '../CardsContainer/CardsContainer';
import { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { clear, filterByCreation, genresFilter, getAllGames, getAllGenres, plataformsFilter, resetPage, sortByName, sortRating } from '../../redux/actions';

const Home = () => {
  
// spinner
  const [loading, setLoading] = useState(true);
  const genres=useSelector(state=>state.allMyGenres)
  const myGames = useSelector(state=>state.filteredGames)
  const video = useSelector((state) => state.allGames);
  const getAllPlatforms=()=>{
        
    let plats=video.map((e)=>e.plataformas);
    plats=plats.flat();
    
    let hola=new Set(plats);
    const arr=[...hola]
    return arr; 
}
const allPlataforms=getAllPlatforms()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
// dispatch
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllGames());
  //   dispatch(getAllGenres());
  // }, [dispatch]);
//Filtros
const [aux,setAux]=useState(false);
  function handleOrder(evento){
  evento.preventDefault();
  dispatch(sortByName(evento.target.value));
  dispatch(resetPage());
  setAux(true);
}
function handleRating(evento){
  evento.preventDefault();
  dispatch(sortRating(evento.target.value));
  dispatch(resetPage());
  setAux(true);
}
function handleFilter(evento){
  evento.preventDefault();
  dispatch(filterByCreation(evento.target.value));
  dispatch(resetPage());
  setAux(true);
}
function handleGenres(evento){
  evento.preventDefault();
  dispatch(genresFilter(evento.target.value));
  dispatch(resetPage());
  setAux(true);
}
function handlePlatforms(evento){
  evento.preventDefault();
  dispatch(plataformsFilter(evento.target.value));
  dispatch(resetPage());
  setAux(true);
}
  return (
<>
  {myGames.length<=0 ?(

  <Loader/>
    
  ) : (
    <div className={style.envelop}>
      <div className={style.filters}>
        <p style={{color:"red"}}>Filtro por nombre</p>
        <select  onChange={handleOrder} placeholder='A o D'>
            <option value="all">All</option>
            <option value="Ascendente">A-Z</option>
            <option value="Descendente">Z-A</option>
        </select>
        <p style={{color:"red"}}>Filtro por Rating</p>
        <select onChange={handleRating} placeholder='A o D'>
            <option value="all">All</option>
            <option value="Ascendente">Mas Rating</option>
            <option value="Descendente">Menos Rating</option>
        </select>
        <p style={{color:"red"}}>Filtro por Creacion</p>
        <select onChange={handleFilter} placeholder='Api o DB o All'>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="db">Base de datos</option>
        </select>
        <p style={{color:"red"}}>Filtro por genero</p>
        <select onChange={handleGenres}>
              <option value="all">All</option>
              {genres.map((genero)=>{return <option value={genero.nombre}>{genero.nombre}</option>})} 
        </select>
        <p style={{color:"red"}}>Filtro por plataforma</p>
        <select onChange={handlePlatforms}>
              <option value="all">All</option>
              {allPlataforms.map((plats)=>{return <option value={plats}>{plats}</option>})} 
        </select>
      </div>
     <div className={style.container}>
      <h1 className={style.title}>Videogames</h1>
      <CardsContainer />
    </div>
    </div>
    )
  }
  </>
  );
};

export default Home;
