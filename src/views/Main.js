import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Main=() =>{
    return (
        <div>
            메인입니당
            <Link to={"/login"}>
                <button>login</button>
            </Link>
        </div>

    );
}

export default Main;