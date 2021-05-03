import {SEARCH_MOVIE} from "./types";
import {FETCH_MOVIES} from "./types";
import {FETCH_MOVIE} from "./types";
import {LOADNING} from "./types";
import axios from "axios";




const api='c9f2374e';

export const searchMovie=text=>dispatch=>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    })


}
export const fetchMovies=text=>dispatch=>{
    axios.get(`http://www.omdbapi.com/?apikey=${api}&s=${text}`)
        .then(res=>dispatch({
            type:FETCH_MOVIES,
            payload:res.data
        }))
        .catch(error=>{
            console.log(error)
        })

}
export const fetchMovie=id=>dispatch=>{
    axios.get(`http://www.omdbapi.com/?apikey=${api}&i=${id}`)
        .then(res=>dispatch({
            type:FETCH_MOVIE,
            payload:res.data

        }))
        .catch(error=>{
            console.log(error)
        })
}
export const setLoading=()=>{
    return{
        type:LOADNING
    }
}