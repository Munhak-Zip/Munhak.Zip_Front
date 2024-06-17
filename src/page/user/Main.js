import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Main=() =>{
    return (
        <div>
            <Link to={"/user/mypage"}>
                <button>민영</button>
            </Link>
            <Link to={"/movie/detail"}>
                <button>영화 상세</button>
            </Link>
            <Link to={"/main"}>
                <button>메인페이지</button>
            </Link>
            <Link to={"/movie/movieList"}>
                <button>좋아하는 영화 클릭 시 상세</button>
            </Link>
            <Link to={"/wish"}>
                <button>보관함 메인</button>
            </Link>
            <Link to={"/reserve"}>
                <button>예매</button>
            </Link>
            <Link to={"/wish/reviewDetail"}>
                <button>리뷰페이지</button>
            </Link>
            <Link to={"/wish/myReviewDetail"}>
                <button>나의리뷰페이지</button>
            </Link>
            <br />
            <Link to={"/login"}>
                <button>로그인</button>
            </Link>
            <Link to={"/findId"}>
                <button>아이디찾기</button>
            </Link>
            <Link to={"/findPw1"}>
                <button>비번찾기</button>
            </Link>
            <Link to={"/signUp"}>
                <button>회원가입</button>
            </Link>
             <Link to={"/firstCheckInterests"}>
                <button>첫취향선택</button>
             </Link>
            <Link to={"/login"}>
                <button>login</button>
            </Link>
        </div>
    );
}

export default Main;