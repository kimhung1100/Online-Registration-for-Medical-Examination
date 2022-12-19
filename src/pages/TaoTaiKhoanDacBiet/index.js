import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Taotaikhoandacbiet.module.scss';
const cx = classNames.bind(styles);
function Taotaikhoandacbiet() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('style__banner d-none d-lg-block')}>
                <div data-test="view" className={cx('header')}>
                    <div data-test="container3" className={cx('container3')}>
                        <div data-test="row" className={cx('row')}>
                            <div data-test="col" className={cx('col')}>
                                <div>
                                    <h1 className={cx('header__page')}>
                                        <span>Tạo tài khoản</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('form')}>
                <div className={cx('bar')}>
                    <div className={cx('bar-text')}>
                        <p>TẠO TÀI KHOẢN ĐẶC BIỆT</p>
                    </div>
                </div>
                <div className={cx('input-form')}>
                    <div className={cx('type-form')}>
                        <div className={cx('style_form_group')}>
                            <label for={cx('label_name')}>
                                Họ và tên (Có dấu) <sup>*</sup>
                            </label>
                            <input
                                id="label_name"
                                type="text"
                                className={cx('form-control')}
                                placeholder="Vui lòng nhập tên có dấu..."
                            ></input>
                            <span className={cx('style_input_warning')}></span>
                        </div>
                        <div className={cx('style_form_group')}>
                            <label for="label_name">
                                Tên tài khoản <sup>*</sup>
                            </label>
                            <input
                                id="label_name"
                                type="text"
                                className={cx('form-control')}
                                placeholder="Vui lòng nhập tên tài khoản..."
                            ></input>
                            <span className={cx('style_input_warning')}></span>
                        </div>
                        <div className={cx('style_form_group')}>
                            <label for="label_name">
                                Mật khẩu <sup>*</sup>
                            </label>
                            <input
                                id="label_name"
                                type="password"
                                className={cx('form-control')}
                                placeholder="Vui lòng nhập mật khẩu..."
                            ></input>
                            <span className={cx('style_input_warning')}></span>
                        </div>
                    </div>
                    <div className={cx('choose-form')}>
                        <div className={cx('style-choose')}>
                            <label for={cx('label_name')}>Phòng/ ban:</label>
                            <select name="phong" id="phong">
                                <option value="tuvan">Phòng tư vấn</option>
                                <option value="giamdoc">Phòng giám đốc</option>
                                <option value="quanly">Ban quản lý</option>
                            </select>
                        </div>
                        <div className={cx('style-choose')}>
                            <label for="label_name">Quyền tài khoản:</label>
                            <select name="chucvu" id="chucvu">
                                <option value="tuvan">Nhân viên tư vấn</option>
                                <option value="giamdoc">Giám đốc</option>
                                <option value="lichkham">Nhân viên quản lý lịch khám</option>
                                <option value="hethong">Nhân viên quản lý hệ thống</option>
                            </select>
                        </div>
                        <div className={cx('luuthongtin')}>
                            <Link to="#">
                                <button>Lưu thông tin</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Taotaikhoandacbiet;
