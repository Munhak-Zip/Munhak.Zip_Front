import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const FindID=() =>{
    const [nickName] = useState("");
    const [hint] = useState("");

    return(
        <div className={"findId"}>
            <input type="text" placeholder={"부모님의 이름은?"} value={hint}/>
            <br/>
            <button className={"find_id"}>ID찾기</button>
        </div>
    )
}
export default FindID;