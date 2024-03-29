import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMovie,setLoading} from "../Action/SearchActions";
import Spinner from "./Spinner";
import {Link} from "react-router-dom";



class SingleMovie extends Component{
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()
    }

    render() {
        const {loading,movie}=this.props
        
        
        let movieInfo=(
            <>
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={movie.Poster} className="thumbnail" alt="Poster"/>


                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">{movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong>{movie.Genre}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong>{movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong>{movie.Rated}
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong>{movie.imdbRating}
                            </li>
                            <li className="list-group-item">
                                <strong>Director:</strong>{movie.Director}
                            </li>

                            <li className="list-group-item">
                                <strong>Writer:</strong>{movie.Writer}
                            </li>

                            <li className="list-group-item">
                                <strong>Actors:</strong>{movie.Actors}
                            </li>

                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>About</h3>
                            {movie.Plot}
                            <hr/>
                            <Link  to="https://www.imdb.com/title/' +movie.imdbID"
                               target="_blank"
                               className="btn btn-primary"
                               rel="noopener noreferrer"
                            >
                                View on IMDB
                            </Link>
                            <Link to="/" className="btn btn-default text-light">
                                Go Back to Search
                            </Link>
                        </div>

                    </div>

                </div>



            </>
        )
        let content=loading ? <Spinner/> :movieInfo
        return(
            <div className="container">
                {content}
            </div>

        )
    }


}

const mapStateToProps=state=>({
    loading:state.movies.loading,
    movie: state.movies.movie
})
export default connect(mapStateToProps,{fetchMovie,setLoading})(SingleMovie)