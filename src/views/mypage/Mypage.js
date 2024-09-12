import React, {useState,useEffect} from 'react';
import Mypage_css from "../../resources/css/Mypage/Mypage.css"
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Mypage = () => {
    const navigate = useNavigate();
    const [changeToggle, setChangeToggle] = useState(false);
    const [reserveDetails, setReserveDetails] = useState([]);
    const [userId, setUserId] = useState('');
    const [userInfo, setUserInfo] = useState({ nickname: '', userId: '', password: '' });
    const [userInterest, setUserInterest] = useState([]);
    const [currentPassword, setCurrentPassword] = useState(''); // 현재 비밀번호
    const [newPassword, setNewPassword] = useState(''); // 새 비밀번호
    const [confirmPassword, setConfirmPassword] = useState(''); // 새 비밀번호 확인
    const [passwordMismatch, setPasswordMismatch] = useState(false); // 비밀번호 불일치 여부

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
            fetchReservationDetails(storedUserId);
            fetchUserInfo(storedUserId);
            fetchUserInterest(storedUserId);
        } else {
            console.error('No user ID found in local storage');
        }
    }, []);

    const fetchUserInfo = (userId) => {
        axios.get('/mypage/user', { params: { userId: userId } })
            .then(response => {
                const data = response.data;
                setUserInfo({
                    nickname: data.nickname,
                    userId: data.userId,
                    password: data.password
                });
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };
    const fetchUserInterest = (userId) => {
        axios.get('/mypage/user/interest', { params: { userId: userId } })
            .then(response => {
                setUserInterest(response.data.genre); // Assuming the response contains the user's genres as an array
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const fetchReservationDetails = (userId) => {
        axios.get('/user/mypage', { params: { userId: userId } })
            .then(response => {
                const reserveData = response.data.map(reservation => {
                    return {
                        ...reservation,
                        dateR: new Date(reservation.dateR).toLocaleDateString() // Format dateR
                    };
                });
                setReserveDetails(reserveData);
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const fetchUserPassword = (userId, password) => {
        axios.get('/mypage/checkUserPass', { params: { userId: userId, password: password } })
            .then(response => {
                const data = response.data;
                if (data === true) {
                    setChangeToggle(true); // 비밀번호가 맞으면 변경 가능하게
                } else {
                    alert('비밀번호가 일치하지 않습니다.');
                }
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
        setPasswordMismatch(e.target.value !== confirmPassword); // 입력 시 즉시 비교
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMismatch(newPassword !== e.target.value); // 입력 시 즉시 비교
    };

    const handlePasswordUpdate = () => {
        axios.post('/changePassword', {
            userId: userId,
            newPassword: newPassword
        })
            .then(() => {
                alert('비밀번호가 성공적으로 변경되었습니다.');
                setChangeToggle(false); // 비밀번호 변경 후, 변경 가능 모드 해제
            })
            .catch(error => {
                console.error('Request failed:', error);
            });
    };

    const onClickChangebtn = () => {
        fetchUserPassword(userId, currentPassword);
    };

    const ganre = ["한국영화", "SF", "코미디", "해외 영화", "판타지", "로맨스", "애니메이션", "드라마 장르", "스릴러", "액션", "영화", "호러", "다큐멘터리", "음악/뮤지컬", "단편영화"];

    return (
        <div className={"wrap"}>
            <div className={"content_wrap"}>
                <div className={"views_name"}>마이페이지</div>
                <div className={"mypage-userinfo"}>
                    <div className={"article"}>
                        <div className={"index"} id={"nickname"}>닉네임</div>
                        <input className={"input_info"} type={"text"} value={userInfo.nickname} readOnly />
                        <button className={"change_btn"}><p>변경</p></button>
                    </div>
                    <div className={"article"}>
                        <div className={"index"} id={"id"}>아이디</div>
                        <input className={"input_info"} type={"text"} value={userInfo.userId} readOnly />
                        <button className={"change_btn"}><p>변경</p></button>
                    </div>
                    <div className={"article"}>
                        <div className={"index"} id={"current_pw"}>현재비밀번호</div>
                        <input
                            className={"input_info"}
                            type={"password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)} // 입력된 비밀번호 저장
                        />
                        <button className={"change_btn"} onClick={onClickChangebtn}><p>변경</p></button>
                    </div>
                    {changeToggle ? (
                        <div>
                            <div className={"article"}>
                                <div className={"index"} id={"new_pw"}>새 비밀번호</div>
                                <input
                                    className={"input_info"}
                                    type={"password"}
                                    id={"new_pw-input"}
                                    style={{ borderColor: passwordMismatch ? 'red' : '' }} // 불일치 시 빨간색 테두리
                                    value={newPassword}
                                    onChange={handlePasswordChange} // 새 비밀번호 저장 및 실시간 비교
                                />
                            </div>
                            <div className={"article"}>
                                <div className={"index"} id={"check_new_pw"}>새 비밀번호 확인</div>
                                <input
                                    className={"input_info"}
                                    type={"password"}
                                    style={{ borderColor: passwordMismatch ? 'red' : '' }} // 불일치 시 빨간색 테두리
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange} // 비밀번호 확인 저장 및 실시간 비교
                                />
                                <button className={"change_btn"} onClick={() => {
                                    if (passwordMismatch) {
                                        alert("비밀번호가 다릅니다."); // 비밀번호가 다를 때 알림창
                                    } else {
                                        handlePasswordUpdate(); // 비밀번호가 일치할 때 처리 로직
                                    }
                                }}><p>변경</p></button>
                            </div>
                            {passwordMismatch && (
                                <div style={{ color: 'red' , marginLeft:'100px', marginTop:'-30px'}}>비밀번호가 다릅니다.</div> // 비밀번호 불일치 메시지
                            )}
                        </div>
                    ) : null}
                </div>
                <div className={"mypage-like"}>
                    <p>좋아하는 장르</p>
                    <form>
                        <div className={"radio_btn"}>
                            {ganre.map((p, index) => {
                                const radioId = `genre-${index}`;
                                return (
                                    <div key={index} id={"radio_btn"}>
                                        <input
                                            type="checkbox"
                                            id={radioId}
                                            value={p}
                                            name={p}
                                            checked={userInterest.includes(p)} // Check if the genre is in the user's interest list
                                        />
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
                                <td>{reservation.dateR} {reservation.time}</td>
                                <td>{reservation.seat}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mypage;