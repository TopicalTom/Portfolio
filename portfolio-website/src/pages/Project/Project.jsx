import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./Project.scss";

import Actions from "../../components/HeaderActions/HeaderActions";

import Rally from "../Rally/Rally";
import TouchBase from "../TouchBase/TouchBase";
import Homediate from "../SharedSpace/SharedSpace";
import CUCOH from "../CUCOH/CUCOH";
import Shop from "../Shop/Shop";

const Project = () => {
    return (
        <>
            <Actions />
            <Switch>
                <Route path="/project/cucoh" component={CUCOH} />
                <Route path="/project/rally" component={Rally} />
                <Route path="/project/touch-base" component={TouchBase} />
                <Route path="/project/homediate" component={Homediate}/>
                <Route path="/project/shop" component={Shop}/>
                <Route path="/project" exact component={Rally} />
            </Switch>
        </>
    );
};

export default Project;