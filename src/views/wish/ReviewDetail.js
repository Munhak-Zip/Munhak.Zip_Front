import React, {useState} from "react";
import '../../resources/css/Movie/MovieDetail.css';
import back from "../../resources/img/Movie/back.png";
import bookmark from "../../resources/img/Movie/bookmark.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";

const ReviewDetail=() =>{
    const reviews = {
        '영화명1': [
            {
                criticName: '이은선',
                stars: 3,
                reviewTitle: '리뷰 소제목',
                reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
            },
            {
                criticName: '박예린',
                stars: 2,
                reviewTitle: '리뷰 소제목',
                reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
            },
            // 추가적인 리뷰 데이터들...
        ],
        '영화명2': [
            {
                criticName: '이은선',
                stars: 5,
                reviewTitle: '리뷰 소제목',
                reviewContent: '리뷰리뷰리뷰리뷰리뷰~',
            },
        ],
        // 추가적인 영화 리뷰들...
    };

    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30}/>
                좋아하는 리뷰
            </div>

            {/* 각 영화별 리뷰를 출력 */}
            {Object.keys(reviews).map(movieTitle => (
                <div key={movieTitle}>
                    <div className="critic_title">
                        {movieTitle}
                    </div>

                    {/* 특정 영화명에 해당하는 리뷰들만 출력 */}
                    {reviews[movieTitle].map((review, idx) => (
                        <div key={idx} className="critic">
                            <div className="critic_name">
                                {review.criticName}
                                <div className="star_critic">
                                    {Array.from({ length: review.stars }).map((_, i) => (
                                        <img key={i} className="star_image" src={star} width={25} height={25}/>
                                    ))}
                                    {Array.from({ length: 5 - review.stars }).map((_, i) => (
                                        <img key={review.stars + i} className="star_image" src={starN} width={25} height={25}/>
                                    ))}
                                </div>
                                <div className="bookmark_critic">
                                    <img src={bookmark} width={35} height={35}/>
                                </div>
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

export default ReviewDetail;
