import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../resources/css/Main/Main.css';
import Next from '../resources/next.png';
import Star from '../resources/img/Movie/star.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

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

function Loading() {
    const loadingStyle = {
        margin: '20px 0', // 위아래 여백 추가
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px', // 로딩 스피너 컨테이너의 높이
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // 배경색 설정
        borderRadius: '8px', // 모서리 둥글기
    };

    return (
        <div className="loading-spinner" style={loadingStyle}>
            <Oval
                color="#D1003F"
                height={70}
                width={70}
                strokeWidth={3}
            />
        </div>
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
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

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
            })
            .finally(() => {
                setIsLoading(false); // 데이터 요청 완료 시 로딩 상태 해제
            });
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);


    const renderMovies = (movies) => {
        return movies.map((movie) => (
            <span key={movie.mvId} className="movie">
                <img src={movie.mvImg} alt={movie.mvTitle} className="Poster-img" onClick={() => showMovies(movie.mvId)} />
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
                const movieDetails = response.data;
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
                <div className="new-movies">
                    {props.isLoading && props.type === 'recommend' ? <Loading /> : renderMovies(props.movies)}
                </div>
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

    const [username, setUserName] = useState('');
    const [userid, setUserId] = useState();

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await axios.get('/user-id', { withCredentials: true });
                setUserName(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUsername();
    }, []);
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await axios.get('/getId');
                const userIdFromApi = response.data;
                setUserId(userIdFromApi);
                console.log('User ID:', userIdFromApi);
                localStorage.setItem('userId', userIdFromApi); // 로컬 스토리지에 사용자 아이디 저장
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, []);
    const fetchUserIdByUsername = async () => {
        try {
            if (username) {
                const response = await axios.post('/getUserIdByUsername', { username: username }, { withCredentials: true });
                setUserId(response.data);
                console.log('User ID:', response.data);
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    };


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
            <Movies type="new" movies={[]} isLoading={isLoading} showMovies={() => { /* showMovies 함수 구현 */ }} />
            <Movies type="recommend" movies={recommendationResults} isLoading={isLoading} />
            <Movies type="wish" movies={[]} isLoading={isLoading} showMovies={() => { /* showMovies 함수 구현 */ }} />
        </div>
    );
}
export default App;
