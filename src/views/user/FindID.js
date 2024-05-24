import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const FindID=() =>{
    const [nickName] = useState("");
    const [hint] = useState("");

    return(
        <div className={"findId"}>
            <h1>MOVIE.ZIP</h1>
            <input type="text" placeholder={"닉네임"} value={nickName}/>
            <br/>
            <input type="text" placeholder={"부모님의 이름은?"} value={hint}/>
            <br/>
            <button>ID찾기</button>
        </div>
    )
}
export default FindID;