
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const FindPW1=() =>{
    const [id] = useState("");

    return(
        <div className={"findPW1"}>
            <input type="text" placeholder={"ID"} value={id}/>
            <br/>
            <Link to={"/findPw2"}>
                <button>PW찾기</button>
            </Link>
        </div>
    )
}
export default FindPW1;