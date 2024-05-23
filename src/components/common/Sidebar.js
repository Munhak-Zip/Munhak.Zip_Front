import React, {useEffect, useRef, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import '../../resources/css/Common/Sidebar.css';
import menu from '../../resources/img/menu.png';

const Sidebar = ({ width=280, children }) => {
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(width);
    const side = useRef();

    // button 클릭 시 토글
    const toggleMenu = () => {
        if (xPosition > 0) {
            setX(0);
            setOpen(true);
        } else {
            setX(width);
            setOpen(false);
        }
    };

    // 사이드바 외부 클릭시 닫히는 함수
    const handleClose = async e => {
        let sideArea = side.current;
        let sideCildren = side.current.contains(e.target);
        if (isOpen && (!sideArea || !sideCildren)) {
            await setX(width);
            await setOpen(false);
        }
    }

    useEffect(()=> {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    })

    const navigate = useNavigate();
    const goToMypage = () => {
        navigate("/user/mypage");
    }
    const goToLogout = () => {
        navigate("/Logout");

    }
    const goToWish = () => {
        navigate("/wish/reviewDetail"); //링크 추후에 변경...
    }


    return (
        <div className="container2">
            <div ref={side} className="sidebar2"
                 style={{width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)`}}>
                <button onClick={() => toggleMenu()}
                        className="button2">
                    {isOpen ?
                        <span className="close2">X</span> :
                        <img src={menu} alr="contact open button" className="openBtn2"/>
                    }
                </button>

                <div className="content2">{children}</div>
                <div className="sidebar-text2" onClick={goToWish}>
                    보관함
                </div>
                <br/>
                <div className="sidebar-text2" onClick={goToMypage}>
                    마이페이지
                </div>
                <br/>
                <div className="sidebar-text2" onClick={goToLogout}>
                    로그아웃
                </div>
            </div>
        </div>
    );
};


export default Sidebar;
