import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import home from '../pages/home';
import update from '../pages/update';

import Add from './pages/add'
import Home from './pages/home'
import Update from './pages/update'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/add" component={Add}/>
            <Route  path="/update" component={Update}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;