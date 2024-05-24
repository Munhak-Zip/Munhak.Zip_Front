// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './page/user/Main.js';
import Minyoung from "./page/user/Minyoung";
import Moviedetail from "./views/movie/MovieDetail";
import Reviewdetail from "./views/wish/ReviewDetail";
import Myreviewdetail from "./views/wish/MyReviewDetail";
import MainPage from "./views/Main"
import Mypage from "./views/mypage/Mypage";
import MovieList from "./views/movie/MovieList";

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
                    path={"/movie/detail"}
                    element={<Moviedetail />}
                />
                <Route
                    path={"/user/mypage"}
                    element={<Mypage/>}
                />
                <Route
                    path={"/main"}
                    element={<MainPage/>}
                />
                <Route
                    path={"/movie/movieList"}
                    element={<MovieList/>}
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
            </Routes>
        </div>
    </BrowserRouter>
  );

}

export default App;