import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = props => {

    let drawerClasses = 'side_drawer';

    if (props.show) {
        drawerClasses = 'side_drawer open';
    }

    return (
        <BrowserRouter>
            <nav className={drawerClasses}>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/add' >Add </Link></li>
                    <li><Link to='/update' >Update</Link></li>
                    <li><Link to='/' >Delete</Link></li>
                </ul>
            </nav>
        </BrowserRouter>
    );
};

export default SideDrawer;