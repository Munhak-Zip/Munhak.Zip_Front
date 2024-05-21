import React, {useState} from "react";
const Reserve = () => {
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

    function Information(props) {
        return (
        <div className={"content"}>
            영화명 : {props.title} <br/>
            날짜 : {props.date} <br/>
            시간 : {props.time}
        </div>
        )
    }

    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Information title={"파묘"} date={"2024-05-21"} time={"14:00"} />
        </div>
    )
}
export default Reserve;