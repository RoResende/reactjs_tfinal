import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const Toolbar = (props) => {

    return (
        <BrowserRouter>
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="toolbar_toggle_button">
                        <DrawerToggleButton click={props.drawerClickHandler} />
                    </div>
                    <div className="toolbar_logo"><a href="/"><img className="umbreon_logo" alt="Toolbar" src={require('../pngegg.png')} /></a></div>
                    <div className="spacer" />
                    <div className="toolbar_navigation_items">
                        <ul>
                            <li><Link to='/' >Home</Link></li>
                            <li><Link to='/add' >Add </Link></li>
                            <li><Link to='/update' >Update</Link></li>
                            <li><Link to='/' >Delete</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </BrowserRouter>
    )
};

export default Toolbar;