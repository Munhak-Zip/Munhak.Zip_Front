import React from 'react';
import './MovieDetail.css'
import bookmark from './bookmark.png'
import movieImg from './Rectangle.png';
import {Link, useNavigate} from "react-router-dom";

const MovieDetail=() =>{
    return (
        <div>
            <div className="bookmarkMovie">
                <img src={bookmark} width={50} height={50}/>
            </div>
            <div className="imgMovie">
                <img src={movieImg} width={200} height={200}/>
            </div>
            <div className="title">
                영화명
            </div>
        </div>
    );
}

export default MovieDetail;
