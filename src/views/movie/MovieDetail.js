import React from 'react';
import './MovieDetail.css'
import bookmark from './bookmark.png'
import movieImg from './Rectangle.png';
import star from './star.png';
import starN from './star_unclick.png';
import back from './back.png';
import {Link, useNavigate} from "react-router-dom";

const MovieDetail=() =>{
    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30}/>
            </div>
            <div className="bookmarkMovie">
                <img src={bookmark} width={50} height={50}/>
            </div>
            <div className="imgMovie">
                <img src={movieImg} width={200} height={200}/>
            </div>
            <div className="title">
                영화명
            </div>
            <div className="starGroup">
                <img className="star_image" src={star} width={30} height={30}/>
                <img className="star_image" src={star} width={30} height={30}/>
                <img className="star_image" src={star} width={30} height={30}/>
                <img className="star_image" src={star} width={30} height={30}/>
                <img className="star_image" src={star} width={30} height={30}/>
                <div className="star_text">
                    (5)
                </div>
            </div>
            <div className="movie_text">
                영화설명~~~~~~~~~~~~~~~~~~~~~<br/>
                영화설명~~~~~~~~~~
            </div>
            <div className="category">
                <div className="category_box">
                    <div className="category_text">
                        #스릴러
                    </div>
                </div>
                <div className="category_box">
                    <div className="category_text">
                        #로맨스
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MovieDetail;
