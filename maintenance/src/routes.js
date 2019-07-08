import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Basic from './Basic.js';

export default (
    <HashRouter>
        <Switch>
            <Route path = '/' component = {Basic} exact/>
        </Switch>
    </HashRouter>
)
