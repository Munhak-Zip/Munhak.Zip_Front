// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './page/user/Main.js';
import Minyoung from "./page/user/Minyoung";

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
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
