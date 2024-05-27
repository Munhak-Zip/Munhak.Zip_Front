import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login=() =>{
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");

    return (
        <div className={"login"}>
            <input type="text" placeholder={"ID"} value={userId}/>
            <br />
            <input type="text" placeholder={"PW"} value={pw}/>
            <br />
            <Link to={"/main"}>
                <button>로그인</button>
            </Link>
            <br />
            <Link to={"/signUp"}>
                <button>회원가입</button>
            </Link>
            <Link to={"/findId"}>
                <button>ID찾기</button>
            </Link>
            <Link to={"/findPw1"}>
                <button>PW찾기</button>

    );
}

export default Login;
