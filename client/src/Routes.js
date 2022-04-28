import React from "react";
import {Route, Switch} from "react-router-dom";
// import NotFound from "./containers/NotFound";
import About from "./pages/About"
import Mainpage from "./pages/Mainpage";
import Setting from "./pages/Setting";
import Challenge from "./pages/Challenge";
import Learning from "./pages/Learning";
import Faq from "./pages/Faq";

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path='/about' component={About} />
            <Route path='/setting' component={Setting} />
            <Route path='/challenge' component={Challenge} />
            <Route path='/learning' component={Learning} />
            <Route path='/faq' component={Faq} />
        </Switch>
    )
}