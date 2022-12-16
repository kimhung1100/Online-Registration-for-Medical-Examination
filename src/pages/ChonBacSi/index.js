import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './ChonBacSi.module.scss';
const cx = classNames.bind(styles);


function ChonBacSi() {
    let navigate = useNavigate();
    const [selectedSchedule, setSelectedSchedule] = useState('');
    // const chooseSchedule = (e) => {
    //     navigate('/chon-lich-kham', { state: { schedule: e.target.value } });
    // };

    const [doctor, setDoctor] = useState([]);
    const location = useLocation();
    console.log(location.state);

    useEffect(() => {
        getDoctors();
    },[]);

    const getDoctors = () => {
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/doctors.php/doctor/lookup`, {specialization: location.state.specialization})
        .then((result) => {
            setDoctor(result.data);
            console.log(result.data);
        })
        .catch((error) => {
            console.log(error.response);
        });
    }

    return (
        <div>
            <div className={cx('ChonBacSi_wrapper')}>
                <div className={cx('ChonBacSi_wrapper_content')}>
                    <Link to="/" className={cx('ChonBacSi_trang_chu')}>
                        Trang chủ
                    </Link>
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
                        {doctor.map((element, idx) => 
                        
                            <li key={idx}>
                                <Link to="/chon-lich-kham" state={{...location.state, doctor: element}}>
                                <div className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>{element.name}
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính: {element.gender}
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: {element.specialization}
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám: {element.day}
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám: {element.price}
                                    </p>
                                </div>
                                </Link>
                            </li>
                           
                            
                            )}
                        </ul>
                        
                    </div>
                    <a onClick={() => {navigate('../chon-chuyen-khoa');}}  className={cx('ChonBacSi_back')}>Quay lại</a>
                </div>
            </div>
        </div>
    );
}

export default ChonBacSi;
