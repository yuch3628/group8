import React from "react";
import {Route, Switch} from "react-router-dom";
// import NotFound from "./containers/NotFound";
import About from "./pages/About"
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Challenge from "./pages/Challenge";
import Learning from "./pages/Learning";
import Learning1 from "./pages/Learning1";
import Learning2 from "./pages/Learning2";
import Learning3 from "./pages/Learning3";
import Learning4 from "./pages/Learning4";
import Learning5 from "./pages/Learning5";
import Learning6 from "./pages/Learning6";
import Faq from "./pages/Faq";
import Login from "./pages/Login";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/setting' component={Setting} />
            <Route path='/challenge' component={Challenge} />
            <Route exact path='/learning/alllesson' component={Learning} />
            <Route path='/learning/lesson1' component={Learning1} />
            <Route path='/learning/lesson2' component={Learning2} />
            <Route path='/learning/lesson3' component={Learning3} />
            <Route path='/learning/lesson4' component={Learning4} />
            <Route path='/learning/lesson5' component={Learning5} />
            <Route path='/learning/lesson6' component={Learning6} />
            <Route path='/faq' component={Faq} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}