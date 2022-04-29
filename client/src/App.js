import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import NavBar from "../src/component/NavBar";
import Routes from "./Routes";
import {FormattedMessage} from "react-intl";

function App({setLocale}) {
    return (
        <Router>
            <div className="App">
            <NavBar setLocale={setLocale}/>
            </div>
            <div>
                <FormattedMessage id = "hello"
                                  defaultMessage="Hello Hej 你好 "
                                  description="Check website"/>
            </div>
            <Routes/>
        </Router>

      );
}
export default App;

