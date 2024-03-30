// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './page/user/Main.js';
import Minyoung from "./page/user/Minyoung";
import Yjin from "./views/Main"

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
                        path={"/main"}
                        element={<Yjin/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;