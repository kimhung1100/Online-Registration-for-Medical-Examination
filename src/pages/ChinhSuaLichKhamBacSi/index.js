import classNames from 'classnames/bind';

import styles from './ChinhSuaLichKhamBacSi.module.scss';
const cx = classNames.bind(styles);
function ChinhSuaLichKhamBacSi() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('style__banner d-none d-lg-block')}>
                <div data-test="view" className={cx('header')}>
                    <div data-test="container3" className={cx('container3')}>
                        <div data-test="row" className={cx('row')}>
                            <div data-test="col" className={cx('col')}>
                                <div>
                                    <h1 className={cx('header__page')}>
                                        <span>Sửa lịch khám</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="searchbar">
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
                                <div className={cx('ChonBacSi_thong_tin_bac_si')}>
                                    <p style={{color: '#00559c', fontWeight: '800'}}>
                                        <i class="fa-solid fa-user-doctor"></i>
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-venus-mars"></i>Giới tính:
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-stethoscope"></i>Chuyên khoa: 
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-calendar-days"></i>Lịch khám:
                                    </p>
                                    <p>
                                        <i class="fa-solid fa-dollar-sign"></i>Giá khám:
                                    </p>
                                </div>
                        </ul>
                        
                    </div>
                </div>
                </div>
                <div className={cx('cover')}>
                    <p>Lịch khám</p>
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
        </div>
    );
}

export default ChinhSuaLichKhamBacSi;
