import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import LinearBar from './LinearBar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <LinearBar />
            <div className={cx('container')}></div>
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
