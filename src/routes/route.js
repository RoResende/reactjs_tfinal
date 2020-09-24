import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Add from '../pages/add'
import Home from '../pages/home'
import Update from '../pages/update'
import Delete from '../pages/delete'
import Search from '../pages/search'


const Routes = () => (
    
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/delete" component={Delete}/>
            <Route  path="/add" component={Add}/>
            <Route  path="/search" component={Search}/>
            <Route  path={"/update/:id"} component={Update}/>
        </Switch>
    
)

export default Routes;