// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import '../../resources/css/Movie/MovieList.css'

function Header(props) {

}

function Nav(props) {

}

function Article(props) {

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
    const [moviesIndex, setMoviesIndex] = useState(0); // 현재 영화 리스트의 시작 인덱스


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

    }
    const showMovies = () => {

    }

    function Movies(props) {

    }

    // @ts-ignore
    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <input type="text" placeholder={"검색하기"} value={search}/>
            <input type={"button"} value={"검색"}/>
            {/*<Nav topics={topics} onChangeMode={(_id)=>{
                setMode('READ');
                setId(_id);
            }}></Nav>
            {content}*/}
            <p/>
            <Movies type={"new"}></Movies>
            <Movies type={"recommend"}></Movies>
            <Movies type={"wish"}></Movies>
        </div>
    )
}

export default App;