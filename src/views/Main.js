// @ts-ignore
import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import '../resources/css/Main/Main.css'
import Next from '../resources/next.png'
import Star from '../resources/img/Movie/star.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    console.log('props', props, props.title);
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={'/read/' + t.id}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode(Number(event.target.id));
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }
    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    const navigate = useNavigate();
    const [mode, setMode] = useState('WELCOME');
    const [search, setSearch] = useState('');
    const [moviesIndex, setMoviesIndex] = useState(0);
    const [id, setId] = useState(null);
    const [recommendationResults, setRecommendationResults] = useState([]);

    const topics = [
        { id: 1, title: '보관함', body: 'wish is...' },
        { id: 2, title: '마이페이지', body: 'myPage...' },
        { id: 3, title: '로그아웃', body: 'logOut...' },
    ];

    const onChange = (event) => {
        setSearch(event.target.value);
    };

    const fetchRecommendations = () => {
        const userId = 3; // 예시로 사용자 ID를 지정
        axios
            .get('/main/recommend', {
                params: {
                    userId: userId,
                },
            })
            .then((response) => {
                const recommendationResults = response.data;
                setRecommendationResults(recommendationResults);
            })
            .catch((error) => {
                console.error('Request failed:', error);
            });
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);

    const renderMovies = (movies) => {
        return movies.map((movie) => (
            <span key={movie.mvId} className="movie">
                <img src={movie.mvImg} alt={movie.mvTitle} className="Poster-img" onClick={() => showMovies(movie.mvId)}/>
                <p>
                    {movie.mvTitle}
                    <img src={Star} className="star" />
                    ({movie.mvStar})
                </p>
            </span>
        ));
    };

    const showMovies = (mvId) => {
        axios
            .get(`/movie/${mvId}`) // 경로 변수를 사용하여 mvId 전달
            .then((response) => {
                // 서버 응답에 따른 처리
                const movieDetails = response.data;
                // 예를 들어, 응답 데이터를 통해 상세 페이지로 이동
                navigate(`/movie/${mvId}`, { state: movieDetails });
            })
            .catch((error) => {
                console.error('Request failed:', error);
            });
    };
    
    function Movies(props) {
        let content;
        if (props.type === 'new') {
            content = '최신영화';
        } else if (props.type === 'recommend') {
            content = '추천영화';
        } else {
            content = '보관함';
        }
        return (
            <div className={props.type}>
                {content}
                <img src={Next} className="next-button" alt="next" />
                <div className="new-movies">{renderMovies(props.movies)}</div>
            </div>
        );
    }

    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, MOVIE.ZIP" />;
    } else if (mode === 'READ') {
        let title,
            body = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body} />;
    }

    return (
        <div className="div1">
            <input type="text" placeholder="검색하기" value={search} onChange={onChange} />
            <input type="button" value="검색" onClick={() => { /* 검색 기능 구현 */ }} />
            추천 영화 :
            <ul>
                {recommendationResults.map((result, index) => (
                    <li key={index}> {result.mvTitle} - {result.mvStar}</li>
                ))}
            </ul>
            <p />
            <Movies type="new" movies={[]} showMovies={() => { /* showMovies 함수 구현 */ }} />
            <Movies type="recommend" movies={recommendationResults}
            />
            <Movies type="wish" movies={[]} showMovies={() => { /* showMovies 함수 구현 */ }} />
        </div>
    );
}

export default App;