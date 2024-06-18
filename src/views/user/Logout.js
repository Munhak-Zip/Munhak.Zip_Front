import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../../axiosConfig';
import qs from 'qs'; // URL-encoded 형식으로 변환하기 위해 qs 라이브러리 사용

const Logout = () => {

    return (
        <div>
            로그아웃되었습니다.
        </div>
    );
};

export default Logout;
