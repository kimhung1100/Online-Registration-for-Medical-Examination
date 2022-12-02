import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './ChonBacSi.module.scss';
const cx = classNames.bind(styles);


function ChonBacSi() {
    let navigate = useNavigate();
    const [selectedSchedule, setSelectedSchedule] = useState('');
    const chooseSchedule = (e) => {
        navigate('/chon-lich-kham', { state: { schedule: e.target.value } });
    };

    return (
        <div>
            <div className={cx('ChonBacSi_wrapper')}>
                <div className={cx('ChonBacSi_wrapper_content')}>
                    <a href="./" className={cx('ChonBacSi_trang_chu')}>
                        Trang chủ
                    </a>
                    <div className={cx('ChonBacSi_chon_bac_si')}>
                        <i className={cx('fa-solid', 'fa-chevron-right')}></i>
                        Chọn bác sĩ
                    </div>
                </div>
            </div>
            <div className={cx('ChonBacSi_bac_si_content')}>
                <div className={cx('ChonBacSi_thong_tin_kham')}>
                    <div className={cx('ChonBacSi_thong_tin')}>Thông tin khám</div>
                    <div className={cx('ChonBacSi_dia_chi')}>
                        <i className={cx('fa-regular', 'fa-hospital')}></i>
                        The Group Solutions - 268 Lý Thường Kiệt, P14, Q10, TP TpHCM
                    </div>
                </div>
                <div className={cx('ChonBacSi_chon_nhung_bac_si')}>
                    <div className={cx('ChonBacSi_thong_tin')}>Vui lòng chọn bác sĩ</div>
                    <div className={cx('ChonBacSi_search')}>
                        <div className={cx('ChonBacSi_search_box')}>
                            <i className={cx('fa-solid', 'fa-magnifying-glass')}></i>
                            <input type="text" placeholder="Tìm nhanh bác sĩ"></input>
                        </div>
                    </div>
                    <div className={cx('ChonBacSi_cac_bac_si')}>
                        <ul>
                            <li>
                                <div onClick={chooseSchedule} className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>BSCKI. Đỗ Kim Thành
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: Nam
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: CHĂM SÓC GIẢM NHẸ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: Thứ 6
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: 150.000đ
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div onClick={chooseSchedule} className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>ThS BS. Lê Đại Dương
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: Nam
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: CHĂM SÓC GIẢM NHẸ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: Thứ 3
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: 150.000đ
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div onClick={chooseSchedule} className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>BSCKII. Lương Văn Đến
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: Nam
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: CHĂM SÓC GIẢM NHẸ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: Thứ 5
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: 150.000đ
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div onClick={chooseSchedule} className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>BSCKII. Nguyễn Thị Minh Ngọc
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: Nữ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: CHĂM SÓC GIẢM NHẸ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: Thứ 2
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: 150.000đ
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div onClick={chooseSchedule} className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>BSCKI. Trương Hồ Tường Vi
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: Nữ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: CHĂM SÓC GIẢM NHẸ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: Thứ 2
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: 150.000đ
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div onClick={chooseSchedule} className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>BSCKI. Vũ Trần Minh Nguyên
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: Nam
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: CHĂM SÓC GIẢM NHẸ
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: Thứ 7
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: 150.000đ
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a className={cx('ChonBacSi_back')}>Quay lại</a>
                </div>
            </div>
        </div>
    );
}

export default ChonBacSi;
