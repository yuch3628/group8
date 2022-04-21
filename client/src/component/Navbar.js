import React from 'react';
import {  Link } from "react-router-dom";
// import Mainpage from "../pages/Mainpage";

const Navbar= () =>{
    return (
        <nav>
            <div>
                <Link to="/">Mainpage</Link>
                <Link to="/setting">Setting</Link>
            </div>
        </nav>
    );
}
export default Navbar;