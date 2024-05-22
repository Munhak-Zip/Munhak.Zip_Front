import React, { useState } from "react";
import '../../resources/css/Movie/Reserve.css';

const Reserve = () => {
    const [mode, setMode] = useState('WELCOME');
    const [selectedSeat, setSelectedSeat] = useState(null);

    function Header(props) {
        return (
            <header>
                <h1>
                    <a href="/" onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode();
                    }}>{props.title}</a>
                </h1>
            </header>
        );
    }

    function Information(props) {
        return (
            <div className={"content"}>
                영화명 : {props.title} <br />
                날짜 : {props.date} <br />
                시간 : {props.time}
            </div>
        );
    }

    function Seat() {
        const rows = 10;
        const cols = 20;
        const rowLabels = 'ABCDEFGHIJ'.split('');
        let tableRows = [];

        function handleSeatClick(seatId) {
            setSelectedSeat(seatId);
        }

        for (let row = 0; row < rows; row++) {
            let tableCells = [];
            for (let col = 1; col <= cols; col++) {
                let seatId = `${rowLabels[row]}-${col}`;
                tableCells.push(
                    <td
                        key={seatId}
                        className={selectedSeat === seatId ? 'selected' : ''}
                        onClick={() => handleSeatClick(seatId)}
                    >
                        {`${rowLabels[row]}${col}`}
                    </td>
                );
            }
            tableRows.push(<tr key={row}>{tableCells}</tr>);
        }

        return (
            <div className={"seatTable"}>
                좌석 선택
                <table>
                    <tbody>
                    {tableRows}
                    </tbody>
                </table>
                {selectedSeat && <div>선택된 좌석: {selectedSeat}</div>}
            </div>
        );
    }

    function handleReservation() {
        if (!selectedSeat) {
            alert("좌석을 선택해주세요.");
        } else {
            alert("예매가 완료되었습니다. 선택된 좌석: " + selectedSeat);
        }
    }

    return (
        <div className={"div1"}>
            <Header title={"MOVIE.ZIP"} onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Information title={"파묘"} date={"2024-05-21"} time={"14:00"} /><br />
            <Seat /><br/>
            <button onClick={handleReservation}>예매하기</button>
        </div>
    );
}

export default Reserve;
