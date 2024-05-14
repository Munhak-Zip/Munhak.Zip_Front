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

    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>

        </div>
    )
}
export default Wish;