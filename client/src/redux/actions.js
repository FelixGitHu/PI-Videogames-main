import axios from 'axios';
const URL=`http://localhost:3001`

export function getAllGames() {
    return async function (dispatch) {
        try {
            var {data} = await axios.get(`${URL}/videogames`);//ver si tengo que usar / o no
            return dispatch({
            type: 'GET_ALL_GAMES',
            payload: data
        })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getAllGenres() {
    return async function (dispatch) {
        try {
            var json = await axios.get(`${URL}/genres`);
            return dispatch({
            type: 'GET_ALL_GENRES',
            payload: json.data
        })
        } catch (error) {
            console.log(error);
        }
    }
}

export function postGame(payload) {
    return async function () {
        console.log(payload);
        const createPost = await axios.post(`${URL}/videogames`, payload);
        console.log(createPost);
        
        return createPost;
    }
}

export function searchVideogames(name){
    return async function(dispatch){
        try {
            console.log(name);
            let search = await axios.get(`${URL}/videogames?name=${name}`) 
            console.log(search);
            dispatch({
            type: 'SEARCH_VIDEOGAMES',
            payload: search.data
            })
        } catch (error) {
            console.log(error)
            alert("No se encontro el Videojuego con ese nombre");
        }
        
    }
}

export const getVideogameByID = (id) =>{
    return async function (dispatch){
        const gameID = await axios.get(`${URL}/videogames/${id}`)
        console.log(gameID.data);
        dispatch({
            type:'GET_VIDEOGAME_ID',
            payload:gameID.data
        })
    }
}


export function sortByName(order){
    return {
        type : 'SORT_VIDEOGAMES_BY_NAME',
        payload : order
    }
}

export function sortRating(order){
    return {
        type : 'SORT_RATING',
        payload : order
    }
}


export function genresFilter(type){
    return {
        type : 'FILTER_BY_GENRE',
        payload : type
    }
}

export function plataformsFilter(type){
    return {
        type : 'FILTER_BY_PLATFORM',
        payload : type
    }
}

export function filterByCreation(type){
    return {
        type: 'FILTER_API_DB',
        payload : type
    }
}

export function clear(){
    return{
        type: 'CLEAR',
        payload : []
    }
}

export function prev() {
    return {
      type: 'PREV',
    };
  }
  export function next() {
    return {
      type: 'NEXT',
    };
  }
  export function resetPage() {
    return {
      type: 'RESET_PAGE',
    };
  }