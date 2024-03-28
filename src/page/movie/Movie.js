import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Movie=() =>{
    return (
        <div>
            로그인 컴포넌트 JSX 코드
            <Link to={"/login/minyoung"}>
                <button>민영</button>
            </Link>
        </div>
    );
}

export default Movie;
