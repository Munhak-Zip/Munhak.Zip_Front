import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginDTO = {
            username: username,
            password: password,
        };

        try {
            console.log("사용자:", loginDTO.username);
            const response = await axios.post("http://localhost:8080/loginProc", loginDTO, {
                headers: {
                    'Content-Type': ' application/x-www-form-urlencoded',
                },
                withCredentials: true, // 쿠키 기반 인증 정보를 포함
            });
            if (response.status === 200) {
                navigate("/main");
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
                    name= "username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name= "password"
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
