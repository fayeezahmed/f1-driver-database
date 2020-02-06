import React, { useState } from 'react';
import { ReactComponent as MenuSvg } from '../../Assets/burger_menu.svg';
import MenuList from './MenuList';
import './Menu.css';

function Menu(){
    const [showMenuList, setShowMenuList] = useState(false);

    function handleClick(e){
        setShowMenuList(!showMenuList);
    }

    return ( 
        <div> 
            <nav>
                <button 
                    data-testid="MENU"
                    onClick={handleClick}
                >
                    <MenuSvg className="Menu" /> 
                </button>
                <MenuList activateMenu={showMenuList} /> 
            </nav>
        </div>
    )
}

export default Menu;
