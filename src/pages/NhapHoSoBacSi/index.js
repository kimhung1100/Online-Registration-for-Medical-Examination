import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NhapHoSoBacSi.module.scss';
import { UserContext } from '../../components/UserContext';
import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function NhapHoSoBacSi() {
    // const [user, setUser] = useContext(UserContext);
    // const navigate = useNavigate();
    // const [QuanLyTaiKhoan, setQuanLyTaiKhoan] = useState(false);
    // const [ThongKeLuotTruyCap, setThongKeLuotTruyCap] = useState(false);
    // const [NhapHoSoBacSi, setNhapHoSoBacSi] = useState(false);

    // const handleThongKeLuotTruyCap = () => {
    //     setThongKeLuotTruyCap = true;
    //     setQuanLyTaiKhoan = false;
    // };
    // const handleQuanLyTaiKhoan = () => {
    //     setQuanLyTaiKhoan = true;
    //     setThongKeLuotTruyCap = false;
    // };

    return (
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div className={cx('style_header')}>NHẬP HỒ SƠ BÁC SĨ</div>
                <div className={cx('style_content')}>
                    <div class="row justify-content-center form-group form-group-sm">
                        <div class="col-8">
                            {/* <div class="mb-3"> */}
                            <input
                                class="form-control"
                                className={cx('form-control', 'form-control-sm')}
                                style={{ fontSize: '1.8rem', padding: 0 }}
                                type="file"
                                id="formFileMultiple"
                                multiple
                            />
                        </div>
                        <div class="col-4" style={{ padding: '40px' }}>
                            <button
                                type="button"
                                class="btn btn-primary btn-lg"
                                style={{
                                    backgroundColor: '#1da1f2',
                                    borderColor: '#1da1f2',
                                    fontSize: '1.5rem',
                                    width: '10rem',
                                }}
                            >
                                Nhập file
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
{
    /* <div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div> */
}
export default NhapHoSoBacSi;
