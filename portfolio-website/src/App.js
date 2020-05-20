import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

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
        </BrowserRouter>
    );
}

export default App;
