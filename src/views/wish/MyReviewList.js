import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import React, { useEffect, useState } from "react";
import '../../resources/css/Wish/ReviewDetail.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MyReviewList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [myReviewList, setMyReviewList] = useState(location.state || []);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
            fetchMyReviewList(storedUserId);
        } else {
            console.error('No user ID found in local storage');
        }
    }, []);

    const fetchMyReviewList = (userId) => {
        axios.get('/wish/myReviewList', { params: { userId: userId } })
            .then(response => {
                const myReviewsData = response.data.map(myReview => {
                    return {
                        ...myReview,
                        dateR: new Date(myReview.dateR).toLocaleDateString()
                    };
                });
                setMyReviewList(myReviewsData);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const handleReviewClick = (rvId) => {
        axios.get(`/wish/myReviewList/ReviewBoxDetail/${rvId}`)
            .then(response => {
                console.log("리뷰 상세 정보:", response.data); // 콘솔에 출력
                navigate(`/wish/myReviewList/ReviewBoxDetail/${rvId}`);
            })
            .catch(error => {
                console.error('Failed to fetch review detail:', error);
            });
    };

    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30} alt="back" />
                <span>나의 리뷰</span>
            </div>
            {myReviewList.map((review, idx) => (
                <div key={idx} className="critic" onClick={() => handleReviewClick(review.rvId)}>
                    <div className="star_critic">
                        {[...Array(review.rvStar)].map((_, i) => (
                            <img key={i} className="star_image" src={star} width={25} height={25} alt="star" />
                        ))}
                    </div>
                    <div className="critic_review_mid">
                        {review.mvTitle}
                    </div>
                    <div className="critic_review">
                        {review.content}{review.id}
                    </div>
                    <div className="horizontal-line"></div>
                </div>
            ))}
        </div>
    );
}

export default MyReviewList;
