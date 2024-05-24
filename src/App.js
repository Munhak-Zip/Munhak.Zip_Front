// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './page/user/Main.js';
import Minyoung from "./page/user/Minyoung";
import Login from "./views/user/Login";
import Moviedetail from "./views/movie/MovieDetail";
import Reviewdetail from "./views/wish/ReviewDetail";
import Myreviewdetail from "./views/wish/MyReviewDetail";
import Yjin from "./views/Main"
import Mypage from "./views/mypage/Mypage";
import FindId from "./views/user/FindID";
import FindPw1 from "./views/user/FindPW1";
import FindPw2 from "./views/user/FindPW2";
import SignUp from "./views/user/SignUp";
import FirstCheckInterests from "./views/user/FirstCheckInterest";

function App() {
  // @ts-ignore
    return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Main />}
                />

                <Route
                    path={"/login/minyoung"}
                    element={<Minyoung/>}
                    />
                <Route
                    path={"/login"}
                    element={<Login/>}
                />
                <Route
                    path={"/movie/detail"}
                    element={<Moviedetail />}
                />
                <Route
                    path={"/user/mypage"}
                    element={<Mypage/>}
                />
                    <Route
                        path={"/main"}
                        element={<Yjin/>}
                    />
                    <Route
                        path={"/movie/detail"}
                        element={<Moviedetail />}
                    />
                    <Route
                        path={"/wish/reviewDetail"}
                        element={<Reviewdetail />}
                    />
                    <Route
                        path={"/wish/myReviewDetail"}
                        element={<Myreviewdetail />}
                    />
                    <Route
                        path={"/findId"}
                        element={<FindId />}
                    />
                    <Route
                        path={"/findPw1"}
                        element={<FindPw1 />}
                    />
                    <Route
                        path={"/findPw2"}
                        element={<FindPw2 />}
                    />
                    <Route
                        path={"/signUp"}
                        element={<SignUp />}
                    />
                    <Route
                        path={"/firstCheckInterests"}
                        element={<FirstCheckInterests />}
                    />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
