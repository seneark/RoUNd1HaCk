import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Round1 from "./Views/Round1";
import Home from "./Views/home";
const Routes = (props) => {
    return (
        <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} component={Home}/>
            <Route path={process.env.PUBLIC_URL + "/Round1"} component={Round1}/>
        </Switch>
    );
};

export default Routes;
