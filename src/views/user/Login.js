import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login=() =>{
    return (
        <div className={"login"}>
            <div className={"Title"}>
                MOVIE.ZIP
            </div>
            <div className={"Id"}>
                <input className={"input"}/>
            </div>
            <div className={"Pw"}>
                <input className={"input"}/>
            </div>
            <Link to={"/login/minyoung"}>
                <button>로그인</button>
            </Link>
        </div>
    );
}

export default Login;