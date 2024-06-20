import React, { useState } from 'react';
import '../../resources/css/User/FindPW2.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const FindPW2 = () => {
    const [pw, setPw] = useState("");
    const location = useLocation();
    const { id } = location.state || {};
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("변경할 비밀번호:", pw);
        try {
            const response = await axios.post('/changePassword', {
                userId: id,
                newPassword: pw
            });

            alert(`비밀번호 변경 성공`);
            navigate('/login');
        } catch (error) {
            console.log("비밀번호 변경 실패");
            alert('비밀번호 변경 실패');
        }
    };

    return (
        <div className="findPW2">
            {id ? (
                <p>User ID: {id}</p>
            ) : (
                <p>No User ID found</p>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="새로운 비밀번호를 입력하세요"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <button type="submit">PW 변경</button>
            </form>
        </div>
    )
}

export default FindPW2;
