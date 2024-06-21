import React, { useState } from 'react';
import '../../resources/css/User/FindID.css';
import axios from 'axios';

const FindID = () => {
    const [nickName, setNickName] = useState("");
    const [hint, setHint] = useState("");
    const [userId, setUserId] = useState(""); // 유저 ID 상태 추가

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/findUserId', {
                nickname: nickName,
                hint: hint
            });

            setUserId(response.data);
            alert(`User ID: ${response.data}`);
        } catch (error) {
            console.error('Error finding user ID:', error);
            alert('Error finding user ID');
        }
    };

    return (
        <div className="findId">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                />
                <input
                    type="text"
                    name="hint"
                    placeholder="부모님의 이름은?"
                    value={hint}
                    onChange={(e) => setHint(e.target.value)}
                />
                <button type="submit">ID 찾기</button>
            </form>
            {userId && <p>{nickName}님의 ID는 {userId} 입니다.</p>} {/* 유저 ID를 표시 */}
        </div>
    );
}

export default FindID;
