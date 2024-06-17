import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../../axiosConfig';
import qs from 'qs'; // URL-encoded 형식으로 변환하기 위해 qs 라이브러리 사용

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

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
                navigate("/");
            } else {
                console.error("Error:", response.data);
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
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">로그인</button>
            </form>
            <br />
            <Link to="/signUp">
                <button>회원가입</button>
            </Link>
        </div>
    );
};

export default Login;
