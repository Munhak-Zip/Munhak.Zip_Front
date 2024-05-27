import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const FirstCheckInterest=() => {
    const genre = ["한국영화", "SF", "코미디", "해외 영화", "판타지", "로맨스", "애니메이션", "드라마 장르", "스릴러", "액션", "영화", "호러", "다큐멘터리", "음악/뮤지컬", "단편영화"]
    const [changeToggle, setChangeToggle] = useState(false);

    return (
        <div className={"firstCheckInterest"}>
            <div className={"welcome_title"}>처음이시군요!
                <br/>
                좋아하는 장르를 알려주시면 추천해드릴게요 :D
            </div>

            <div className={"check_interest"}>
                <form>
                    <div className={"radio_btn"}>
                        {genre.map((p, index) => {
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
                    <button className={"start_btn"} id={"genre-change"}>시작하기</button>
                </form>
            </div>
        </div>


    );
}

export default FirstCheckInterest;