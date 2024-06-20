import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";
import React, {useState} from "react";
import '../../resources/css/Wish/ReviewBox.css';
import { useParams, useNavigate } from 'react-router-dom';
const MyReviewBoxUpdate = () => {
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieImage, setMovieImage] = useState('');
    const [starRating, setStarRating] = useState(0); // 초기 별점을 0으로 설정

    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    const gotoMyReviewBox =()=>{
        alert("수정이 완료되었습니다.")
        navigate("/wish/ReviewBoxDetail");
    }
    return (
        <div className={"reviewbox_wrap"}>
            <div class={"movie_img"}>
                <img></img>
            </div>
            <div className={"moviewrite_btn"}>
                <button onClick={()=>gotoMyReviewBox()}>완료</button>
               
            </div>
            <div class={"movie_name"}>
                <p>영화명</p>
            </div>
            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < starRating ? star : starN} // 현재 별점 상태에 따라 이미지 소스를 선택
                        width={40}
                        height={40}
                        onClick={() => handleStarClick(index)} // 별 클릭 시 이벤트 핸들러 호출
                    />
                ))}
            </div>

            <div class={"movie_review"}>
                <input type="text"/>
                <p>영화리뷰 음 좋았음 음 재밌었음</p>
            </div>
        </div>
    )
}

export default MyReviewBoxUpdate;