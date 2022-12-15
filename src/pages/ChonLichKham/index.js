import classNames from 'classnames/bind';
import { CartXFill } from 'react-bootstrap-icons';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf';
import styles from './ChonLichKham.module.scss';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function ChonLichKham() {
    let navigate = useNavigate();
    // const chooseHour = (e) => {
    //     navigate('/chon-lich-kham', { state: { schedule: e.target.value } });
    // };
    const location = useLocation();
    console.log(location.state);

    return (
        <div className={cx('wrapper')}>
            <div class={cx('style__banner d-none d-lg-block')}>
                <div data-test="view" className={cx('header')}>
                    <div data-test="container" className={cx('container')}>
                        <div data-test="row" className={cx('row')}>
                            <div data-test="col" className={cx('col')}>
                                <div>
                                    <h1 className={cx('header__page')}>
                                        <span>Chọn lịch khám</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapp')}>
                <div className={cx('container1')}>
                    <p>Thông tin khám</p>
                    <div className={cx('content')}>
                        <p>
                            <i className={cx('fa-regular', 'fa-hospital')}></i> Bệnh viện ABCD
                        </p>
                        <p>
                            <i class="fa-solid fa-phone"></i>: 0794763040
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
                    </div>
                </div>
                <div className={cx('cover')}>
                    <p>Chọn ngày khám</p>
                    <div className={cx('calendar')}>
                        <div className={cx('month')}>
                            <a href="#" className={cx('nav')}>
                                <i className={cx('fa fa-arrow-left')}></i>
                            </a>
                            <div>
                                Tháng 12 - <span className={cx('year')}>2022</span>
                            </div>
                            <a href="#" className={cx('nav')}>
                                <i className={cx('fa fa-arrow-right')}></i>
                            </a>
                        </div>
                        <div className={cx('days')}>
                            <span>CN</span>
                            <span>Hai</span>
                            <span>Ba</span>
                            <span>Tư</span>
                            <span>Năm</span>
                            <span>Sáu</span>
                            <span>Bảy</span>
                        </div>
                        <div className={cx('dates')}>
                            <button className={cx('no')} disabled>
                                <time>1</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>2</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>3</time>
                            </button>
                            <button className={cx('today')}>
                                <time>4</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>5</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>6</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>7</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>8</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>9</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>10</time>
                            </button>
                            <button>
                                <time>11</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>12</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>13</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>14</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>15</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>16</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>17</time>
                            </button>
                            <button>
                                <time>18</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>19</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>20</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>21</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>22</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>23</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>24</time>
                            </button>
                            <button>
                                <time>25</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>26</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>27</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>28</time>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <form className={cx('form')}>
                <h2>Buổi sáng</h2>
                <div className={cx('switch-field')}>
                    <input type="radio" id="radio-1" name="switch-two" value="7-8" />
                    <label for="radio-1">07:00 - 08:00</label>
                    <input type="radio" id="radio-2" name="switch-two" value="8-9" />
                    <label for="radio-2">08:00 - 09:00</label>
                    <input type="radio" id="radio-3" name="switch-two" value="9-10" />
                    <label for="radio-3">09:00 - 10:00</label>
                    <input type="radio" id="radio-4" name="switch-two" value="10-11" />
                    <label for="radio-4">10:00 - 11:00</label>
                </div>
                <h2>Buổi chiều</h2>
                <div class={cx('switch-field')}>
                    <input type="radio" id="radio-5" name="switch-two" value="13-14" />
                    <label for="radio-5">13:00 - 14:00</label>
                    <input type="radio" id="radio-6" name="switch-two" value="14-15" />
                    <label for="radio-6">14:00 - 15:00</label>
                    <input type="radio" id="radio-7" name="switch-two" value="15-16" />
                    <label for="radio-7">15:00 - 16:00</label>
                    <input type="radio" id="radio-8" name="switch-two" value="16-17" />
                    <label for="radio-8">16:00 - 17:00</label>
                </div>
                <div class={cx('xacnhan')}>
                    <Link to="/xac-nhan-thong-tin">
                        <button>Xác nhận</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default ChonLichKham;
