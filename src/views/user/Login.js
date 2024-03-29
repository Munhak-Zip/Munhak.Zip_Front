import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login=() =>{
    return (
        <div className={"login"}>
            <div className={"Title"}>
                MOVIE.ZIP
            </div>
            <div className={"Id"}>
                ID
                <input className={"input"}/>
            </div>
            <div className={"Pw"}>
                PW
                <input className={"input"}/>
            </div>
            <Link to={"/login/minyoung"}>
                <button>민영</button>
            </Link>
        </div>
    );
}

export default Login;
