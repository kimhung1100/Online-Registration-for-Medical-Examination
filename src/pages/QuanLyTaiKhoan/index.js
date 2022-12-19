import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './QuanLyTaiKhoan.module.scss';
import { UserContext } from '../../components/UserContext';
import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function QuanLyTaiKhoan() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [QuanLyTaiKhoan, setQuanLyTaiKhoan] = useState(false);
    const [ThongKeLuotTruyCap, setThongKeLuotTruyCap] = useState(false);

    const handleThongKeLuotTruyCap = () => {
        setThongKeLuotTruyCap = true;
        setQuanLyTaiKhoan = false;
    };
    const handleQuanLyTaiKhoan = () => {
        setQuanLyTaiKhoan = true;
        setThongKeLuotTruyCap = false;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('style__banner d-none d-lg-block')}>
                <div data-test="view" className={cx('header')}>
                    <div data-test="container3" className={cx('container3')}>
                        <div data-test="row" className={cx('row')}>
                            <div data-test="col" className={cx('col')}>
                                <div>
                                    <h1 className={cx('header__page')}>
                                        <span>Quản lý tài khoản</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class={cx('list')}>DANH SÁCH TÀI KHOẢN</h2>
            <div className={cx('filter-cover')}>
                <div className={cx('filter')}>
                    <div className={cx('selection')}>
                        <div className={cx('match')}>
                            <p>Match</p>
                        </div>
                        <form action="http://httpbin.org/post" method="post">
                            <select data-placeholder="type or select..." multiple class="chosen-select" name="test">
                                <option value=""></option>
                                <option>Khách hàng</option>
                                <option>Nhân viên quản lý hệ thống</option>
                                <option>Nhân viên quản trị lịch khám</option>
                                <option>Nhân viên tư vấn</option>
                                <option>Giám đốc</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className={cx('toolbox')}>
                    <div className={'clear-button'} id="undo">
                        <p>clear filters</p>
                    </div>
                    <div className={cx('submit-button')} id="submit">
                        <p>apply filters</p>
                    </div>
                </div>
            </div>
            <table cellspacing="0" cellpadding="0">
                <tr>
                    <th>Mã tài khoản</th>
                    <th>Họ và tên</th>
                    <th>Quyền</th>
                </tr>
                <tr>
                    <td>KH_220002</td>
                    <td>NGUYỄN THỊ TRANG</td>
                    <td>Khách hàng</td>
                </tr>
                <tr>
                    <td>KH_220003</td>
                    <td>NGÔ ANH LONG</td>
                    <td>Khách hàng</td>
                </tr>
                <tr>
                    <td>HT_000001</td>
                    <td>PHAN HỒNG ĐỨC</td>
                    <td>Nhân viên quản lý hệ thống</td>
                </tr>
                <tr>
                    <td>LK_000001</td>
                    <td>BÙI KIM HƯNG</td>
                    <td>Nhân viên quản trị lịch khám</td>
                </tr>
                <tr>
                    <td>GD_000001</td>
                    <td>NGUYỄN THỊ MINH CHÂU</td>
                    <td>Giám đốc</td>
                </tr>
                <tr>
                    <td>TV_000001</td>
                    <td>NGUYỄN HIỀN HẢI</td>
                    <td>Nhân viên tư vấn</td>
                </tr>
                <tr>
                    <td>KH_220008</td>
                    <td>BÙI HỮU ĐỨC</td>
                    <td>Khách hàng</td>
                </tr>
                <tr>
                    <td>KH_220009</td>
                    <td>NGUYỄN NGỌC MAI</td>
                    <td>Khách hàng</td>
                </tr>
            </table>
            <div className={cx('holder')}>
                <div className={cx('pagination')}>
                    <a class="active" href="#">
                        1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a class="last" href="#">
                        6
                    </a>
                    <a class="next" href="#">
                        next&raquo;
                    </a>
                </div>
                <Link to="/tao-tai-khoan-dac-biet">
                    <div className={cx('taotaikhoan')} id="submit">
                        <p>Tạo tài khoản</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default QuanLyTaiKhoan;
