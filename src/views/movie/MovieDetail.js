import React, { useState, useEffect } from 'react';
import '../../resources/css/Movie/MovieDetail.css';
import bookmark from '../../resources/img/Movie/bookmark.png';
import bookmarkC from '../../resources/img/Movie/bookmarkC.png'; // New bookmarked icon for movie
import bookmarkCritic from '../../resources/img/Movie/bookmarkC.png'; // New bookmarked icon for critic review
import star from '../../resources/img/Movie/star.png';
import starN from '../../resources/img/Movie/star_unclick.png';
import back from '../../resources/img/Movie/back.png';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
    const navigate = useNavigate();
    const { mvId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [starRating, setStarRating] = useState(0); // Initial star rating set to 0
    const [isGoodClicked, setIsGoodClicked] = useState(true);
    const [isBadClicked, setIsBadClicked] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [critics, setCritics] = useState([]); // State to store critic reviews
    const [isMovieBookmarked, setIsMovieBookmarked] = useState(false); // State to manage movie bookmark
    const [isCriticBookmarked, setIsCriticBookmarked] = useState(false); // State to manage critic bookmark

    useEffect(() => {
        // Fetch movie details
        axios.get(`/movie/${mvId}`)
            .then(response => {
                const movieData = response.data;
                movieData.openDate = movieData.openDate.split(' ')[0]; // Remove time from openDate
                setMovieDetails(movieData);
                setIsMovieBookmarked(movieData.isBookmarked); // Example logic for movie bookmark
            })
            .catch(error => {
                console.error('Request failed:', error);
            });

        // Fetch critic reviews
        axios.get(`/movie/${mvId}/critics`)
            .then(response => {
                setCritics(response.data); // Store critic reviews in state
            })
            .catch(error => {
                console.error('Failed to fetch critic reviews:', error);
            });
    }, [mvId]);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        axios.get(`/movie/${mvId}/wish?userId=${userId}`)
            .then(response => {
                const ch = response.data;
                setIsMovieBookmarked(ch === 1); // 1일 경우 북마크된 상태로 설정
            })
            .catch(error => {
                console.error('Failed to fetch bookmark status:', error);
            });
    }, [mvId]);

    const handleReviewChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleStarClick = (index) => {
        setStarRating(index + 1);
    };

    const handleGoodClick = () => {
        setIsGoodClicked(true);
        setIsBadClicked(false);
    };

    const handleBadClick = () => {
        setIsGoodClicked(false);
        setIsBadClicked(true);
    };

    const handleReviewSubmit = () => {
        axios.post(`/movie/${mvId}/regReview`, {
            rvStar: starRating,
            mvTitle: movieDetails.mvTitle,
            content: reviewText,
            is_Critic: "N",
            mvId: mvId
        })
            .then(response => {
                alert('Review submitted successfully.');
                console.log('Review submitted successfully.');
            })
            .catch(error => {
                alert("Error submitting review.");
                console.error('Error submitting review:', error);
            });
    };

    const showReserve = () => {
        navigate(`/movie/showReserveForm/${mvId}`, { state: movieDetails });
    };

    const toggleBookmark = () => {
        const userId = localStorage.getItem('userId');
        const endpoint = isMovieBookmarked ? `movie/${mvId}/wish/delete` : `movie/${mvId}/wish/add`;

        axios.get(`/${endpoint}?userId=${userId}`)
            .then(response => {
                const ch = response.data;
                setIsMovieBookmarked(ch === 1);
            })
            .catch(error => {
                console.error('Toggle bookmark failed:', error);
            });
    };

    const Critic = ({ name, stars, reviewTitle, reviewContent }) => {
        const renderStars = (count, totalStars) => {
            const starImages = [];
            for (let i = 0; i < totalStars; i++) {
                starImages.push(
                    <img
                        key={i}
                        className="star_image"
                        src={i < count ? star : starN}
                        width={25}
                        height={25}
                    />
                );
            }
            return starImages;
        };

        return (
            <div className="critic">
                <div className="critic_name">
                    {name}
                    <div className="star_critic">
                        {renderStars(stars, 5)}
                    </div>
                    <div className="bookmark_critic">
                        <img src={isCriticBookmarked ? bookmarkCritic : bookmark} width={35} height={35} onClick={() => setIsCriticBookmarked(!isCriticBookmarked)} />
                    </div>
                </div>
                <div className="critic_review_mid">
                    {reviewTitle}
                </div>
                <div className="critic_review">
                    {reviewContent}
                </div>
                <div className="horizontal-line"></div>
            </div>
        );
    };

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mobile">
            <div className="back_img">
                <img src={back} width={30} height={30} alt="Back" onClick={() => navigate(-1)} />
            </div>
            <div className="bookmarkMovie">
                <img
                    src={isMovieBookmarked ? bookmarkC : bookmark}
                    width={45}
                    height={45}
                    alt="Bookmark"
                    onClick={toggleBookmark}
                />
            </div>
            <div className="imgMovie">
                <img src={movieDetails.mvImg} width={250} height={350} alt={movieDetails.mvTitle} />
            </div>
            <div className="title">
                {movieDetails.mvTitle}
            </div>
            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < movieDetails.mvStar ? star : starN}
                        width={30}
                        height={30}
                    />
                ))}
                <div className="star_text">
                    ({movieDetails.mvStar})
                </div>
            </div>
            <div className="movie_text">
                {movieDetails.mvDetail}
            </div>
            <div className="category">
                <div className="category_box">
                    <div className="category_text">
                        #{movieDetails.genre2}
                    </div>
                </div>
                <div className="category_box">
                    <div className="category_text">
                        #{movieDetails.openDate}
                    </div>
                </div>
                <div className="category_box">
                    <div className="category_text">
                        #{movieDetails.mvDirector}
                    </div>
                </div>
            </div>
            <button className="reservation_btn" onClick={showReserve}>예매하기</button>

            <div className="starGroup">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        className="star_image"
                        src={index < starRating ? star : starN}
                        width={40}
                        height={40}
                        onClick={() => handleStarClick(index)}
                    />
                ))}
            </div>
            <input className="review_text" type="text" placeholder="리뷰를 작성해주세요" value={reviewText} onChange={handleReviewChange} />
            <button className="review_btn" onClick={handleReviewSubmit}>작성</button>
            <div className="expect">
                평점요약
            </div>
            <button className={isGoodClicked ? "btn_good" : "btn_good_not"} onClick={handleGoodClick}>높은 평점</button>
            <button className={isBadClicked ? "btn_bad" : "btn_bad_not"} onClick={handleBadClick}>낮은 평점</button>
            <div className="expect_box">
                <b className="expect_text">ㅇㅇ님은 이거 이거 좋아해서 영화명은 3점일것입니다~</b>
            </div>
            <div className="critic_title">
                평론가 리뷰
            </div>
            {critics.map((critic, index) => (
                <Critic
                    key={index}
                    name={critic.writer}
                    stars={critic.rvStar}
                    reviewTitle={critic.rvTitle}
                    reviewContent={critic.content}
                />
            ))}
        </div>
    );
}

export default MovieDetail;