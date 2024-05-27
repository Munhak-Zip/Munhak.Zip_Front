import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const SignUp=() =>{
    const [nickName, setnickName] = useState("");
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const [hint, setHint] = useState("");

    return (
        <div className={"signUp"}>
            <input type="text" placeholder={"닉네임"} value={nickName}/>
            <br/>
            <input type="text" placeholder={"ID"} value={userId}/>
            <br/>
            <input type="text" placeholder={"PW"} value={pw}/>
            <br/>
            <input type="text" placeholder={"부모님의 이름은?"} value={hint}/>
            <br/>
            <button className={"sign_up"}>회원가입</button>
        </div>
    );
}

export default SignUp;