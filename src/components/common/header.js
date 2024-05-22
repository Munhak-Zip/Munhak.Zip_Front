import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import menu from '../../resources/img/menu.png';
import '../../resources/css/Common/header.css';
import Sidebar from "./Sidebar";

const header=(props) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locationNow = useLocation();

    //안보여주고 싶은 화면
    if (locationNow.pathname === "/main") return null;
    return (
        <header className="header">
            <div className= "mobile">
                <div className="all">
                    <Sidebar width={320}> //원하는 width사이즈
                    </Sidebar>
                    {/*<img src={menu} width={50} height={50}/>*/}
                    <div className="title_style">
                        Movie.Zip
                    </div>
                    <div className="horizontal-line"></div>
                </div>
            </div>
        </header>
    );
}

export default header;