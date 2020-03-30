import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Reusable Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Unqiue Pages
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";

import "./styles/baseline.scss";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    path="/project" 
                    component={Project} 
                />
                <Route 
                    path="/contact" 
                    component={Contact} 
                />
                <Route 
                    path="/about" 
                    component={About} 
                />
                <Route 
                    path="/" 
                    exact component={Main}
                />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
