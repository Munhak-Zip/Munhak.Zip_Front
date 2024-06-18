import React, { useState } from 'react';
import '../../resources/css/User/FindPW2.css';

const FindPW2 = () => {
    const [pw, setPw] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("변경할 비밀번호:", pw);
    };

    return (
        <div className="findPW2">
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="PW"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <button type="submit">PW 변경</button>
            </form>
        </div>
    )
}

export default FindPW2;
