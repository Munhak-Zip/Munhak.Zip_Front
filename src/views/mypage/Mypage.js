import React, {useState,useEffect} from 'react';
import Mypage_css from "../../resources/css/Mypage/Mypage.css"
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';
import { useLocation } from 'react-router-dom';

const Mypage = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [changeToggle, setChangeToggle] = useState(false);
    const [reserveDetails, setReserveDetails] = useState([]);

    useEffect(() => {
        axios.get(`/user/mypage`)
            .then(response => {
                const reserveData = response.data;
                setReserveDetails(reserveData);
            })
            .catch(error => {
                console.error('요청 실패:', error);
            });
    }, []);

    // 현재 비밀번호에서 변경하기 버튼 누르면 새 비밀번호 적는 칸 생기도록 구현
    // useEffect(() => {
    //     // 세션 체크 함수
    //     const checkSession = async () => {
    //         try {
    //             // 예시로 /session-expired 엔드포인트에 GET 요청을 보냅니다.
    //             const response = await axiosInstance.get('/session-expired');
    //             console.log('세션 만료 체크 결과:', response);
    //         } catch (error) {
    //             // 오류 발생 시
    //             if (error.response && error.response.status === 401) {
    //                 // 세션이 만료된 경우
    //                 alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
    //                 // 여기서 다시 로그인 페이지로 리디렉션하거나 다른 처리를 할 수 있습니다.
    //                 // 예시로 리다이렉션 처리:
    //                 window.location.href = '/login';
    //             } else {
    //                 console.error('세션 체크 오류:', error);
    //             }
    //         }
    //     };
    //
    //     // 페이지 진입 시 세션 체크 수행
    //     checkSession();
    // }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정
    //현재 비밀번호에서 변경하기 버튼 누르면 새 비밀번호 적는 칸 생기도록 구현


    const [userId, setUserId] = useState('');

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await axios.get('/user-id', { withCredentials: true });
                setUserId(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };

        fetchUserId();
    }, []);

    const onClickChangebtn = () => {
        setChangeToggle(!changeToggle);
    };

    const ganre = ["한국영화", "SF", "코미디", "해외 영화", "판타지", "로맨스", "애니메이션", "드라마 장르", "스릴러", "액션", "영화", "호러", "다큐멘터리", "음악/뮤지컬", "단편영화"];

    return (
        <div className={"wrap"}>
            <div className={"header"}>
                헤더
            </div>
            <div className={"content_wrap"}>
                <div className={"views_name"}>
                    마이페이지
                </div>
                <div className={"mypage-userinfo"}>
                    <div className={"article"}>
                        <div className={"index"} id={"nickname"}>닉네임</div>
                        <input className={"input_info"} type={"text"} />
                        <button className={"change_btn"}>변경</button>
                    </div>
                    <div className={"article"}>
                        <div className={"index"} id={"id"}>아이디</div>
                        <input className={"input_info"} type={"text"} />
                        <button className={"change_btn"}>변경</button>
                    </div>
                    <div className={"article"}>
                        <div className={"index"} id={"current_pw"}>현재비밀번호</div>
                        <input className={"input_info"} type={"text"} />
                        <button className={"change_btn"} onClick={onClickChangebtn}>변경</button>
                    </div>
                    {/* 변경하기 버튼 누르면 새비밀번호 나오게 구현 예정 */}
                    {changeToggle ?
                        <div>
                            <div className={"article"}>
                                <div className={"index"} id={"new_pw"}>새 비밀번호</div>
                                <input className={"input_info"} type={"text"} id={"new_pw-input"} />
                            </div>
                            <div className={"article"}>
                                <div className={"index"} id={"check_new_pw"}>새 비밀번호 확인</div>
                                <input className={"input_info"} type={"text"} />
                                <button className={"change_btn"}>변경</button>
                            </div>
                        </div>
                        : <div></div>}
                </div>
                <div className={"mypage-like"}>
                    <p>좋아하는 장르</p>
                    <form>
                        <div className={"radio_btn"}>
                            {ganre.map((p, index) => {
                                const radioId = `genre-${index}`;
                                return (
                                    <div key={index} id={"radio_btn"}>
                                        <input type="checkbox" id={radioId} value={p} name={p} />
                                        <label htmlFor={radioId}>{p}</label>
                                    </div>
                                );
                            })}
                        </div>
                        <button className={"change_btn"} id={"ganre-change"}>변경</button>
                    </form>
                </div>
                <div className={"reservation_info"}>
                    <table id={"reservation_info"}>
                        <thead>
                        <tr>
                            <th>영화명</th>
                            <th>관람일</th>
                            <th>좌석</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reserveDetails.map((reservation, index) => (
                            <tr key={index}>
                                <td>{reservation.mvTitle}</td>
                                <td>{reservation.date} {reservation.time}</td>
                                <td>{reservation.seat}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Mypage;
