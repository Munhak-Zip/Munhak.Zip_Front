import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [nickName, setNickName] = useState("");
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const [hint, setHint] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            nickName: nickName,
            userId: userId,
            pw: pw,
            hint: hint
        };

        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                navigate("/login");
            } else {
                if (response.status === 404) {
                    console.error("Resource not found");
                } else {
                    const errorText = await response.text();
                    console.error("Error:", errorText);
                }
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };


    return (
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="닉네임"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    placeholder="PW"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    placeholder="부모님의 이름은?"
                    value={hint}
                    onChange={(e) => setHint(e.target.value)}
                />
                <br/>
                <button type="submit" className="sign_up">회원가입</button>
            </form>
        </div>
    );
}

export default SignUp;
