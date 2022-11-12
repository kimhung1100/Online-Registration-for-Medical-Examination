import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import whiteLogo from '../../../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div class="navbar navbar-expand-lg" className={cx('logo')}>
                        <img src={whiteLogo} className={styles.logo}></img>
                        <ul>
                            <li>
                                <a href="./">Trang chủ</a>
                            </li>
                            <li>
                                <a href="./gioi-thieu">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="./chuyen-khoa">Chuyên khoa</a>
                            </li>
                            <li>
                                <a href="./quy-trinh">Quy trình</a>
                            </li>
                            <li>
                                <a href="./thac-mac">Thắc mắc</a>
                            </li>
                            <li>
                                <a href="./lien-he">Liên hệ</a>
                            </li>
                        </ul>
                        <div class="col-md-3 text-end bottomright" className={cx('buttonLogin')}>
                            <a type="button" class="btn btn-primary mx-2 px-4" href="./dang-ky">
                                Đăng ký
                            </a>
                            <a type="button" class="btn btn-outline-primary me-2 px-3" href="./dang-nhap">
                                Đăng nhập
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
