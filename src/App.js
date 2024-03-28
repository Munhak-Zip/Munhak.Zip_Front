// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './page/user/Login.js';
import Minyoung from "./page/user/Minyoung";

function App() {
  // @ts-ignore
    return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path={"/login/minyoung"}
                    element={<Minyoung/>}
                    />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
