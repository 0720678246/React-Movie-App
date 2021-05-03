import {FETCH_MOVIES, SEARCH_MOVIE,FETCH_MOVIE,LOADNING} from "../Action/types";


const initailState = {
    text:'',
    movies:[],
    loading:false,
    movie:[]
}

export default function (state=initailState,action){
    switch (action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                loading: false

            }
        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,
                loading: false

            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie:action.payload,
                loading: false

            }
        case LOADNING:
            return{
                ...state,
                 loading: true

            }

        default:
            return state;
    }
}