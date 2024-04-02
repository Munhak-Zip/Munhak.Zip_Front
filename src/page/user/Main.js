import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Main=() =>{
    return (
        <div>
            메인입니당
            <Link to={"/login/minyoung"}>
                <button>민영</button>
            </Link>
            <Link to={"/movie/detail"}>
                <button>영화 상세</button>
            </Link>
            <Link to={"/main"}>
                <button>예진</button>
            </Link>
            <Link to={"/wish/reviewDetail"}>
                <button>리뷰페이지</button>
            </Link>
            <Link to={"/wish/myReviewDetail"}>
                <button>나의리뷰페이지</button>
            </Link>
        </div>
    );
}

export default Main;