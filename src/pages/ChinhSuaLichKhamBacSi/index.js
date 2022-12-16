import classNames from 'classnames/bind';
import { CartXFill } from 'react-bootstrap-icons';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf';
import styles from './ChinhSuaLichKhamBacSi.module.scss';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

// import styles from './ChinhSuaLichKhamBacSi.module.scss';
const cx = classNames.bind(styles);
function ChinhSuaLichKhamBacSi() {
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
                    {/* <div data-test="container" className={cx('container')}>
                        <div data-test="row" className={cx('row')}>
                            <div data-test="col" className={cx('col')}>
                                <div>
                                    <h1 className={cx('header__page')}>
                                        <span>Chọn lịch khám</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <h1 className={cx('text-center', 'p-5')}>CHỈNH SỬA LỊCH KHÁM</h1>
            <div className={cx('wrapp', 'col-10', 'mb-5')}>
                <div className={cx('container1', 'col-5')}>
                    <div className={cx('choose')}>CHỌN BÁC SĨ
                        <br/>
                        <input type='text' placeholder='Tìm nhanh bác sĩ' className={cx('')}></input>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('d-flex', 'justify-content-around', 'mb-2')}>
                            <div className={cx('search-by')}>HỌC HÀM HỌC VỊ
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                            <div className={cx('search-by')}>CHUYÊN KHOA
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                            <div className={cx('search-by')}>GIỚI TÍNH
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                        </div>
                        <div className={cx('bac-si')}>
                            
                            <button className={cx('cac-bac-si')}>
                                <div style={{color: '#0352cc'}}>
                                    <i class="fa-solid fa-user"></i>
                                    <p style={{color: '#0352cc'}}>TS. Phan Hồng Đức</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-venus-mars"></i>
                                    <p>Giới tính: Nam</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-stethoscope"></i>
                                    <p>Chuyên khoa: TƯ VẤN TÂM LÝ, TIM MẠCH</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <p>Lịch khám: Thứ 2, Thứ 4, Thứ 6</p>
                                </div>
                            </button>
                            <button className={cx('cac-bac-si')}>
                                <div style={{color: '#0352cc'}}>
                                    <i class="fa-solid fa-user"></i>
                                    <p style={{color: '#0352cc'}}>TS. Nguyễn Thị Minh Châu</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-venus-mars"></i>
                                    <p>Giới tính: Nữ</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-stethoscope"></i>
                                    <p>Chuyên khoa: TIM MẠCH, NGOẠI TIM MẠCH, SUY TIM</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <p>Lịch khám: Thứ 5, Thứ 6</p>
                                </div>
                            </button>
                            <button className={cx('cac-bac-si')}>
                                <div style={{color: '#0352cc'}}>
                                    <i class="fa-solid fa-user"></i>
                                    <p style={{color: '#0352cc'}}>TS. Dương Huỳnh Anh Đức</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-venus-mars"></i>
                                    <p>Giới tính: Nam</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-stethoscope"></i>
                                    <p>Chuyên khoa: NHI</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <p>Lịch khám: Thứ 2, Thứ 3</p>
                                </div>
                            </button>
                            <button className={cx('cac-bac-si')}>
                                <div style={{color: '#0352cc'}}>
                                    <i class="fa-solid fa-user"></i>
                                    <p style={{color: '#0352cc'}}>TS. BSCKII Phạm Quốc An</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-venus-mars"></i>
                                    <p>Giới tính: Nam</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-stethoscope"></i>
                                    <p>Chuyên khoa: NGOẠI THẦN KINH</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <p>Lịch khám: Thứ 3</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('cover', 'col-7')}>
                    <div className={cx('choose')}>LỊCH KHÁM</div>
                    <div className={cx('calendar', 'w-100')}>
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
                            <span style={{color: '#d2691e'}}>CN</span>
                            <span>Hai</span>
                            <span>Ba</span>
                            <span>Tư</span>
                            <span>Năm</span>
                            <span>Sáu</span>
                            <span style={{color: '#d2691e'}}>Bảy</span>
                        </div>
                        <div className={cx('dates')}>
                            <button className={cx('no')} disabled>
                                <time>1</time>
                            </button>
                            <button className={cx('today')}>
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
                            <button className={cx('today')}>
                                <time>7</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>8</time>
                            </button>
                            <button className={cx('today')}>
                                <time>9</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>10</time>
                            </button>
                            <button className={cx('today')}>
                                <time>11</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>12</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>13</time>
                            </button>
                            <button className={cx('today')}>
                                <time>14</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>15</time>
                            </button>
                            <button className={cx('today')}>
                                <time>16</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>17</time>
                            </button>
                            <button className={cx('today')}>
                                <time>18</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>19</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>20</time>
                            </button>
                            <button className={cx('today')}>
                                <time>21</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>22</time>
                            </button>
                            <button className={cx('today')}>
                                <time>23</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>24</time>
                            </button>
                            <button className={cx('today')}>
                                <time>25</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>26</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>27</time>
                            </button>
                            <button className={cx('today')}>
                                <time>28</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>29</time>
                            </button>
                            <button className={cx('today')}>
                                <time>30</time>
                            </button>
                            <button className={cx('no')} disabled>
                                <time>31</time>
                            </button>
                        </div>
                        <div className={cx('d-flex', 'justify-content-between', 'mt-5', 'mb-5')}>
                            <div className={cx('option1')}>SÁNG</div>
                            <div style={{color: '#999'}} className={cx('option1', 'bg-light')}>CHIỀU</div>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Phòng 405</option>
                                <option value="1" disabled>Phòng 401</option>
                                <option value="1" disabled>Phòng 402</option>
                                <option value="1">Phòng 403</option>
                                <option value="1">Phòng 404</option>
                            </select>
                        </div>
                        <div className={cx('d-flex', 'justify-content-between', 'mb-5')}>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>TƯ VẤN TÂM LÝ</option>
                                <option value="1">TIM MẠCH</option>
                                <option value="2">CHỌN CHUYÊN KHOA</option>
                            </select>
                            <div style={{color: 'red'}} className={cx('option', 'bg-white')}>
                                <i class="fa-solid fa-pen-to-square"></i>
                                <a href=''>Gán lịch khám</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSuaLichKhamBacSi;
