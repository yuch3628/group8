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
import Challenge from "./view/Challenge";
import Learning1 from "./view/Learning1";
import Learning2 from "./view/Learning2";
import Learning3 from "./view/Learning3";
import Learning4 from "./view/Learning4";
import Learning5 from "./view/Learning5";
import Learning6 from "./view/Learning6";



import Faq from "./view/Faq.js";

// Use react-router-dom to set the routes of each page
export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/challenge' component={Challenge} /> 
            <Route path='/learning/lesson1' component={Learning1} />
            <Route path='/learning/lesson2' component={Learning2} />
            <Route path='/learning/lesson3' component={Learning3} />
            <Route path='/learning/lesson4' component={Learning4} />
            <Route path='/learning/lesson5' component={Learning5} />
            <Route path='/learning/lesson6' component={Learning6} />
            <Route path='/faq' component={Faq} />
        </Switch>
    )
}