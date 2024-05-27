import React, {useState} from 'react';
import Mypage_css from "../../resources/css/Mypage/Mypage.css"


const Mypage = () => {

    const [changeToggle, setChangeToggle] = useState(false);

    //현재 비밀번호에서 변경하기 버튼 누르면 새 비밀번호 적는 칸 생기도록 구현
    const onClickChangebtn = () => {
        setChangeToggle(!changeToggle);
    }
    const ganre = ["한국영화", "SF", "코미디", "해외 영화", "판타지", "로맨스", "애니메이션", "드라마 장르", "스릴러", "액션", "영화", "호러", "다큐멘터리", "음악/뮤지컬", "단편영화"]

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
                        <button className={"change_btn"}>변경</button>
                    </div>
                    <div className={"article"}>
                        <div className={"index"} id={"id"}>아이디</div>
                        <input className={"input_info"} type={"text"}/>
                        <button className={"change_btn"}>변경</button>
                    </div>
                    <div className={"article"}>
                        <div className={"index"} id={"current_pw"}>현재비밀번호</div>
                        <input className={"input_info"} type={"text"}/>
                        <button className={"change_btn"} onClick={onClickChangebtn}>변경</button>
                    </div>
                    {/*변경하기 버튼 누르면 새비밀번호 나오게 구현 예정*/}

                    {changeToggle ?
                        <div>
                            <div className={"article"}>
                                <div className={"index"} id={"new_pw"}>새 비밀번호</div>
                                <input className={"input_info"} type={"text"} id={"new_pw-input"}/>
                            </div>
                            <div className={"article"}>
                                <div className={"index"} id={"check_new_pw"}>새 비밀번호 확인</div>
                                <input className={"input_info"} type={"text"}/>
                                <button className={"change_btn"}>변경</button>
                            </div>
                        </div>
                        : <div></div>}

                </div>

                <div className={"mypage-like"}>
                    <p>좋아하는 장르</p>
                    <form>
                        <div className={"radio_btn"}>
                            {ganre.map((p, index) => {
                                const radioId = `genre-${index}`;
                                return (
                                    <div key={index} id={"radio_btn"}>
                                        <input type="checkbox" id={radioId} value={p} name={p}/>
                                        <label htmlFor={radioId}>{p}</label>
                                    </div>
                                )

                            })
                            }
                        </div>
                        <button className={"change_btn"} id={"ganre-change"}>변경</button>
                    </form>
                </div>

                <div className={"reservation_info"}>
                   <table id={"reservation_info"}>
                       <tr>
                           <th>
                               영화명
                           </th>
                           <th>
                               관람일
                           </th>
                           <th>
                               좌석
                           </th>
                       </tr>
                       <tr>
                           <td colspan='3'>
                               <hr/>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               파묘
                           </td>
                           <td>
                               2024-03-22-11:44
                           </td>
                           <td>
                               A15
                           </td>
                       </tr>
                   </table>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Mypage;
