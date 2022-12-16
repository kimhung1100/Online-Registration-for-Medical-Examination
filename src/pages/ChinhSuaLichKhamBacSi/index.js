import classNames from 'classnames/bind';

import styles from './ChinhSuaLichKhamBacSi.module.scss';
const cx = classNames.bind(styles);
function ChinhSuaLichKhamBacSi() {
    const chooseSchedule = (e) => {
        // navigate('/chon-lich-kham', { state: { schedule: e.target.value } });
    };
    return (
        <div id="ChinhSuaLichKhamBacSi">
            <div className={cx('container-left')}>
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
                                    <p style={{ color: '#00559c', fontWeight: '800' }}>
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
                                    <p style={{ color: '#00559c', fontWeight: '800' }}>
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
                                    <p style={{ color: '#00559c', fontWeight: '800' }}>
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
                                    <p style={{ color: '#00559c', fontWeight: '800' }}>
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
                                    <p style={{ color: '#00559c', fontWeight: '800' }}>
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
                                    <p style={{ color: '#00559c', fontWeight: '800' }}>
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
            <div class="float-lg-right  " className={cx('container-right')}>
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
                            <button className={cx('no')}>
                                <time>1</time>
                            </button>
                            <button className={cx('no')}>
                                <time>2</time>
                            </button>
                            <button className={cx('no')}>
                                <time>3</time>
                            </button>
                            <button className={cx('today')}>
                                <time>4</time>
                            </button>
                            <button className={cx('no')}>
                                <time>5</time>
                            </button>
                            <button className={cx('no')}>
                                <time>6</time>
                            </button>
                            <button className={cx('no')}>
                                <time>7</time>
                            </button>
                            <button className={cx('no')}>
                                <time>8</time>
                            </button>
                            <button className={cx('no')}>
                                <time>9</time>
                            </button>
                            <button className={cx('no')}>
                                <time>10</time>
                            </button>
                            <button>
                                <time>11</time>
                            </button>
                            <button>
                                <time>12</time>
                            </button>
                            <button className={cx('no')}>
                                <time>13</time>
                            </button>
                            <button className={cx('no')}>
                                <time>14</time>
                            </button>
                            <button className={cx('no')}>
                                <time>15</time>
                            </button>
                            <button className={cx('no')}>
                                <time>16</time>
                            </button>
                            <button className={cx('no')}>
                                <time>17</time>
                            </button>
                            <button>
                                <time>18</time>
                            </button>
                            <button className={cx('no')}>
                                <time>19</time>
                            </button>
                            <button className={cx('no')}>
                                <time>20</time>
                            </button>
                            <button className={cx('no')}>
                                <time>21</time>
                            </button>
                            <button className={cx('no')}>
                                <time>22</time>
                            </button>
                            <button className={cx('no')}>
                                <time>23</time>
                            </button>
                            <button className={cx('no')}>
                                <time>24</time>
                            </button>
                            <button>
                                <time>25</time>
                            </button>
                            <button className={cx('no')}>
                                <time>26</time>
                            </button>
                            <button className={cx('no')}>
                                <time>27</time>
                            </button>
                            <button className={cx('no')}>
                                <time>28</time>
                            </button>
                            x
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSuaLichKhamBacSi;
