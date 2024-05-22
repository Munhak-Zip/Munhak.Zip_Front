import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import menu from '../../resources/img/menu.png';
import close from '../../resources/img/close.png';
import '../../resources/css/Common/header.css';
import Sidebar from "./Sidebar";

const Header=(props) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const locationNow = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false); // 사이드바 열림 상태 관리

    // 사이드바를 토글하는 함수
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    // close 이미지를 클릭하여 사이드바를 닫음
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    //안보여주고 싶은 화면
    if (locationNow.pathname === "/main") return null;
    return (
        <header className="header">
            <div className= "mobile">
                <div className="all">
                    <img src={menu} width={50} height={50} onClick={toggleSidebar}/>
                    <div className="title_style">
                        Movie.Zip
                    </div>
                    <div className="horizontal-line"></div>
                </div>
            </div>
            {/* 사이드바 상태에 따라 사이드바 컴포넌트 표시 여부 결정 */}
            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="close">
                        <img src={close} width={50} height={50} onClick={closeSidebar}/>
                    </div>
                    <div className="sidebar-text">
                        보관함
                    </div>
                    <br/>
                    d
                </div>
            )}
        </header>
    );
}

export default Header;