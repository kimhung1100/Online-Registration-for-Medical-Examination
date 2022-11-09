import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import whiteLogo from '../../../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={whiteLogo} className={styles.logo}></img>
                </div>
            </div>
        </header>
    );
}

export default Header;
