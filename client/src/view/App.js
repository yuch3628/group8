/*
  CONTROLLER FUNCTIONS - React router dom
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/

// Use react-router-dom to switch page and set language
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import '../style/App.css';
import NavBar from "../component/NavBar.js";
import Routes from "../Routes.js";
import ScrollToTop from "../component/ScrollToTop.js";

function App({setLocale}) {
    return (
        <Router>
            <ScrollToTop>
                <div className="App">
                <NavBar setLocale={setLocale}/>
                </div>
                <Routes/>
            </ScrollToTop>
        </Router>

      );
}
export default App;

