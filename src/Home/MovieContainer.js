import React, {Component} from 'react'
import {connect} from "react-redux";
import MovieCard from "./MovieCard";
// import NotFoud from "./NotFoud";


class MovieContainer extends Component{

    render() {
        const {movies}=this.props

        let content='';

        content=
            movies.Response==="True"
            ? movies.Search.map((movie,index)=><MovieCard key={index} movie={movie}/>):null
        return(
            <div className="container">
                <div className="row">
                    {content}

                </div>


            </div>
        )
    }
}
const mapStateToProps=state=>({
    movies:state.movies.movies
})
export default connect(mapStateToProps)(MovieContainer)