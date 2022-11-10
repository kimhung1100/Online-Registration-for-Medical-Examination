import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import whiteLogo from '../../../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

// Get the header
var header = document.getElementById('myHeader');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
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
                    <button type="button" href="./dang-ki">
                        Đăng kí
                    </button>
                    <button type="button">Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
