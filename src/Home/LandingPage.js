import React, {Component} from 'react'
import SearchMovie from "./SearchMovie";
import {connect} from "react-redux";
import Spinner from "./Spinner";
import MovieContainer from "./MovieContainer";


class LandingPage extends Component{

    render() {
        const {loading}=this.props
        return(
            <div className="home ">
                <SearchMovie/>
                {loading ? <Spinner/> :<MovieContainer/>}

            </div>
        )
    }


}
const mapStateToProps=state=>({
    loading:state.movies.loading

})
export default connect(mapStateToProps)(LandingPage)