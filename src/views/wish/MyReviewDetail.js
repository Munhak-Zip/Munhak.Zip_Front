import back from "../../resources/img/Movie/back.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";
import React from "react";
import '../../resources/css/Wish/ReviewDetail.css';

const MyReviewDetail=() =>{
    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30}/>
                나의 리뷰
            </div>

            <div className="critic_title">
                영화명
            </div>

            <div className="critic">
                <div className="star_critic">
                    <img className="star_image" src={star} width={25} height={25}/>
                    <img className="star_image" src={star} width={25} height={25}/>
                    <img className="star_image" src={star} width={25} height={25}/>
                    <img className="star_image" src={starN} width={25} height={25}/>
                    <img className="star_image" src={starN} width={25} height={25}/>
                </div>

                <div className="critic_review_mid">
                    리뷰 소제목
                </div>
                <div className="critic_review">
                    리뷰리뷰리뷰리뷰리뷰~
                </div>
                <div className="horizontal-line"></div>
            </div>


            <div className="critic_title">
                영화명
            </div>

            <div className="critic">
                <div className="star_critic">
                    <img className="star_image" src={star} width={25} height={25}/>
                    <img className="star_image" src={star} width={25} height={25}/>
                    <img className="star_image" src={star} width={25} height={25}/>
                    <img className="star_image" src={starN} width={25} height={25}/>
                    <img className="star_image" src={starN} width={25} height={25}/>
                </div>

                <div className="critic_review_mid">
                    리뷰 소제목
                </div>
                <div className="critic_review">
                    리뷰리뷰리뷰리뷰리뷰~
                </div>
                <div className="horizontal-line"></div>
            </div>

        </div>
    );
}

export default MyReviewDetail;