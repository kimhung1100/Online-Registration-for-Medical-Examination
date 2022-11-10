import Header from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';
import classNames from 'classnames/bind';
import styles from './NotLinearBar.module.scss';

const cx = classNames.bind(styles);
function NotLinearBar({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default NotLinearBar;
