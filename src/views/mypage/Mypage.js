
import React from 'react';
import Mypage_css from "../../resources/css/Mypage/Mypage.css"

 const Mypage=() =>{
    return (
        <div className={"wrap"}>
            <div className={"header"}>
                헤더
            </div>
        <div className={"content_wrap"}>
            <div className={"views_name"}>
                    마이페이지
            </div>
            <div className={"mypage-userinfo"}>
                <div className={"article"}>
                    <div className={"index"} id={"nickname"}>닉네임</div>
                    <input className={"input_info"} type={"text"}/>
                    <button className={"change_btn"}>변경하기</button>
                </div>
                <div className={"article"}>
                    <div className={"index"} id={"nickname"}>아이디</div>
                    <input className={"input_info"} type={"text"}/>
                    <button className={"change_btn"}>변경하기</button>
                </div>
                <div className={"article"}>
                    <div className={"index"} id={"nickname"}>현재비밀번호</div>
                    <input className={"input_info"} type={"text"}/>
                    <button className={"change_btn"}>변경하기</button>
                </div>
                {/*변경하기 버튼 누르면 새비밀번호 나오게 구현 예정*/}
                <div className={"article"}>
                    <div className={"index"} id={"nickname"}>새 비밀번호</div>
                    <input className={"input_info"} type={"text"}/>
                </div>
                <div className={"article"}>
                    <div className={"index"} id={"nickname"}>새 비밀번호 확인</div>
                    <input className={"input_info"} type={"text"}/>
                    <button className={"change_btn"}>변경하기</button>
                </div>
            </div>

            <div className={"mypage-like"}>
               좋아하는 장르
            </div>

            <div className={"reservation_info"}>
            예약 내역
            </div>
            안녕하세요, 민영입니다.
            예시 코드입니다.
            마이페이지입니다.
        </div>
        </div>
    );
}

export default Mypage;
