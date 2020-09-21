import React from 'react';

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"><img className="umbreon_logo" alt="Toolbar" src={require('../pngegg.png') }/></a></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href='/' >Home</a></li>
                    <li><a href='/add' >Add </a></li>
                    <li><a href='/update' >Update</a></li>
                    <li><a href='/' >Delete</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;