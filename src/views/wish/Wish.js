import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../resources/css/Wish/Wish.css';
import Arrow from '../../resources/next.png';
import Star from '../../resources/img/Movie/star.png';

const Wish = () => {
    const navigate = useNavigate();
    const [currentMoviePage, setCurrentMoviePage] = useState(0);
    const [currentReviewPage, setCurrentReviewPage] = useState(0);
    const [currentMyReviewPage, setCurrentMyReviewPage] = useState(0);
    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [myReviews, setMyReviews] = useState([]);

    const moviesPerPage = 2;
    const reviewsPerPage = 2;
    const myReviewsPerPage = 2;

    useEffect(() => {
        axios.get('http://localhost:8080/wish/movies', { withCredentials: true })
            .then(response => {
                console.log('Wish movies:', response.data);
                setMovies(response.data);
            })
            .catch(error => console.error('Error fetching wish movies:', error));

        axios.get('http://localhost:8080/wish/reviews', { withCredentials: true })
            .then(response => {
                console.log('Wish reviews:', response.data);
                setReviews(response.data);
            })
            .catch(error => console.error('Error fetching wish reviews:', error));

        axios.get('http://localhost:8080/wish/myreviews', { withCredentials: true })
            .then(response => {
                console.log('My reviews:', response.data);
                setMyReviews(response.data);
            })
            .catch(error => console.error('Error fetching my reviews:', error));
    }, []);

    const showNextMovies = () => {
        if ((currentMoviePage + 1) * moviesPerPage < movies.length) {
            setCurrentMoviePage(currentMoviePage + 1);
        }
    };

    const showPreMovies = () => {
        if (currentMoviePage > 0) {
            setCurrentMoviePage(currentMoviePage - 1);
        }
    };

    const showNextReviews = () => {
        if ((currentReviewPage + 1) * reviewsPerPage < reviews.length) {
            setCurrentReviewPage(currentReviewPage + 1);
        }
    };

    const showPreReviews = () => {
        if (currentReviewPage > 0) {
            setCurrentReviewPage(currentReviewPage - 1);
        }
    };

    const showNextMyReviews = () => {
        if ((currentMyReviewPage + 1) * myReviewsPerPage < myReviews.length) {
            setCurrentMyReviewPage(currentMyReviewPage + 1);
        }
    };

    const showPreMyReviews = () => {
        if (currentMyReviewPage > 0) {
            setCurrentMyReviewPage(currentMyReviewPage - 1);
        }
    };

    const handleCategoryClick = (url) => {
        navigate(url);
    };

    const renderWishMovies = () => {
        const start = currentMoviePage * moviesPerPage;
        const end = start + moviesPerPage;
        const currentMovies = movies.slice(start, end);

        return currentMovies.map(movie => (
            <span key={movie.mvid} className="movie">
                <img src={movie.mvImg} alt={movie.title} className="Poster-img"/>
                <p>{movie.mvTitle}
                    <img src={Star} className="star"/>
                    ({movie.mvStar})</p>
            </span>
        ));
    };

    const renderWishReviews = () => {
        const start = currentReviewPage * reviewsPerPage;
        const end = start + reviewsPerPage;
        const currentReviews = reviews.slice(start, end);

        return currentReviews.map(review => (
            <span key={review.id} className="review">
                <img src={review.mvImg} alt={review.mvTitle} className="Poster-img"/>
                <p>{review.mvTitle}</p>
                <p>{review.writer}</p>
            </span>
        ));
    };

    const renderMyReviews = () => {
        const start = currentMyReviewPage * myReviewsPerPage;
        const end = start + myReviewsPerPage;
        const currentMyReviews = myReviews.slice(start, end);

        return currentMyReviews.map(review => (
            <span key={review.id} className="review">
                <img src={review.mvImg} alt={review.title} className="Poster-img"/>
                <p>{review.mvTitle}</p>
            </span>
        ));
    };

    function Category(props) {
        let content;
        let renderContent;
        let showPre;
        let showNext;
        if (props.type === "wishMovies") {
            content = "좋아하는 영화";
            renderContent = renderWishMovies;
            showPre = showPreMovies;
            showNext = showNextMovies;
        } else if (props.type === "wishReviews") {
            content = "좋아하는 리뷰";
            renderContent = renderWishReviews;
            showPre = showPreReviews;
            showNext = showNextReviews;
        } else {
            content = "내가 작성한 리뷰";
            renderContent = renderMyReviews;
            showPre = showPreMyReviews;
            showNext = showNextMyReviews;
        }
        return (
            <div className={props.type} onClick={() => handleCategoryClick(props.url)}>
                <div className="category-header">
                    <h2>{content}</h2>
                    <div className="navigation-buttons">
                        <img src={Arrow} className="before-button" alt="before" onClick={(e) => { e.stopPropagation(); showPre(); }} />
                        <img src={Arrow} className="next-button" alt="next" onClick={(e) => { e.stopPropagation(); showNext(); }} />
                    </div>
                </div>
                <div className="new-movies">
                    {renderContent()}
                </div>
            </div>
        );
    }

    return (
        <div className="div1">
            <Category type="wishMovies" url="/wish/wishMovieList" />
            <Category type="wishReviews" url="/wish/wishReviewList" />
            <Category type="myReviews" url="/wish/myReviewList" />
        </div>
    );
}

export default Wish;
