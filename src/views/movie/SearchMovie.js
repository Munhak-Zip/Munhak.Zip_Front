import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../../resources/css/Movie/MovieList.css'
import Arrow from '../../resources/next.png'
import Poster from '../../resources/img/Main/sample1.png'
import Star from '../../resources/img/Movie/star.png'
import axios from 'axios';
import {searchResult} from 'react-router-dom';

import { useParams, useNavigate } from 'react-router-dom';


function renderMovies(movies, navigate) {
    return movies.map((movie) => (
        <div key={movie.mvId} className="movie" onClick={() => navigate(`/movie/${movie.mvId}`)}>
            <img src={movie.mvImg} alt={movie.mvTitle} className="Poster-img" />
            <p>
                {movie.mvTitle}<img src={Star} className="star" />({movie.mvStar})
            </p>
        </div>
    ));
}

function SearchMovie() {
    const navigate = useNavigate();
    const { mvTitle } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get(`/search/${mvTitle}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Failed to fetch search results:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSearchResults();
    }, [mvTitle]);

    if (isLoading) {
        return (
            <div className="div1">
            </div>
        );
    }

    return (
        <div className="div1">
            <div className="search-header">
                <img src={Arrow} className="Arrow" />
                <h2>검색된 영화 : "{mvTitle}"</h2>
            </div>
            <div className="movies-container">
                {renderMovies(searchResults, navigate)}
            </div>
        </div>
    );
}

export default SearchMovie;