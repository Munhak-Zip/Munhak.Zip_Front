import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../../axiosConfig';
import qs from 'qs'; // URL-encoded 형식으로 변환하기 위해 qs 라이브러리 사용
import axios from 'axios';
import '../../resources/css/User/Login.css';
import Modal from '../../components/Modal/Modal'
import Interest from '../../components/interest/Interest';
import Modalcss from '../../resources/css/Modal/Modal.css';
import Interestcss from '../../resources/css/Interest/interest.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [userid, setUserId] = useState();
    const [showModal, setShowModal] = useState(false); // Interest 모달 창 상태 추가

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axiosInstance.get("/auth-check", { withCredentials: true });
                if (response.data) {
                    alert("이미 로그인된 사용자입니다.");
                    navigate("/"); // Redirect to home or any other page
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
            }
        };
        checkAuthentication();
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginDTO = {
            username: username,
            password: password,
        };

        try {
            const response = await axiosInstance.post("/loginProc", qs.stringify(loginDTO), {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true, // 쿠키 기반 인증 정보를 포함
            });
            if (response.status === 200) {
               
                const userIdResponse = await axios.get('/getId');
                if (userIdResponse.status === 200) {
                    const userId = userIdResponse.data; // 서버에서 받은 userId
                    // alert(userId);

                    // userId를 사용해 Interest 존재 여부 확인
                    const interestResponse = await axios.post('/checkExistInterestById', { id: userId });

                    if (interestResponse.data) {
                        navigate("/");
                    } else {
                        setShowModal(true);
                    }
                } else {
                    console.error("Error fetching user ID:", userIdResponse.data);
                }
            } else {
                console.error("Error during login:", response.data);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID"
                    value={username}
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="PW"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">로그인</button>
            </form>
            <div className="links">
                <Link to="/signUp">회원가입</Link> | <Link to="/findId">ID 찾기</Link> | <Link to="/findPw1">PW 찾기</Link>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                {/* 모달 창 내용에 username과 userId 전달 */}
                <Interest/>
            </Modal>
        </div>
    );
};

export default Login;
