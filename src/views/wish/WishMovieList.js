import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Link 대신 useNavigate 사용
import '../../resources/css/Wish/WishMovieList.css';
import Arrow from '../../resources/next.png'; // 이전 페이지로 돌아가는 이미지 추가
import Star from '../../resources/img/Movie/star.png';

const WishMovieList = () => {
    const navigate = useNavigate();
    const [currentMoviePage, setCurrentMoviePage] = useState(0);
    const [movies, setMovies] = useState([]);

    const moviesPerPage = 4;

    useEffect(() => {
        axios.get('http://localhost:8080/wish/movies', { withCredentials: true })
            .then(response => {
                console.log('Wish movies:', response.data);
                setMovies(response.data);
            })
            .catch(error => console.error('Error fetching wish movies:', error));
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

    const renderWishMovies = () => {
        const start = currentMoviePage * moviesPerPage;
        const end = start + moviesPerPage;
        const currentMovies = movies.slice(start, end);

        return currentMovies.map(movie => (
            <span key={movie.mvId} className="movie">
                <img
                    src={movie.mvImg}
                    alt={movie.title}
                    className="Poster-img"
                    onClick={() => showMovies(movie.mvId)} // 수정된 부분
                />
                <p>
                    {movie.mvTitle}
                    <img src={Star} className="star" alt="star" />
                    ({movie.mvStar})
                </p>
            </span>
        ));
    };

    const showMovies = (mvId) => {
        navigate(`/movie/${mvId}`); // 영화 ID로 라우팅
    };

    const goBack = () => {
        navigate('/wish');
    };

    return (
        <div className="movie-list">
            <img src={Arrow} className="back-button" alt="back" onClick={goBack} /> {/* 이전 페이지로 돌아가는 버튼 */}

            <div className="category-header">
                <h2>좋아하는 영화</h2>
                <div className="navigation-buttons">
                    <img src={Arrow} className="before-button" alt="before" onClick={showPreMovies} />
                    <img src={Arrow} className="next-button" alt="next" onClick={showNextMovies} />
                </div>
            </div>
            <div className="new-movies">
                {renderWishMovies()}
            </div>
        </div>
    );
}

export default WishMovieList;

