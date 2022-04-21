import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from "./component/Navbar"
import logo from './logo.svg';
import './App.css';
import Mainpage from "./pages/Mainpage";
import Setting from "./pages/Setting";
import Navbar from "./component/Navbar";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { apiResponse: "" };
    // }
    //
    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }));
    // }
    //
    // componentWillMount() {
    //     this.callAPI();
    // }
    render() {
        return (
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //   </header>
            //   <p className="App-intro">{this.state.apiResponse}</p>
            // </div>
            //
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Mainpage/>} />
                    <Route path='setting' element={<Setting/>} />
                </Routes>
            </Router>
          );
    }
}
export default App;

