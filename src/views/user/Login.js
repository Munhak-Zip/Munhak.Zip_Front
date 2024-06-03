import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const handler = async () => {
        try {
            const response = await axios.post("http://localhost:8080/login", {
                ID: userId,  // 서버가 ID로 필드를 기대한다면 ID로 변경
                password: pw
            });
            console.log(response.data);  // 정상 통신 후 응답된 메시지 출력
            navigate("/main");  // 성공 시 메인 페이지로 이동
        } catch (error) {
            console.log(error);  // 오류 발생 시 실행
        }
    };

    return (
        <div className="login">
            <input
                type="text"
                placeholder="ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="PW"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <br />
            <button onClick={handler}>로그인</button>
            <br />
            <Link to="/signUp">
                <button>회원가입</button>
            </Link>
            <Link to="/findId">
                <button>ID찾기</button>
            </Link>
            <Link to="/findPw1">
                <button>PW찾기</button>
            </Link>
        </div>
    );
};

export default Login;
