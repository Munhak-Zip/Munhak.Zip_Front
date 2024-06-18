import React, { useState } from 'react';
import '../../resources/css/User/FirstCheckIntertest.css';

const FirstCheckInterest = () => {
    const genre = ["한국영화", "SF", "코미디", "해외 영화", "판타지", "로맨스", "애니메이션", "드라마 장르", "스릴러", "액션", "영화", "호러", "다큐멘터리", "음악/뮤지컬", "단편영화"];
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreChange = (event) => {
        const { value } = event.target;
        setSelectedGenres((prevSelectedGenres) =>
            prevSelectedGenres.includes(value)
                ? prevSelectedGenres.filter((genre) => genre !== value)
                : [...prevSelectedGenres, value]
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("선택한 장르:", selectedGenres);
        // 여기에서 navigate 함수를 사용하여 다른 페이지로 이동할 수 있습니다.
    };

    return (
        <div className="firstCheckInterest">
            <div className="welcome_title">
                처음이시군요!
                <br />
                좋아하는 장르를 알려주시면 추천해드릴게요 :D
            </div>

            <div className="check_interest">
                <form onSubmit={handleSubmit}>
                    <div className="radio_btn">
                        {genre.map((p, index) => {
                            const radioId = `genre-${index}`;
                            return (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={radioId}
                                        value={p}
                                        onChange={handleGenreChange}
                                    />
                                    <label htmlFor={radioId}>{p}</label>
                                </div>
                            );
                        })}
                    </div>
                </form>
            </div>

            <button className="start_btn" onClick={handleSubmit}>
                시작하기
            </button>
        </div>
    );
}

export default FirstCheckInterest;
