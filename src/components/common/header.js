import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import menu from '../../resources/img/menu.png';

const header=() =>{
    return (
        <header>
            <div>
                <img src={menu} width={250} height={250}/>
            </div>
        </header>
    )
        ;
}

export default header;