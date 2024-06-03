import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [nickName, setNickName] = useState("");
    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const [hint, setHint] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            nickname: nickName,
            userId: userId,
            password: pw,
            hint: hint
        };

        try {
            console.log("사용자:"+ user);
            const response = await fetch("/joinProc", {
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
            <form onSubmit={handleSubmit} name="joinForm">
                <input
                    type="text"
                    name="UserId"
                    placeholder="Username"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <input
                    id="nickname"
                    type="text"
                    name="nickname"
                    placeholder="Nickname"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                />
                <input
                    id="hint"
                    type="text"
                    name="hint"
                    placeholder="Hint"
                    value={hint}
                    onChange={(e) => setHint(e.target.value)}
                />
                <input type="submit" value="Join"/>
            </form>
        </div>
    );
}

export default SignUp;
