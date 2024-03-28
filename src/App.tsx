import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './page/user/Login.js';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
