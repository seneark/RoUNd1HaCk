import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Round1 from "./Views/Round1";
import Home from "./Views/home";
const Routes = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Round1" exact component={Round1}/>
        </Switch>
    );
};

export default Routes;
