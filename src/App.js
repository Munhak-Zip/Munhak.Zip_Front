//@ts-ignore
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main';
import Minyoung from "./page/user/Minyoung";
import Login from "./views/user/Login";
import Logout from "./views/user/Logout";
import Moviedetail from "./views/movie/MovieDetail";
import MovieDetail from "./views/movie/MovieDetail";
import Reviewdetail from "./views/wish/ReviewDetail";
import MyReviewList from "./views/wish/MyReviewList";
import WishReviewList from "./views/wish/WishReviewList";
import MainPage from "./views/Main"
import Mypage from "./views/mypage/Mypage";
import FindId from "./views/user/FindID";
import FindPw1 from "./views/user/FindPW1";
import FindPw2 from "./views/user/FindPW2";
import SignUp from "./views/user/SignUp";
import FirstCheckInterests from "./views/user/FirstCheckInterest";
import Header from "./components/common/header";

import MovieList from "./views/movie/MovieList";
import Wish from "./views/wish/Wish"
import WishMovieList from "./views/wish/WishMovieList"
import Reserve from "./views/movie/Reserve"
import axios from 'axios';
import axiosInstance from './axiosConfig';
import ReviewBoxDetail from "./views/wish/ReviewBoxDetail";
import MyReviewBoxUpdate from "./views/wish/MyReviewBoxUpdate";
import SearchMovie from "./views/movie/SearchMovie";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path={"/login/minyoung"}
                        element={<Minyoung/>}
                    />
                    <Route
                        path={"/login"}
                        element={<Login/>}
                    />
                    <Route
                        path={"/logout"}
                        element={<Logout/>}
                    />
                    <Route
                        path="/movie/:mvId"
                        element={<MovieDetail />} />
                    <Route
                        path={"/user/mypage"}
                        element={<Mypage/>}
                    />

                    <Route
                        path={"/"}
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
                        path={"/movie/showReserveForm/:mvId"}
                        element={<Reserve/>}
                    />
                    <Route
                        path={"/wish/reviewDetail"}
                        element={<Reviewdetail />}
                    />
                    <Route
                        path={"/wish/myReviewList"}
                        element={<MyReviewList />}
                    />
                    <Route
                        path={"/wish/wishMovieList"}
                        element={<WishMovieList />}
                    />
                    <Route
                        path={"/wish/wishReviewList"}
                        element={<WishReviewList />}
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
                    <Route
                        path={"/wish/myReviewList/ReviewBoxDetail/:rvId"}
                        element={<ReviewBoxDetail/>}
                        />
                    <Route
                        path={"/wish/MyReviewBoxUpdate/:rvId"}
                        element={<MyReviewBoxUpdate/>}
                    />
                    <Route
                        path={"/search/:mvTitle"}
                        element={<SearchMovie />}
                    />

                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;