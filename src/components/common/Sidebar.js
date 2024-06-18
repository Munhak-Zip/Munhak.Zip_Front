import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../../resources/css/Common/Sidebar.css';
import axiosInstance from '../../axiosConfig';
import axios from 'axios';

const Sidebar = ({width = 280, children, isLoggedIn}) => {
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(width);
    const side = useRef();

    const toggleMenu = async () => {
        if (xPosition > 0) {
            setX(0);
            setOpen(true);
        } else {
            setX(width);
            setOpen(false);
        }
    };

    const handleClose = async e => {
        let sideArea = side.current;
        let sideChildren = side.current.contains(e.target);
        if (isOpen && (!sideArea || !sideChildren)) {
            await setX(width);
            await setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    }, [isOpen, width]);

    const navigate = useNavigate();

    const goToMypage = () => {
        setX(width);
        setOpen(false);
        navigate("/user/mypage");
    };

    const goToLogout = () => {
        axios.post('/logout')
            .then(response => {
                console.log('로그아웃 성공');
                alert('로그아웃 성공');
                setX(width);
                setOpen(false);
                navigate("/login");
            })
            .catch(error => {
                console.error('로그아웃 오류:', error);
            });
    };

    const goToWish = () => {
        setX(width);
        setOpen(false);
        navigate("/wish/reviewDetail");
    };

    const goToSignup = () => {
        setX(width);
        setOpen(false);
        navigate("/signup");
    };
    const goToLogin = () => {
        setX(width);
        setOpen(false);
        navigate("/login")
    };


    return (
        <div className="container2">
            <div ref={side} className="sidebar2"
                 style={{width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)`}}>
                <button onClick={() => toggleMenu()} className="button2">
                    {isOpen ? (
                        <span className="close2">X</span>
                    ) : (
                        <div className="hamburger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    )}
                </button>

                <div className="content2">{children}</div>
                {isLoggedIn ? (
                    <>
                        <div className="sidebar-text2" onClick={goToWish}>
                            보관함
                        </div>
                        <br />
                        <div className="sidebar-text2" onClick={goToMypage}>
                            마이페이지
                        </div>
                        <br />
                        <div className="sidebar-text2" onClick={goToLogout}>
                            로그아웃
                        </div>
                    </>
                ) : (
                    <>
                        <div className="sidebar-text2" onClick={goToSignup}>
                            회원가입
                        </div>
                        <br />
                        <div className="sidebar-text2" onClick={goToLogin}>
                            로그인
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
