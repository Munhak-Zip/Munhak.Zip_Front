
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const FindPW2=() =>{
    const [pw] = useState("");

    return(
        <div className={"findPW1"}>
            <input type="text" placeholder={"PW"} value={pw}/>
            <br/>
            <button>PW변경</button>
        </div>
    )
}
export default FindPW2;