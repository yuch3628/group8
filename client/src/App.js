import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import NavBar from "./component/NavBar";
import Routes from "./Routes";

const getData = () => {
    fetch('http://localhost:9000/users',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
    //Suc
        console.log('data', data);
    }).catch(e =>{
        //Error
    });
}
function App({setLocale}) {
    getData();
    return (
        <Router>
            <div className="App">
            <NavBar setLocale={setLocale}/>
            </div>
            <Routes/>
        </Router>

      );
}
export default App;

