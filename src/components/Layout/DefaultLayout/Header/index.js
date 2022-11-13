import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import whiteLogo from '../../../../assets/images/white_logo.jpg';
import { useState } from 'react';
const cx = classNames.bind(styles);


function Header() {
    const [trangchu,setTrangchu] = useState(true)
    const [gioithieu,setGioithieu] = useState(false)
    const [chuyenkhoa,setChuyenkhoa] = useState(false)
    const [quytrinh,setQuytrinh] = useState(false)
    const [thacmac,setThacmac] = useState(false)
    const [lienhe,setLienhe] = useState(false)

    const handleTrangchu = () => {
        setTrangchu = true;
        setGioithieu = false;
        setChuyenkhoa = false;
        setQuytrinh = false;
        setThacmac = false;
        setLienhe = false;
    }

    const handleGioithieu = () => {
        setTrangchu = false;
        setGioithieu = true;
        setChuyenkhoa = false;
        setQuytrinh = false;
        setThacmac = false;
        setLienhe = false;
    }

    const handleChuyenkhoa = () => {
        setTrangchu = false;
        setGioithieu = false;
        setChuyenkhoa = true;
        setQuytrinh = false;
        setThacmac = false;
        setLienhe = false;
    }
    const handleQuytrinh = () => {
        setTrangchu = false;
        setGioithieu = false;
        setChuyenkhoa = false;
        setQuytrinh = true;
        setThacmac = false;
        setLienhe = false;
    }
    const handleThacmac = () => {
        setTrangchu = false;
        setGioithieu = false;
        setChuyenkhoa = false;
        setQuytrinh = false;
        setThacmac = true;
        setLienhe = false;
    }
    const handleLienhe = () => {
        setTrangchu = false;
        setGioithieu = false;
        setChuyenkhoa = false;
        setQuytrinh = false;
        setThacmac = false;
        setLienhe = true;
    }
    return (
        <div data-test='container' className={cx('container-fluid', 'style_Menutop')} style={{padding: '0'}}>
            <div data-test='animation' className={cx('animated', 'fadeIn', 'style_header', 'style_header_classic', 'd-none', 'd-lg-block')} /*style={{animationIterationCount: '1', visibility: 'visible', animationName: 'fadeIn'}}*/>
                <div className={cx('style_header_content_normal')}>
                    <div className={cx('style_header_brand')}>
                        <img src={whiteLogo} alt='the group' className={cx('style_logoDefault')}></img>
                    </div>
                    <nav className={cx('style_navigator')}>
                        <div className={cx('style_nav_info')}>
                            <div className={cx('style_widget')}></div>
                            <ul data-test='list-group' className={cx('list-group', 'style_list_group_dangnhap')}>
                                <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                    <a href='#' className={cx('style_button', 'style_redirect')}>Đăng Nhập</a>
                                </li>
                                <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                    <a className={cx('style_button', 'style_login')} href='#'>Đăng nhập</a>
                                </li>
                                <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                    <a className={cx('style_button', 'style_signup')} href='#'>Đăng ký</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <nav data-test="navbar" className={cx('navbar', 'navbar-expand-lg', 'style_mdbNavbar')} role='navigation'>
                                <button data-test="navbar-toggle" type='button' className={cx('navbar-toggler', 'style_mdbNavbarToggler')}>
                                    <i className='fas fa-bars'></i>
                                </button>
                                <div data-test="collapse" id='navbarCollapse3' className={cx('collapse', 'navbar-collapse', 'style_mdbCollapse')}>
                                    <ul className={cx('navbar-nav', 'justify-content-around', 'w-100', 'style_mdbNavbarNav')}>
                                        <li onClick={handleTrangchu} data-test="nav-item" className={cx('nav-item', trangchu&&'style_active', trangchu&&'undefined')}>
                                            <a href="./" aria-current="page" className={cx('nav-link', 'Ripple-parent', trangchu&&'active')} data-test='nav-link'>
                                                Trang chủ
                                                <div data-test="waves" class="Ripple " style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </a>
                                        </li>
                                        <li onClick={handleGioithieu} data-test="nav-item" className={cx('nav-item', gioithieu&&'style_active', gioithieu&&'undefined')} >
                                            <a href="./gioi-thieu" aria-current="page" className={cx('nav-link', 'Ripple-parent', gioithieu&&'active')} data-test='nav-link'>
                                                Giới thiệu
                                                <div data-test="waves" class="Ripple " style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </a>
                                        </li>
                                        <li onClick={handleChuyenkhoa} data-test="nav-item" className={cx('nav-item', chuyenkhoa&&'style_active', chuyenkhoa&&'undefined')}>
                                            <a href="./chuyen-khoa" aria-current="page" className={cx('nav-link', 'Ripple-parent', chuyenkhoa&&'active')} data-test='nav-link'>
                                                Chuyên khoa
                                                <div data-test="waves" class="Ripple " style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </a>
                                        </li>
                                        <li onClick={handleQuytrinh} data-test="nav-item" className={cx('nav-item', quytrinh&&'style_active', quytrinh&&'undefined')}>
                                            <a href="./quy-trinh" aria-current="page" className={cx('nav-link', 'Ripple-parent', quytrinh&&'active')} data-test='nav-link'>
                                                Quy trình
                                                <div data-test="waves" class="Ripple " style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </a>
                                        </li>
                                        <li onClick={handleThacmac} data-test="nav-item" className={cx('nav-item', thacmac&&'style_active', thacmac&&'undefined')}>
                                            <a  aria-current="page" className={cx('nav-link', 'Ripple-parent', thacmac&&'active')} data-test='nav-link' href="./thac-mac">
                                                Thắc mắc
                                                <div data-test="waves" class="Ripple " style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </a>
                                        </li>
                                        <li onClick={handleLienhe} data-test="nav-item" className={cx('nav-item', lienhe&&'style_active', lienhe&&'undefined')}>
                                            <a href="./lien-he" aria-current="page" className={cx('nav-link', 'Ripple-parent', lienhe&&'active')} data-test='nav-link'>
                                                Liên hệ
                                                <div data-test="waves" class="Ripple " style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </a>
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
                                    <a target={'_blank'} rel = 'noopener noreferrer'>
                                        <img src='' alt='The Group'></img>
                                    </a>
                                </div>
                                <div className={cx('style_info')}>
                                    <span className={cx('style_txtSup')}>Tổng đài đặt lịch khám</span>
                                    <a className={cx('style_dot')} href="tel: 1900-1080">1900-1080</a>
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

export default Header;
