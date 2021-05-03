import React from "react";
import {Link} from "react-router-dom";

const NotFound=()=>{
    return(
        <div className="container notfound">
            <h3>Sorry Your Search Is not Found </h3>

            <Link to="/">Return Home</Link>

        </div>
    )
}
export default NotFound
