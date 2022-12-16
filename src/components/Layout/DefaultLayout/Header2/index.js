import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import whiteLogo from '../../../../assets/images/white_logo.jpg';
import { useState } from 'react';
import { UserContext } from '../../../UserContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header2() {
    const [user, setUser] = useContext(UserContext);
    const [NhapHoSoBacSi, setNhapHoSoBacSi] = useState(true);
    const [NhapLichKhamBacSi, setNhapLichKhamBacSi] = useState(false);
    const [ChinhSuaLichKhamBacSi, setChinhSuaLichKhamBacSi] = useState(false);

    const handleNhapHoSoBacSi = () => {
        setNhapHoSoBacSi = true;
        setNhapLichKhamBacSi = false;
        setChinhSuaLichKhamBacSi = false;
    };

    const handleNhapLichKhamBacSi = () => {
        setNhapHoSoBacSi = false;
        setNhapLichKhamBacSi = true;
        setChinhSuaLichKhamBacSi = false;
    };

    const handleChinhSuaLichKhamBacSi = () => {
        setNhapHoSoBacSi = false;
        setNhapLichKhamBacSi = false;
        setChinhSuaLichKhamBacSi = true;
    };

    const navigate = useNavigate();
    return (
        <div data-test="container" className={cx('container-fluid', 'style_Menutop')} style={{ padding: '0' }}>
            <div
                data-test="animation"
                className={cx(
                    'animated',
                    'fadeIn',
                    'style_header',
                    'style_header_classic',
                    'd-none',
                    'd-lg-block',
                )} /*style={{animationIterationCount: '1', visibility: 'visible', animationName: 'fadeIn'}}*/
            >
                <div className={cx('style_header_content_normal')}>
                    <div className={cx('style_header_brand')}>
                        <img src={whiteLogo} alt="the group" className={cx('style_logoDefault')}></img>
                    </div>
                    <nav className={cx('style_navigator')}>
                        <div className={cx('style_nav_info')}>
                            <div className={cx('style_widget')}></div>
                            <ul data-test="list-group" className={cx('list-group', 'style_list_group_dangnhap')}>
                                {user.login ? (
                                    <>
                                        <div class="btn-group">
                                            <button
                                                type="button"
                                                class="btn btn-secondary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={cx('style_button', 'style_signup')}
                                            >
                                                {user.userName}
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        Xin chào!
                                                        <h4>{user.userName}</h4>
                                                    </button>
                                                </li>
                                                <li>
                                                    <hr class="dropdown-divider"></hr>
                                                </li>

                                                <li>
                                                    <button
                                                        onClick={() => {
                                                            navigate('/tra-cuu');
                                                        }}
                                                        class="dropdown-item"
                                                        type="button"
                                                    >
                                                        Hồ sơ bệnh nhân
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        Phiếu khám bệnh
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="dropdown-item" type="button">
                                                        Thông báo
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        class="dropdown-item"
                                                        type="button"
                                                        onClick={() => {
                                                            setUser({});
                                                            navigate('/');
                                                        }}
                                                    >
                                                        Thoát
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <li
                                            data-test="list-group-item"
                                            className={cx('list-group-item', 'list-group-item-undefined')}
                                        >
                                            <Link className={cx('style_button', 'style_login')} to="/dang-nhap">
                                                Đăng nhập
                                                <i class="fa-solid fa-bars"></i>
                                            </Link>
                                        </li>
                                        <li
                                            data-test="list-group-item"
                                            className={cx('list-group-item', 'list-group-item-undefined')}
                                        >
                                            <Link className={cx('style_button', 'style_signup')} to="/dang-ky">
                                                Đăng ký
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div>
                            <nav
                                data-test="navbar"
                                className={cx('navbar', 'navbar-expand-lg', 'style_mdbNavbar')}
                                role="navigation"
                            >
                                <button
                                    data-test="navbar-toggle"
                                    type="button"
                                    className={cx('navbar-toggler', 'style_mdbNavbarToggler')}
                                >
                                    <i class="fa-solid fa-bars"></i>
                                </button>
                                <div
                                    data-test="collapse"
                                    id="navbarCollapse3"
                                    className={cx('collapse', 'navbar-collapse', 'style_mdbCollapse')}
                                >
                                    <ul
                                        className={cx(
                                            'navbar-nav',
                                            'justify-content-around',
                                            'w-100',
                                            'style_mdbNavbarNav',
                                        )}
                                    >
                                        <li
                                            onClick={handleNhapLichKhamBacSi}
                                            data-test="nav-item"
                                            className={cx(
                                                'nav-item',
                                                NhapLichKhamBacSi && 'style_active',
                                                NhapLichKhamBacSi && 'undefined',
                                            )}
                                        >
                                            <Link
                                                to="/nhap-lich-kham-bac-si"
                                                aria-current="page"
                                                className={cx(
                                                    'nav-link',
                                                    'Ripple-parent',
                                                    NhapLichKhamBacSi && 'active',
                                                )}
                                                data-test="nav-link"
                                            >
                                                Nhập lịch khám bác sĩ
                                                <div
                                                    data-test="waves"
                                                    class="Ripple "
                                                    style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                                ></div>
                                            </Link>
                                        </li>
                                        <li
                                            onClick={handleChinhSuaLichKhamBacSi}
                                            data-test="nav-item"
                                            className={cx(
                                                'nav-item',
                                                ChinhSuaLichKhamBacSi && 'style_active',
                                                ChinhSuaLichKhamBacSi && 'undefined',
                                            )}
                                        >
                                            <Link
                                                to="/chinh-sua-lich-kham-bac-si"
                                                aria-current="page"
                                                className={cx(
                                                    'nav-link',
                                                    'Ripple-parent',
                                                    ChinhSuaLichKhamBacSi && 'active',
                                                )}
                                                data-test="nav-link"
                                            >
                                                Chỉnh sửa lịch khám bác sĩ
                                                <div
                                                    data-test="waves"
                                                    class="Ripple "
                                                    style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                                ></div>
                                            </Link>
                                        </li>
                                        <li
                                            onClick={handleNhapHoSoBacSi}
                                            data-test="nav-item"
                                            className={cx(
                                                'nav-item',
                                                NhapHoSoBacSi && 'style_active',
                                                NhapHoSoBacSi && 'undefined',
                                            )}
                                        >
                                            <Link
                                                to="/nhap-ho-so-bac-si"
                                                aria-current="page"
                                                className={cx('nav-link', 'Ripple-parent', NhapHoSoBacSi && 'target')}
                                                data-test="nav-link"
                                            >
                                                Nhập hồ sơ bác sĩ
                                                <div
                                                    data-test="waves"
                                                    class="Ripple "
                                                    style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                                ></div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </nav>
                    <div className={cx('style_menu_extra')}>
                        <div className={cx('style_header_info_text')}>
                            <div className={cx('style_support', 'style_widget')}>
                                <div className={cx('style_iconThegroup')}>
                                    <a target={'_blank'} rel="noopener noreferrer">
                                        <img src="" alt="The Group"></img>
                                    </a>
                                </div>
                                <div className={cx('style_info')}>
                                    <span className={cx('style_txtSup')}>Tổng đài đặt lịch khám</span>
                                    <a className={cx('style_dot')} href="tel: 1900-1080">
                                        1900-1080
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <header className={cx('wrapper')}>
        //     <div className={cx('inner')}>
        //         <div className={cx('logo')}>
        //             <img src={whiteLogo} className={styles.logo}></img>
        //             <ul>
        //                 <li>
        //                     <a href="./">Trang chủ</a>
        //                 </li>
        //                 <li>
        //                     <a href="./gioi-thieu">Giới thiệu</a>
        //                 </li>
        //                 <li>
        //                     <a href="./chuyen-khoa">Chuyên khoa</a>
        //                 </li>
        //                 <li>
        //                     <a href="./quy-trinh">Quy trình</a>
        //                 </li>
        //                 <li>
        //                     <a href="./thac-mac">Thắc mắc</a>
        //                 </li>
        //                 <li>
        //                     <a href="./lien-he">Liên hệ</a>
        //                 </li>
        //             </ul>
        //             <button type="button" href="./dang-ki">
        //                 Đăng kí
        //             </button>
        //             <button type="button">Đăng nhập</button>
        //         </div>
        //     </div>
        // </header>
    );
}

export default Header2;
