import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./Project.scss";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import Rally from "../Rally/Rally";
import TouchBase from "../TouchBase/TouchBase";
import SharedSpace from "../SharedSpace/SharedSpace";

const Project = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route path="/project/rally" component={Rally} />
                <Route path="/project/touch-base" component={TouchBase} />
                <Route path="/project/shared-space" component={SharedSpace}/>
                <Route path="/project" exact component={Rally} />
            </Switch>
        </>
    );
};

export default Project;