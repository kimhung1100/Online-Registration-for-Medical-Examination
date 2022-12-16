import styles from './dangnhapadmin.scss';
import classNames from 'classnames/bind';
import bglogin from '../../assets/images/dangnhap.png';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
const cx = classNames.bind(styles);

function DangNhap() {
    const context = useContext(UserContext);
    const [admin, setAdmin] = context[1];

    const [data, setData] = useState({
        password: '',
        username: '',
    });

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendData = {
            password: data.password,
            username: data.username,
        };

        axios
            .post(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/admins.php/admin/login`,sendData)
            .then((result) => {
                console.log(result);
                if (result.data.Status === '200') {
                    setAdmin((admin) => ({
                        ...admin,
                        ...data,
                        login: true,
                        name: result.data.name,
                        key: result.data.Id,
                        department: result.data.department,
                        role: result.data.role
                    }));
                    console.log(admin);
                    if (result.data.role === 'Nhân viên tư vấn') {
                        navigate('/tra-loi-thac-mac-chuyen-mon');
                    }
                    else if(result.data.role === 'Nhân viên quản trị lịch khám') {
                        navigate('/nhap-ho-so-bac-si');
                    }
                    else if (result.data.role === 'Nhân viên quản trị hệ thống') {
                        // <Link to='/thong-ke-luot-truy-cap'/>;
                        navigate('/nhap-lich-kham-bac-si');
                    }
                    else if (result.data.role === 'Giám đốc') {
                        navigate('/thong-ke-phieu-kham');
                    }
                    
                } else {
                    alert('Invalid');
                }
                 
            })
            .catch((error) => {
                console.log(error.response);
            });

        setData({
            ...data,
            password: '',
            username: '',
        });
    };

    return (
        <section className={cx('container1')}>
            {/* <div className={cx('quaylai')}>
                <Link to="/" className={cx('previous')}>
                    &#8592;
                </Link>
            </div> */}
            <div className={cx('noi-dung')}>
                <div className={cx('form')}>
                    <h2>Đăng nhập</h2>
                    <h3>Vui lòng nhập username và password để tiếp tục</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={cx('input-form')}>
                            <input
                                type="text"
                                name="username"
                                placeholder="admin"
                                value={data.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={data.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <input type="submit" value="Xác nhận" />
                        </div>
                    </form>  
                </div>
            </div>
            <div className={cx('img-bg')}>
                <img src={bglogin} value="image"></img>
            </div>
        </section>
    );
}
export default DangNhap;


//
                                        // <>
                                        // <li
                                        //     onClick={handleThongKeLuotTruyCap}
                                        //     data-test="nav-item"
                                        //     className={cx(
                                        //         'nav-item',
                                        //         ThongKeLuotTruyCap && 'style_active',
                                        //         ThongKeLuotTruyCap && 'undefined',
                                        //     )}
                                        // >
                                        //     <Link
                                        //         to="/thong-ke-luot-truy-cap"
                                        //         aria-current="page"
                                        //         className={cx(
                                        //             'nav-link',
                                        //             'Ripple-parent',
                                        //             ThongKeLuotTruyCap && 'active',
                                        //         )}
                                        //         data-test="nav-link"
                                        //     >
                                        //         Thống Kê Lượt Truy Cập
                                        //         <div
                                        //             data-test="waves"
                                        //             class="Ripple"
                                        //             style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                        //         ></div>
                                        //     </Link>
                                        // </li>
                                        // <li
                                        //     onClick={handleQuanLyTaiKhoan}
                                        //     data-test="nav-item"
                                        //     className={cx(
                                        //         'nav-item',
                                        //         QuanLyTaiKhoan && 'style_active',
                                        //         QuanLyTaiKhoan && 'undefined',
                                        //     )}
                                        // >
                                        //     <Link
                                        //         to="/quan-ly-tai-khoan"
                                        //         aria-current="page"
                                        //         className={cx(
                                        //             'nav-link',
                                        //             'Ripple-parent',
                                        //             QuanLyTaiKhoan && 'active',
                                        //         )}
                                        //         data-test="nav-link"
                                        //     >
                                        //         Quản Lý Tài Khoản
                                        //         <div
                                        //             data-test="waves"
                                        //             class="Ripple "
                                        //             style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                        //         ></div>
                                        //     </Link>
                                        // </li>
                                        // </>
                                        // ) : (
                                        // <>
                                        // <li
                                        //     data-test="list-group-item"
                                        //     className={cx('list-group-item', 'list-group-item-undefined')}
                                        // >
                                        //     <Link className={cx('style_button', 'style_login')} to="/dang-nhap-admin">
                                        //         Đăng nhập
                                        //         <i class="fa-solid fa-bars"></i>
                                        //     </Link>
                                        // </li>
                                        // </>
                                        // )}