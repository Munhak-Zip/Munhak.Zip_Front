import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../../resources/css/Wish/WishReviewList.css'; // WishReviewList.css의 스타일 적용
import axios from 'axios';

const WishReviewList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [wishReviewList, setWishReviewList] = useState(location.state || []);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
            fetchWishReviewList(storedUserId);
        } else {
            console.error('No user ID found in local storage');
        }
    }, []);

    const fetchWishReviewList = (userId) => {
        axios.get('/wish/reviews', { params: { userId: userId } })
            .then(response => {
                const wishReviewData = response.data.map(review => ({
                    ...review,
                    dateR: new Date(review.dateR).toLocaleDateString()
                }));
                setWishReviewList(wishReviewData);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const goBack = () => {
        navigate('/wish');
    };

    const showMovieDetail = (mvId) => {
        navigate(`/movie/${mvId}`);
    };

    return (
        <div className="wr-mobile">
            <div className="wr-header">
                <div className="wr-back_img">
                    <img src={back} className="back-button" width={30} height={30} alt="back" onClick={goBack}/>
                </div>
                <span className="wr-review_title">좋아하는 리뷰</span>
            </div>
            {wishReviewList.map((review, idx) => (
                <div key={idx} className="wr-critic" onClick={() => showMovieDetail(review.mvId)}>
                    <div className="wr-critic_review_mid">
                        <span className="wr-movie_title">{review.mvTitle}</span>
                    </div>
                    <div className="wr-critic_review_writer">
                        {review.writer}
                    </div>
                    <div className="wr-star_critic">
                        {[...Array(review.rvStar)].map((_, i) => (
                            <img key={i} className="wr-star_image" src={star} width={25} height={25} alt="star"/>
                        ))}
                    </div>
                    <div className="wr-critic_review">
                        {review.content}
                    </div>
                    <div className="wr-horizontal-line"></div>
                </div>
            ))}
        </div>
    );
}

export default WishReviewList;
