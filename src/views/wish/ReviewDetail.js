import React, {useState} from "react";
import '../../resources/css/Movie/MovieDetail.css';
import back from "../../resources/img/Movie/back.png";
import bookmark from "../../resources/img/Movie/bookmark.png";
import star from "../../resources/img/Movie/star.png";
import starN from "../../resources/img/Movie/star_unclick.png";

const ReviewDetail=() =>{
    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30}/>
                좋아하는 리뷰
            </div>

            <div className="critic_title">
                영화명
            </div>

            <div className="critic">
                <div className="critic_name">
                    이은선
                    <div className="star_critic">
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={starN} width={25} height={25}/>
                        <img className="star_image" src={starN} width={25} height={25}/>
                    </div>
                    <div className="bookmark_critic">
                        <img src={bookmark} width={35} height={35}/>
                    </div>
                </div>


                <div className="critic_review_mid">
                    리뷰 소제목
                </div>
                <div className="critic_review">
                    리뷰리뷰리뷰리뷰리뷰~
                </div>

                <div className="horizontal-line"></div>
            </div>
            <div className="critic">
                <div className="critic_name">
                    이은선
                    <div className="star_critic">
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={starN} width={25} height={25}/>
                        <img className="star_image" src={starN} width={25} height={25}/>
                    </div>
                    <div className="bookmark_critic">
                        <img src={bookmark} width={35} height={35}/>
                    </div>
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
                <div className="critic_name">
                    이은선
                    <div className="star_critic">
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={star} width={25} height={25}/>
                        <img className="star_image" src={starN} width={25} height={25}/>
                        <img className="star_image" src={starN} width={25} height={25}/>
                    </div>
                    <div className="bookmark_critic">
                        <img src={bookmark} width={35} height={35}/>
                    </div>
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

export default ReviewDetail;
