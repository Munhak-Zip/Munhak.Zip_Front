import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login=() =>{
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");

    return (
        <div className={"login"}>
            <h1>MOVIE.ZIP</h1>
            <input type="text" placeholder={"ID"} value={userId}/>
            <br />
            <input type="text" placeholder={"PW"} value={pw}/>
            <br />
            <Link to={"/main"}>
                <button>로그인</button>
            </Link>
            <br />
            <Link to={"/signUp"}>
                회원가입
            </Link>
            <Link to={"/findId"}>
                ID찾기
            </Link>
            <Link to={"/findPw1"}>
                PW찾기
            </Link>
        </div>
    );
}

export default Login;