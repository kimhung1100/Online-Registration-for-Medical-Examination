import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ThongKeLuotTruyCap.module.scss';
import { UserContext } from '../../components/UserContext';
import whiteLogo from '../../assets/images/white_logo.jpg';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { Calendar } from 'react-multi-date-picker';
const data = [
    {
        name: 'Page A',
        LuotDangNhap: 1230,
    },
    {
        name: 'Page A',
        LuotDangNhap: 1500,
    },
    {
        name: 'Page A',
        LuotDangNhap: 1000,
    },
    {
        name: 'Page A',
        LuotDangNhap: 990,
    },
    {
        name: 'Page A',
        LuotDangNhap: 1603,
    },
    {
        name: 'Page A',
        LuotDangNhap: 1320,
    },
];
const cx = classNames.bind(styles);
function ThongKeLuotTruyCap() {
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
    const [values, setValues] = useState([new DateObject()]);

    const [problem1, setProblem1] = useState(false);

    const handleProblem1 = () => {
        setProblem1(!problem1);
    };
    return (
        <div id="ThongKeLuotTruyCap">
            <div className={cx('filter-cover')}>
                <div className={cx('filter')}>
                    <div className={cx('selection')}>
                        <div className={cx('match')}>Match</div>
                        <button onClick={handleProblem1}>Choose days</button>
                        {problem1 && (
                            <div>
                                <div className={cx('calendar')}>
                                    <Calendar value={values} onChange={setValues} range rangeHover />
                                </div>
                            </div>
                        )}
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
            <div class="row">
                <div class="col-12 d-flex justify-content-center text-center">
                    <ComposedChart width={1000} height={500} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        {/* <Bar dataKey="LuotDangNhap" barSize={20} fill="#413ea0" /> */}
                        <Line type="monotone" dataKey="LuotDangNhap" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
}

export default ThongKeLuotTruyCap;
