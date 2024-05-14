// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import '../../resources/css/Movie/MovieList.css'
import Arrow from '../../resources/next.png'
function Header(props) {
    console.log('props', props, props.title)
    return <header>
        <h1><a href="/" onClick={(event)=> {
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}
function Category(props) {
    let content;
    if (props.type === "wishMovies") {
        content = "좋아하는 영화"
    }
    return <div className={props.type}>
        {content}
    </div>
}

function Article(props) {

}

function App() {
    // const _mode = useState('WELCOME');//state의 초깃값
    // const mode = _mode[0]; //상태값
    // const setMode = _mode[1]; //state변경

    const [mode, setMode] = useState('WELCOME');
    const [search, setSearch] = useState(""); //검색변수

    const [moviesIndex, setMoviesIndex] = useState(0); // 현재 영화 리스트의 시작 인덱스



    const renderMovies = () => {

    }

    function Movies(props) {

    }

    // @ts-ignore
    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Category type={"wishMovies"}></Category>
        </div>
    )
}

export default App;