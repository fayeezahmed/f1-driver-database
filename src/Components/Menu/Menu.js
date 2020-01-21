import React, { useState } from 'react';
import { ReactComponent as BurgerMenu } from '../../Assets/burger_menu.svg';
import './Menu.css';

function Menu(){
    const shouldShow=true;
    return ( 
        <div data-testid="MENU">
            <BurgerMenu className="Menu" /> 
        </div>
    )
}

export default Menu;
