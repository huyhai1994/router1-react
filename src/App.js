import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import React from "react";
import Contract from "./components/Contract";

function App() {
    return (<div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contract/>}/>
        </Routes>
    </div>);
}

export default App;
