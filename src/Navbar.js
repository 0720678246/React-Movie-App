import React from 'react'
import {Link} from "react-router-dom";


const Navbar=()=>{
    return(
        <div className="header">
            <div className="main-nav">
                <div className="logo">
                    <Link to="/">Movie APP</Link>

                </div>
                <div className="menu-right">
                    <ul>
                        <li><a href="#">New Movies</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">About</a></li>
                    </ul>

                </div>

            </div>

        </div>
    )
}
export default Navbar