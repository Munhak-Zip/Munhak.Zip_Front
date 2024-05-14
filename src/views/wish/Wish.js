import React, {useState} from "react";
import Arrow from '../../resources/next.png'
import Poster from '../../resources/img/Main/sample1.png'
import Star from '../../resources/img/Movie/star.png'
const Wish=() => {
    const [mode, setMode] = useState('WELCOME');
    function Header(props) {
        console.log('props', props, props.title)
        return <header>
            <h1><a href="/" onClick={(event)=> {
                event.preventDefault();
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    }
    const renderMovies = () => {
        // 영화 데이터 배열 (실제 영화 데이터로 교체 가능)
        const movies = [
            { id: 1, title: '영화명', poster: Poster, start: 5 },
            { id: 2, title: '영화명', poster: Poster, start: 5 },
            { id: 3, title: '영화명', poster: Poster, start: 5 },
            { id: 4, title: '영화명', poster: Poster, start: 5 },

            // 필요한 만큼 영화 객체 추가
        ];

        // 영화 배열을 순회하며 각 영화 포스터를 렌더링합니다.
        return movies.map(movie => (
            <span key={movie.id} className="movie">
                <img src={movie.poster} alt={movie.title} className="Poster-img"/>
                <p>{movie.title}<img src={Star} className={"star"}/>({movie.start})</p>
            </span>
        ));

    }
    function Category(props) {
        let content;
        if (props.type === "wishMovies") {
            content = "좋아하는 영화"
        }
        else if (props.type === "newMovies") {
            content = "최신 영화"
        }
        else if (props.type === "recMovies") {
            content = "추천 영화"
        }
        return <div className={props.type}>
            <img src={Arrow} className={"Arrow"}/>
            {content}
            <p/>
            <div className={"movies"}>
                {renderMovies()}
            </div>
        </div>
    }

    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>

        </div>
    )
}
export default Wish;