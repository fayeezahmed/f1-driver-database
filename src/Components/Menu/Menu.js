import React, { useState } from 'react';
import { ReactComponent as BurgerMenu } from '../../Assets/burger_menu.svg';
import MenuList from './MenuList';
import './Menu.css';

function Menu(){
    const [showMenuList, setShowMenuList] = useState(false);

    function handleClick(){
        setShowMenuList(!showMenuList);
    }

    return ( 
        <div> 
            <button 
                data-testid="MENU"
                onClick={handleClick}
            >
                <BurgerMenu className="Menu" /> 
            </button>
            <MenuList activateMenu={showMenuList} /> 
        </div>
    )
}

export default Menu;
