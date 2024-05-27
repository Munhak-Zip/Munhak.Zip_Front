// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main';
import Minyoung from "./page/user/Minyoung";
import Login from "./views/user/Login"

import MovieList from "./views/movie/MovieList";
import Wish from "./views/wish/Wish"
import Reserve from "./views/movie/Reserve"
import Header from "./components/common/header"
import Moviedetail from "./views/movie/MovieDetail"
import Mypage from "./views/Main"
import MainPage from "./views/Main"
import Reviewdetail from "./views/wish/ReviewDetail"
import Myreviewdetail from "./views/wish/MyReviewDetail"
import SignUp from "./views/user/SignUp"




function App() {
  // @ts-ignore
    return (
    <BrowserRouter>
        <div className="App">
            <Header />
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
                    path={"/wish"}
                    element={<Wish/>}
                />
                <Route
                    path={"/reserve"}
                    element={<Reserve/>}
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
                    path={"/login"}
                    element={<Login/>}
                />
                <Route
                    path={"/signup"}
                    element={<SignUp/>}
                />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
