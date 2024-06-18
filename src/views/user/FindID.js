import React, { useState } from 'react';
import '../../resources/css/User/FindID.css';

const FindID = () => {
    const [nickName, setNickName] = useState("");
    const [hint, setHint] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("닉네임:", nickName);
        console.log("부모님의 이름:", hint);
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
        </div>
    );
}

export default FindID;