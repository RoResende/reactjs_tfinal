import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Add from '../pages/add/index'
import Home from '../pages/home/index'
import Update from '../pages/update/index'


const Routes = () => (
    
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/add" component={Add}/>
            <Route  path="/update" component={Update}/>
        </Switch>
    
)

export default Routes;