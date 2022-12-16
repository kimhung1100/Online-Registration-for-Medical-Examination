import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './dangki.scss';
import classNames from 'classnames/bind';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf';
const cx = classNames.bind(styles);

export default function DangKy() {
    //const [user, setUser] = useContext(UserContext);
    const [data, setData] = useState({
        key: Number,
        login: Boolean,
        userName: '',
        password: '',
        phone: '',
        gender: '',
        role: 'Khach Hang',
    });

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendData = {
            userName: data.userName,
            password: data.password,
            phone: data.phone,
            gender: data.gender,
            role: 'Khach hang',
        };

        axios
            .post(`http://localhost/Online-Registration-for-Medical-Examination/src/php/user.php/user/save`, sendData)
            .then((result) => {
                console.log(result);
                console.log(sendData);
                navigate(`/`);
            })
            .catch((error) => {
                console.log(error.response);
            });

        setData({
            ...data,
            userName: '',
            password: '',
            phone: '',
            gender: '',
        });
    };

    return (
        <section className={cx('container2')}>
            {/*<div className="quaylai"><a href="#" className="previous">&#8592;</a></div>*/}
            <div className={cx('quaylai')}>
                <Link to="/dang-nhap">
                    <button type="button">Sign in</button>
                </Link>
            </div>
            <div className={cx('noi-dung1')}>
                <div className={cx('form')}>
                    <h2>Đăng kí tài khoản mới</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('input-form')}>
                            <label>Số điện thoại:</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="+84"
                                onChange={handleChange}
                                value={data.phone}
                                required
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <label>Tên tài khoản:</label>
                            <input
                                type="text"
                                id="username"
                                name="userName"
                                placeholder=""
                                onChange={handleChange}
                                value={data.userName}
                                required
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <label>Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder=""
                                onChange={handleChange}
                                value={data.password}
                                required
                            />
                            <p> 6-14 kí tự, kết hợp chữ cái và số</p>
                        </div>
                        <ul className={cx('gender')}>
                            <li>
                                <label>Giới tính:</label>{' '}
                            </li>
                            <li>
                                <label>Nam</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    //value="male"
                                    checked={data.gender === 'male'}
                                    onChange={handleChange}
                                    value="male"
                                    style={{opacity: 'none !important'}}
                                />
                            </li>
                            <li>
                                <label>Nữ</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                    checked={data.gender === 'female'}
                                    onChange={handleChange}
                                />
                            </li>
                        </ul>
                        <div className={cx('input-form1')}>
                            <input type="submit" value="Xác nhận" />
                        </div>
                    </form>
                    <ul className={cx('icon-dang-nhap')}>
                        <li>
                            <i className={cx('fa fa-facebook')} aria-hidden="true"></i>
                            <p>
                                <a href="http://127.0.0.1:5500/dangki.html">Liên kết với facebook</a>
                            </p>
                        </li>
                        <li>
                            <i className={cx('fa fa-google')} aria-hidden="true"></i>
                            <p>
                                <a href="http://127.0.0.1:5500/dangki.html">Liên kết với google</a>
                            </p>
                        </li>
                        <li>
                            <i className={cx('fa fa-twitter')} aria-hidden="true"></i>
                            <p>
                                <a href="http://127.0.0.1:5500/dangki.html">Liên kết với twitter</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
