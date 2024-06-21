import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";
import React, { useEffect, useState } from "react";
import '../../resources/css/Wish/ReviewBox.css'; // ReviewBox.css 파일 import
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyReviewBoxUpdate = () => {
    const { rvId } = useParams(); // URL 파라미터에서 rvId를 가져옵니다.
    const navigate = useNavigate();
    const [myReviewDetails, setMyReviewDetails] = useState(null); // 리뷰 상세 정보 상태
    const [starRating, setStarRating] = useState(0); // 초기 별점을 0으로 설정

    useEffect(() => {
        // rvId를 이용하여 리뷰 상세 정보를 가져오는 함수 호출
        fetchReviewDetailUpdate(rvId);
    }, [rvId]); // rvId가 변경될 때마다 useEffect가 실행됩니다.

    const fetchReviewDetailUpdate = (rvId) => {
        axios.get(`/wish/myReviewList/ReviewBoxDetail/${rvId}`)
            .then(response => {
                console.log("리뷰 상세 정보:", response.data); // 콘솔에 출력
                const data = response.data;
                setMyReviewDetails(data); // 상태 업데이트
                setStarRating(data.rvStar); // 별점 상태 업데이트
            })
            .catch(error => {
                console.error('Failed to fetch review detail:', error);
            });
    };

    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setMyReviewDetails(prevState => ({
            ...prevState,
            content: value
        }));
    };

    const gotoMyReviewBox = () => {
        const updatedReview = {
            rvId: rvId,
            content: myReviewDetails.content,
            rvStar: starRating
        };

        axios.post(`/wish/MyReviewBoxUpdate/${rvId}`, updatedReview)
            .then(response => {
                alert("수정이 완료되었습니다.");
                navigate(`/wish/myReviewList/ReviewBoxDetail/${rvId}`); // 템플릿 리터럴을 사용하여 변수를 포함한 URL로 이동
            })
            .catch(error => {
                console.error('Failed to update review:', error);
            });
    }

    // myReviewDetails가 null인 경우 로딩 중을 표시할 수 있습니다.
    if (!myReviewDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reviewbox_wrap">
            <img className="movie_img" src={myReviewDetails.mvImg} alt="Movie Poster"
            />
            <div className="moviewrite_btn">
                <button onClick={gotoMyReviewBox}>완료</button>
            </div>
            <div className="movie_name">
                <p>{myReviewDetails.mvTitle}</p>
            </div>
            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < starRating ? star : starN}
                        width={40}
                        height={40}
                        onClick={() => handleStarClick(index)}
                        alt="star"
                    />
                ))}
            </div>
            <div className="movie_review">
                <input
                    type="text"
                    value={myReviewDetails.content}
                    onChange={handleInputChange} // 입력값이 변경될 때마다 호출되는 이벤트 핸들러 추가
                />
            </div>
        </div>
    )
}

export default MyReviewBoxUpdate;
