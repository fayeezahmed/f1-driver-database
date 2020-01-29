import React from 'react';

import {
  Link
} from "react-router-dom";

import './MenuList.css';
import MenuItems from './MenuItems';

function MenuList(props) {
    const { activateMenu } = props;
    const active = activateMenu ? "MenuList-active" : ""

    const menuListItems = Object.keys(MenuItems)
            .map(item => <li key={item}> 
                            <Link to={`/${item.toLowerCase()}`}>{MenuItems[item]}</Link>
                         </li>)
    return (
        <>
            <nav>
                <ul 
                    className={"MenuList " + active}
                    data-testid="MENU_LIST"
                >
                    {menuListItems}
                </ul>        
            </nav>
            
       </> 
    )
}

export default MenuList;
