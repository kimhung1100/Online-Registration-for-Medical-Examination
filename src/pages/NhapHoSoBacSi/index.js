import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NhapHoSoBacSi.module.scss';
import { UserContext } from '../../components/UserContext';
import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function NhapHoSoBacSi() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [QuanLyTaiKhoan, setQuanLyTaiKhoan] = useState(false);
    const [ThongKeLuotTruyCap, setThongKeLuotTruyCap] = useState(false);
    const [NhapHoSoBacSi, setNhapHoSoBacSi] = useState(false);

    const handleThongKeLuotTruyCap = () => {
        setThongKeLuotTruyCap = true;
        setQuanLyTaiKhoan = false;
    };
    const handleQuanLyTaiKhoan = () => {
        setQuanLyTaiKhoan = true;
        setThongKeLuotTruyCap = false;
    };

    return (
        <div id="NhapHoSoBacSi">
            <p>NhapHoSoBacSi</p>
        </div>
    );
}

export default NhapHoSoBacSi;
