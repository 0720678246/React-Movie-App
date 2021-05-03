import React,{Component} from 'react'
import {searchMovie,fetchMovies,setLoading} from "../Action/SearchActions";
import {connect} from "react-redux";




class  SearchMovie extends Component{
    onChange=(e)=>{
        this.props.searchMovie(e.target.value);
        }
    getMovies=(e)=>{
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()

    }

    render() {
        return(
            <div>
                <form className="search-movie" onSubmit={this.getMovies}>
                    <input type="text"  className="search-bar" onChange={this.onChange} placeholder="search movie....."/>
                    <button type="submit" className="search-button">Search</button>


                </form>

            </div>
        )
    }

}
const mapStateToProps=state=>({
    text:state.movies.text
})

export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading})(SearchMovie)