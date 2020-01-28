import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from '../Search/Search';
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
        <Router>
            <nav>
                <ul 
                    className={"MenuList " + active}
                    data-testid="MENU_LIST"
                >
                    {menuListItems}
                </ul>        
            </nav>
            <Switch>
                <Route path="/driver_comparison">
                    <div data-testid="DriverComp"></div>
                </Route>
                <Route path="/driver_stats">
                    <Search />
                </Route>
            </Switch>
        </Router>
        
    )
}

export default MenuList;
