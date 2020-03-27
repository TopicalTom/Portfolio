import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import "./styles/baseline.scss";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route 
                    path="/project/:id" 
                    component={Project} 
                />
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
        </BrowserRouter>
    );
}

export default App;
