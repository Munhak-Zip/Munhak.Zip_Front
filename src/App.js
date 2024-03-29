// @ts-ignore
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main';
import Minyoung from "./page/user/Minyoung";
import Login from "./views/user/Login"

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
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
