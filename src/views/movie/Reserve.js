import React, { useEffect, useState } from "react";
import '../../resources/css/Movie/Reserve.css';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Reserve = () => {
    const navigate = useNavigate();
    const { mvId } = useParams();
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState(location.state || null); // location.state에서 movieDetails를 가져옴
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (!movieDetails) {
            axios.get(`/movie/showReserveForm/${mvId}`)
                .then(response => {
                    const movieData = response.data;
                    movieData.openDate = movieData.openDate.split(' ')[0]; // openDate에서 시간 부분을 제거
                    setMovieDetails(movieData);
                })
                .catch(error => {
                    console.error('Request failed:', error);
                });
        }
    }, [mvId, movieDetails]);

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
            <div className="seatTable">
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

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="div1">
            영화명 : {movieDetails.mvTitle} <br/>
            날짜 : <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/><br/>
            시간 : <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/><br/>
            <p/><Seat/><br/>
            <button onClick={handleReservation}>예매하기</button>
        </div>
    );
}

export default Reserve;
