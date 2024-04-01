// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import '../resources/css/Main/Main.css'
import Poster from '../resources/img/Main/sample1.png'
import Next from '../resources/next.png'
function Header(props) {
    console.log('props', props, props.title)
    return <header>
        <h1><a href="/" onClick={(event)=> {
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
        }}>{t.title}</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Article(props) {
    return <article>
        <h2>{props.title}</h2>{props.body}
    </article>
}

function App() {
    // const _mode = useState('WELCOME');//state의 초깃값
    // const mode = _mode[0]; //상태값
    // const setMode = _mode[1]; //state변경

    const [mode, setMode] = useState('WELCOME');
    const [search, setSearch] = useState(""); //검색변수
    const onChange = (event) => {
        setSearch(event.target.value)
    }

    const [id, setId] = useState(null);
    const topics = [
        {id: 1, title: '보관함', body: 'wish is...'},
        {id: 2, title: '마이페이지', body: 'myPage...'},
        {id:3, title:'로그아웃', body:'logOut...'}
    ]
    let content = null;
    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body={"Hello, MOVIE.ZIP"}></Article>
    } else if(mode === 'READ'){
        let title,body = null
        for(let i=0; i<topics.length; i++){
            console.log(topics[i].id, id);
            if(topics[i].id === id) {
                title=topics[i].title;
                body=topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
    }

    const renderMovies = () => {
        // 영화 데이터 배열 (실제 영화 데이터로 교체 가능)
        const movies = [
            { id: 1, title: '영화 1', poster: Poster },
            { id: 2, title: '영화 2', poster: Poster },
            { id: 3, title: '영화 3', poster: Poster },
            // 필요한 만큼 영화 객체 추가
        ];

        // 영화 배열을 순회하며 각 영화 포스터를 렌더링합니다.
        return movies.map(movie => (
            <span key={movie.id} className="movie">
                <img src={movie.poster} alt={movie.title} className="Poster-img"/>
                <p>{movie.title}</p>
            </span>
        ));
    }
    // @ts-ignore
    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={()=>{
                setMode('WELCOME');
            }}></Header>
            <input type="text" placeholder={"검색하기"} value={search} />
            <input type={"button"} value={"검색"} />
            {/*<Nav topics={topics} onChangeMode={(_id)=>{
                setMode('READ');
                setId(_id);
            }}></Nav>
            {content}*/}
            <p/>
            <div className={"new"}>
                최신영화
                <img src = {Next} className={"next-button"} alt="next"/>
                <div className={"new-movies"}>
                    {renderMovies()}
                </div>
            </div>
        </div>
    )
}

export default App;
