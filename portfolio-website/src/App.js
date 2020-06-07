import React, {useState, useLayoutEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

// Reusable Components
import Header from "./components/Header/Header";
import Scroll from "./components/Scroll/Scroll";
import DynamicCards from "./components/DynamicCards/DynamicCards";
import Footer from "./components/Footer/Footer";

// Unqiue Pages
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";

import "./styles/baseline.scss";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <BrowserRouter>
            <Header />
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
                    path="/skills" 
                    component={Skills} 
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
            <DynamicCards/>
            <Scroll />
            <Footer/>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
