import classNames from 'classnames/bind';
import { CartXFill } from 'react-bootstrap-icons';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf'
import styles from './ChonLichKham.module.scss';
const cx = classNames.bind(styles);
function ChonLichKham() {
    return (
        <div className={cx("wrapper")}>
        <div class={cx("style__banner d-none d-lg-block")}>
            <div data-test="view" className={cx("header")}>
                <div data-test="container" className={cx("container")}>
                    <div data-test="row" className={cx("row")}>
                        <div data-test="col" className={cx("col")}>
                            <div>
                                <h1 className={cx("header__page")}>
                                    <span>Chọn lịch khám</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={cx("wrapp")}>
            <div className={cx("container1")}>
                <p>Thông tin khám</p>
                <div className={cx("content")}>
                    <p>Bệnh viện ABCD</p>
                    <p>SĐT: 0794763040</p>
                    <p>Chuyên khoa: CHĂM SÓC GIẢM NHẸ</p>
                    <p>Bác sĩ: Dương Huỳnh Anh Đức</p>
                    <p>Dịch vụ: Khám dịch vụ</p>
                </div>
            </div>
            <div className={cx("cover")}>
                <p>Chọn ngày khám</p>
                <div className={cx("calendar")}>
                    <div className={cx("month")}><a href="#" className={cx("nav")}><i className={cx("fa fa-arrow-left")}></i></a>
                        <div>Tháng 02 - <span className={cx("year")}>2023</span></div><a href="#" className={cx("nav")}><i
                                className={cx("fa fa-arrow-right")}></i></a>
                    </div>
                    <div className={cx("days")}>
                        <span>CN</span>
                        <span>Hai</span>
                        <span>Ba</span>
                        <span>Tư</span>
                        <span>Năm</span>
                        <span>Sáu</span>
                        <span>Bảy</span>
                    </div>
                    <div className={cx("dates")}>
                        <button>
                            <time>1</time>
                        </button>
                        <button>
                            <time>2</time>
                        </button>
                        <button>
                            <time>3</time>
                        </button>
                        <button className={cx("today")}>
                            <time>4</time>
                        </button>
                        <button>
                            <time>5</time>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <form className={cx("form")}>
            <h2>Buổi sáng</h2>
            <div className={cx("switch-field")}>
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
            <div class={cx("switch-field")}>
                <input type="radio" id="radio-5" name="switch-two" value="13-14" />
                <label for="radio-5">13:00 - 14:00</label>
                <input type="radio" id="radio-6" name="switch-two" value="14-15" />
                <label for="radio-6">14:00 - 15:00</label>
                <input type="radio" id="radio-7" name="switch-two" value="15-16" />
                <label for="radio-7">15:00 - 16:00</label>
                <input type="radio" id="radio-8" name="switch-two" value="16-17" />
                <label for="radio-8">16:00 - 17:00</label>
            </div>
        </form>
    </div>
    );
}

export default ChonLichKham;
