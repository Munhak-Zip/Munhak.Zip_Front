import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../resources/css/User/FindPW1.css';
import axios from 'axios';
const FindPW1 = () => {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const gotofindpw2  = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/checkExistsId', {
                userId: id
            });

            navigate("/findPw2", { state: { id: id } });
            alert(`User ID: ${response.data}`);
        } catch (error) {
            console.log("사용자가 존재하지 않습니다.");
            alert('Error finding user ID');
        }
    }




    return (
        <div className="findPW1">
            <form>
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                    <button type="button" onClick={gotofindpw2}>PW 변경</button>
            </form>
        </div>
    )
}

export default FindPW1;
