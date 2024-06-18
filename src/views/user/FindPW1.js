import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../resources/css/User/FindPW1.css';

const FindPW1 = () => {
    const [id, setId] = useState("");

    return (
        <div className="findPW1">
            <form>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <Link to="/findPw2">
                    <button type="submit">PW 찾기</button>
                </Link>
            </form>
        </div>
    )
}

export default FindPW1;
