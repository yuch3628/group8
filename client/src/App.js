import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import NavBar from "./component/NavBar.js";
import Routes from "./Routes";
import ScrollToTop from "./component/ScrollToTop.js";

function App({setLocale}) {
//     getData();
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

