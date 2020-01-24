import React from 'react';
import './MenuList.css';
import MenuItems from './MenuItems';

function MenuList(props) {
    const { activateMenu } = props;
    const active = activateMenu ? "MenuList-active" : ""

    const menuListItems = Object.keys(MenuItems)
            .map(item => <li key={item}> {MenuItems[item]} </li>)

    return (
        <ul 
            className={"MenuList " + active}
            data-testid="MENU_LIST"
        >
            {menuListItems}
        </ul>
    )
}

export default MenuList;
