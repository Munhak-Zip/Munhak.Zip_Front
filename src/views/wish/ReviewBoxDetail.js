import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";
import React, { useState, useEffect } from "react";
import '../../resources/css/Wish/ReviewBox.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReviewBoxDetail = () => {
    const { rvId } = useParams(); // URL 파라미터에서 rvId를 가져옵니다.
    const navigate = useNavigate(); // 프로그래밍 방식으로 라우팅을 위한 hook
    const [myReviewDetails, setMyReviewDetails] = useState(null); // 리뷰 상세 정보 상태
    const [starRating, setStarRating] = useState(0); // 초기 별점을 0으로 설정

    useEffect(() => {
        // rvId를 이용하여 리뷰 상세 정보를 가져오는 함수 호출
        fetchReviewDetail(rvId);
    }, [rvId]); // rvId가 변경될 때마다 useEffect가 실행됩니다.

    // rvId에 해당하는 리뷰 상세 정보를 가져오는 함수
    const fetchReviewDetail = (rvId) => {
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

    // 별점 클릭 시 상태 업데이트
    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    // 리뷰 수정 페이지로 이동
    const goToUpdateMyReviewBox = () => {
        navigate(`/wish/MyReviewBoxUpdate/${rvId}`); // 수정 페이지 경로로 이동, rvId를 포함합니다.
    };

    // 리뷰 삭제 알림 및 페이지 이동
    const deleteMyReviewBox = () => {
        alert("삭제 완료되었습니다.");
        navigate("/wish/ReviewBoxDetail"); // 삭제 후 목록 페이지로 이동
    };

    // myReviewDetails가 null인 경우 로딩 중을 표시할 수 있습니다.
    if (!myReviewDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reviewbox_wrap">
            <img className="movie_img" src={myReviewDetails.mvImg} alt="Movie Poster"
            />
            <div className="moviewrite_btn">
                <button onClick={goToUpdateMyReviewBox}>수정</button>
                <button onClick={deleteMyReviewBox}>삭제</button>
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
                        width={30}
                        height={30}
                        onClick={() => handleStarClick(index)}
                        alt="star"
                    />
                ))}
                <div className="star_text">
                    ({starRating})
                </div>
            </div>

            <div className="movie_review">
                <p>{myReviewDetails.content}</p>
            </div>
        </div>
    );
}

export default ReviewBoxDetail;
