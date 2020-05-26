import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./Project.scss";

import Nav from "../../components/Nav/Nav";

import Rally from "../Rally/Rally";
import TouchBase from "../TouchBase/TouchBase";
import Homediate from "../SharedSpace/SharedSpace";
import CUCOH from "../CUCOH/CUCOH";

const Project = () => {
    return (
        <>
            <Nav/>
            <Switch>
                <Route path="/project/cucoh" component={CUCOH} />
                <Route path="/project/rally" component={Rally} />
                <Route path="/project/touch-base" component={TouchBase} />
                <Route path="/project/homediate" component={Homediate}/>
                <Route path="/project" exact component={Rally} />
            </Switch>
        </>
    );
};

export default Project;