import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";
import React, {useState} from "react";
import '../../resources/css/Wish/ReviewBox.css';
import { useParams, useNavigate } from 'react-router-dom';
const ReviewBoxDetail = () => {
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieImage, setMovieImage] = useState('');
    const [starRating, setStarRating] = useState(0); // 초기 별점을 0으로 설정

    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    const gotoupdateMyReviewBox =()=>{
        navigate("/wish/MyReviewBoxUpdate");
    }
    const deleteMyReviewBox=()=>{
        alert("삭제 완료되었습니다.");
        navigate("/wish/ReviewBoxDetail");
    }



    return (
        <div className={"reviewbox_wrap"}>
            <div class={"movie_img"}>
                <img></img>
            </div>
            <div className={"moviewrite_btn"}>
                <button onClick={() => gotoupdateMyReviewBox()}>수정</button>
                <button onClick={() => deleteMyReviewBox()}>삭제</button>
            </div>
            <div class={"movie_name"}>
                <p>영화명</p>
            </div>

            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < movieDetails ? star : starN} // movieDetails.mvStar를 사용하여 별점을 렌더링
                        width={30}
                        height={30}
                    />
                ))}
                <div className="star_text">
                    ({movieDetails})
                </div>
            </div>

            <div class={"movie_review"}>
                <p>영화리뷰 음 좋았음 음 재밌었음</p>
            </div>
        </div>
    )
}

export default ReviewBoxDetail;