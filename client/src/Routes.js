/*
  CONTROLLER FUNCTIONS - Route
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/


import React from "react";
import {Route, Switch} from "react-router-dom";
import About from "./view/About";
import Home from "./view/Home";
import Challenge from "./pages/Challenge";
import Learning1 from "./view/Learning1";
import Learning2 from "./view/Learning2";
import Learning3 from "./view/Learning3";
import Learning4 from "./view/Learning4";
import Learning5 from "./view/Learning5";
import Learning6 from "./view/Learning6";
import Challenge1 from "./view/Challenge1";
import Challenge2 from "./view/Challenge2";
import Challenge3 from "./view/Challenge3";
import Challenge4 from "./view/Challenge4";
import Challenge5 from "./view/Challenge5";
import Challenge6 from "./view/Challenge6";



import Faq from "./view/Faq.js";

// Use react-router-dom to set the routes of each page
export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
{/*             <Route path='/challenge' component={Challenge} /> */}
            <Route path='/learning/lesson1' component={Learning1} />
            <Route path='/learning/lesson2' component={Learning2} />
            <Route path='/learning/lesson3' component={Learning3} />
            <Route path='/learning/lesson4' component={Learning4} />
            <Route path='/learning/lesson5' component={Learning5} />
            <Route path='/learning/lesson6' component={Learning6} />
            <Route path='/challenge/challenge1' component={Challenge1} />
            <Route path='/challenge/challenge2' component={Challenge2} />
            <Route path='/challenge/challenge3' component={Challenge3} />
            <Route path='/challenge/challenge4' component={Challenge4} />
            <Route path='/challenge/challenge5' component={Challenge5} />
            <Route path='/challenge/challenge6' component={Challenge6} />
            <Route path='/faq' component={Faq} />
        </Switch>
    )
}