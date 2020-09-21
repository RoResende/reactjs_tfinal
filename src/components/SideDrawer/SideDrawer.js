import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {

    let drawerClasses= 'side_drawer';

    if(props.show){
        drawerClasses ='side_drawer open';
    }

 return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Add</a></li>
            <li><a href="/">Update</a></li>
            <li><a href="/">Delete</a></li>
        </ul>
    </nav>
 );
};

export default sideDrawer;