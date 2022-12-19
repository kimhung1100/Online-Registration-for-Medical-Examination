import classNames from 'classnames/bind';
import { CartXFill } from 'react-bootstrap-icons';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf';
import styles from './ChonLichKham.module.scss';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'react-multi-date-picker';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
function ChonLichKham() {
    let navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const location = useLocation();
    console.log(location.state);
    const [state, setState] = useState({
        period: '',
        time: '',
        date: '',
    });

    const handleClick = (val) => {
        setState({ ...state, period: val.period, time: val.time, date: selectedDay.format() });
        console.log(state);
    };

    var examDay;
    if (selectedDay) {
        examDay = <p>Ngày khám: {selectedDay.format()}</p>;
    }

    return (
        <div className={cx('style_wrapper_content')}>
            <div className={cx('style_bg_breakcum')}>
                <div data-test="container" className={cx('container')}>
                    <div data-test="row" className={cx('row')}>
                        <div data-test="col" className={cx('col-12')}>
                            <div className={cx('style_wrap_mdbreadcrumb', 'style_head')}>
                                <nav data-test="breadcrumb">
                                    <ol className={cx('breadcrumb')}>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            <Link to="/">Trang chủ</Link>
                                        </li>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            Chọn lịch khám
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapp')}>
                <div className={cx('container1')}>
                    <p>Thông tin khám</p>
                    <div className={cx('content')}>
                        <p style={{ marginTop: '1rem' }}>
                            <i className={cx('fa-regular', 'fa-hospital')}></i> Bệnh viện The Group
                        </p>
                        <p>
                            <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: {location.state.specialization}
                        </p>
                        <p>
                            <i class="fa-solid fa-user-doctor"></i>Bác sĩ: {location.state.doctor.name}
                        </p>
                        <p>
                            <i class="fa-solid fa-plus"></i>Dịch vụ: Khám dịch vụ
                        </p>
                        {examDay}
                    </div>
                </div>
                <div className={cx('container2')}>
                    <p style={{ fontStyle: 'italic' }}>Vui lòng chọn ngày khám dưới đây</p>
                    <div className={cx('content')}>
                        <Calendar
                            value={selectedDay}
                            onChange={(dateObject) => {
                                console.log(dateObject.format());
                                setSelectedDay(dateObject);
                            }}
                        />
                    </div>
                </div>
            </div>
            <form className={cx('form')}>
                <h2>Buổi sáng</h2>
                <div className={cx('switch-field')}>
                    <input
                        type="radio"
                        id="radio-1"
                        name="switch-two"
                        value="7-8"
                        onClick={() => handleClick({ period: 'Sáng', time: '08:00' })}
                    />
                    <label for="radio-1">07:00 - 08:00</label>
                    <input
                        type="radio"
                        id="radio-2"
                        name="switch-two"
                        value="8-9"
                        onClick={() => handleClick({ period: 'Sáng', time: '09:00' })}
                    />
                    <label for="radio-2">08:00 - 09:00</label>
                    <input
                        type="radio"
                        id="radio-3"
                        name="switch-two"
                        value="9-10"
                        onClick={() => handleClick({ period: 'Sáng', time: '10:00' })}
                    />
                    <label for="radio-3">09:00 - 10:00</label>
                    <input
                        type="radio"
                        id="radio-4"
                        name="switch-two"
                        value="10-11"
                        onClick={() => handleClick({ period: 'Sáng', time: '11:00' })}
                    />
                    <label for="radio-4">10:00 - 11:00</label>
                </div>
                <h2>Buổi chiều</h2>
                <div class={cx('switch-field')}>
                    <input
                        type="radio"
                        id="radio-5"
                        name="switch-two"
                        value="13-14"
                        onClick={() => handleClick({ periiod: 'Chiều', time: '14:00' })}
                    />
                    <label for="radio-5">13:00 - 14:00</label>
                    <input
                        type="radio"
                        id="radio-6"
                        name="switch-two"
                        value="14-15"
                        onClick={() => handleClick({ period: 'Chiều', time: '15:00' })}
                    />
                    <label for="radio-6">14:00 - 15:00</label>
                    <input
                        type="radio"
                        id="radio-7"
                        name="switch-two"
                        value="15-16"
                        onClick={() => handleClick({ period: 'Chiều', time: '16:00' })}
                    />
                    <label for="radio-7">15:00 - 16:00</label>
                    <input
                        type="radio"
                        id="radio-8"
                        name="switch-two"
                        value="16-17"
                        onClick={() => handleClick({ period: 'Chiều', time: '17:00' })}
                    />
                    <label for="radio-8">16:00 - 17:00</label>
                </div>
                {/* <div class={cx('xacnhan')}>
                    <Link to="/xac-nhan-thong-tin" state={{...location.state, period: state.period, time: state.time, date: state.date}}>
                        <button>Xác nhận</button>
                    </Link>
                </div> */}
                <div className={cx('style_next_prev')}>
                    <button
                        onClick={() => navigate('/chon-bac-si')}
                        style={{ backgroundColor: '#fff' }}
                        data-test="button"
                        type="button"
                        className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button')}
                    >
                        <div>Quay lại</div>
                        <div
                            data-test="waves"
                            className={cx('Ripple', 'Ripple-outlin')}
                            style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                        ></div>
                    </button>
                    <ul className={cx('list-unstyle', 'list-inline', 'm-0', 'p-0')}>
                        <li className={cx('list-inline-item', 'm-0')}>
                            <Link
                                to="/xac-nhan-thong-tin"
                                state={{ ...location.state, period: state.period, time: state.time, date: state.date }}
                            >
                                <button
                                    data-test="button"
                                    type="button"
                                    className={cx(
                                        'btn',
                                        'btn-flat',
                                        'Ripple-parent',
                                        'style_button',
                                        'style_create',
                                        'style_buttonArrow',
                                    )}
                                >
                                    <div>
                                        Xác nhận
                                        <i
                                            style={{ fontWeight: '600' }}
                                            className={cx('fa-regular', 'fa-arrow-right')}
                                        ></i>
                                    </div>
                                    <div
                                        data-test="waves"
                                        className={cx('Ripple', 'Ripple-outlin')}
                                        style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                    ></div>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default ChonLichKham;
