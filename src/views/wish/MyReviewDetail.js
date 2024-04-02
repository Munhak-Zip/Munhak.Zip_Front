import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";
import React from "react";
import '../../resources/css/Wish/ReviewDetail.css';

const MyReviewDetail=() =>{
    const reviews = {
        '영화명1': [
            {
                stars: 3,
                reviewTitle: '리뷰 소제목',
                reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
            }
        ],
        '영화명2': [
            {
                stars: 5,
                reviewTitle: '리뷰 소제목',
                reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
            }
        ],
        // 추가적인 영화 리뷰들...
    };

    return (

        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30}/>
                <span>나의 리뷰</span>
            </div>
            {Object.keys(reviews).map(movieTitle => (
                <div key={movieTitle}>
                    <div className="critic_title">
                        {movieTitle}
                    </div>

                    {/* 특정 영화명에 해당하는 리뷰들만 출력 */}
                    {reviews[movieTitle].map((review, idx) => (
                        <div key={idx} className="critic">
                            <div className="star_critic">
                                {Array.from({ length: review.stars }).map((_, i) => (
                                    <img key={i} className="star_image" src={star} width={25} height={25}/>
                                ))}
                                {Array.from({ length: 5 - review.stars }).map((_, i) => (
                                    <img key={review.stars + i} className="star_image" src={starN} width={25} height={25}/>
                                ))}
                            </div>

                            <div className="critic_review_mid">
                                {review.reviewTitle}
                            </div>
                            <div className="critic_review">
                                {review.reviewContent}
                            </div>
                            <div className="horizontal-line"></div>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    );
}

export default MyReviewDetail;