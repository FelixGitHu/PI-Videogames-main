


const inicialState = {
    allGames: [],
    filteredGames: [],
    idGames: [],
    copyGames:[],
    allMyGenres: [],
    filteredGenres: [],
    numPage:1,
}

export default function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case 'GET_ALL_GAMES':
            return {
                ...state,
                allGames: action.payload,
                filteredGames: action.payload,
            }

        case 'GET_ALL_GENRES':
            return {
                ...state,
                allMyGenres: action.payload,
                filteredGenres: action.payload
            }
        case 'SEARCH_VIDEOGAMES':
            let nombre=[];
            //console.log("mi action",action.payload);
            if(action.payload === ''){
                nombre=state.allGames;
            }else{
                nombre=action.payload.map(ele=>ele)
                //console.log(nombre);
            }
            return {
                ...state,
                filteredGames: nombre,
                };
        case 'GET_VIDEOGAME_ID':
            return {
                ...state,
                idGames: action.payload,
            }
        case 'SORT_VIDEOGAMES_BY_NAME':
            let orderedVideogames=state.filteredGames;
                
            if(action.payload==="Ascendente")
            {
                orderedVideogames.sort((a,b)=>{ 
                    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
                    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
                    return 0;
                });
            }
            else if(action.payload==="Descendente"){
                orderedVideogames.sort((a,b)=>{ 
                    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
                    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
                    return 0;
                }); 
            }
            else{
                orderedVideogames=state.allGames
            }
            return {
                ...state,
                filteredGames: [...orderedVideogames],
            };
        case 'SORT_RATING':
            let orderedRating=state.filteredGames;
                
            if(action.payload==="Descendente")
            {
                orderedRating.sort((a,b)=>{ 
                    if(a.rating > b.rating) return 1;
                    if(a.rating < b.rating) return -1;
                    return 0;
                });
            }
            else if(action.payload==="Ascendente"){
                orderedRating.sort((a,b)=>{ 
                    if(a.rating < b.rating) return 1;
                    if(a.rating > b.rating) return -1;
                    return 0;
                }); 
            }
            else{
                orderedRating=state.allGames;
            }
            return {
                ...state,
                filteredGames: [...orderedRating],
            };
        case 'FILTER_BY_GENRE':

            let juegos = action.payload
            let filtrados = state.allGames.filter(videogames => videogames.genres?.includes(juegos))
            
            if (action.payload === "all") filtrados = state.allGames
            if (filtrados.length === 0) {
                alert("No hay resultados")
                filtrados = state.allGames
            }
            return {
                ...state,
                filteredGames: filtrados
            }
        case 'FILTER_BY_PLATFORM':

            let plataformas = action.payload
            let plataformasFiltradas = state.allGames.filter(videogames => videogames.plataformas?.includes(plataformas))
            if (action.payload === "all") plataformasFiltradas = state.allGames
            if (plataformasFiltradas.length === 0) {
                alert("No hay resultados")
                plataformasFiltradas = state.allGames
            }
            return {
                ...state,
                filteredGames: plataformasFiltradas
            }
        case "FILTER_API_DB":
            let dbjuegos=state.allGames;
            console.log(dbjuegos);
            if(action.payload === 'db'){
                dbjuegos=state.allGames.filter((e)=>isNaN(e.id));
                return{
                    ...state,
                    copyGames:state.allGames,
                    filteredGames: dbjuegos
                }
            }
            else if(action.payload ==="api"){
                dbjuegos=state.allGames.filter((e)=>!isNaN(e.id));
                return{
                    ...state,
                    filteredGames: dbjuegos
                }
            }
            else{
                return{
                    ...state,
                    filteredGames: state.allGames
                }
            }
        case 'CLEAR':
            return {
                ...state,
                idGames : action.payload
            }
        case 'RESET_PAGE':
            
            return {
                ...state,
                numPage: 1,
            };
        case 'PREV':
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        case 'NEXT':
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        default:
            return {...state};
    }
}