import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './QuanLyTaiKhoan.module.scss';
import { UserContext } from '../../components/UserContext';
import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function QuanLyTaiKhoan() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [QuanLyTaiKhoan, setQuanLyTaiKhoan] = useState(false);
    const [ThongKeLuotTruyCap, setThongKeLuotTruyCap] = useState(false);

    const handleThongKeLuotTruyCap = () => {
        setThongKeLuotTruyCap = true;
        setQuanLyTaiKhoan = false;
    };
    const handleQuanLyTaiKhoan = () => {
        setQuanLyTaiKhoan = true;
        setThongKeLuotTruyCap = false;
    };

    return (
        <div className={cx('wrapper')}>
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
                                                            Xin ch??o!, administrator
                                                            <h4>{user.userName}</h4>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider"></hr>
                                                    </li>

                                                    <li>
                                                        <button class="dropdown-item" type="button">
                                                            Th??ng b??o
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
                                                            Tho??t
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
                                                    ????ng nh???p
                                                    <i class="fa-solid fa-bars"></i>
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
                                                onClick={handleQuanLyTaiKhoan}
                                                data-test="nav-item"
                                                className={cx(
                                                    'nav-item',
                                                    QuanLyTaiKhoan && 'style_active',
                                                    QuanLyTaiKhoan && 'undefined',
                                                )}
                                            >
                                                <Link
                                                    to="/thong-ke-phieu-kham"
                                                    aria-current="page"
                                                    className={cx(
                                                        'nav-link',
                                                        'Ripple-parent',
                                                        QuanLyTaiKhoan && 'active',
                                                    )}
                                                    data-test="nav-link"
                                                >
                                                    Qu???n l?? t??i kho???n
                                                    <div
                                                        data-test="waves"
                                                        class="Ripple "
                                                        style={{ top: '0px', left: '0px', width: '0px', height: '0px' }}
                                                    ></div>
                                                </Link>
                                            </li>
                                            <li
                                                onClick={handleThongKeLuotTruyCap}
                                                data-test="nav-item"
                                                className={cx(
                                                    'nav-item',
                                                    ThongKeLuotTruyCap && 'style_active',
                                                    ThongKeLuotTruyCap && 'undefined',
                                                )}
                                            >
                                                <Link
                                                    to="/thong-ke-phieu-kham"
                                                    aria-current="page"
                                                    className={cx(
                                                        'nav-link',
                                                        'Ripple-parent',
                                                        ThongKeLuotTruyCap && 'active',
                                                    )}
                                                    data-test="nav-link"
                                                >
                                                    Th???ng k?? l?????t truy c???p
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
                                        <span className={cx('style_txtSup')}>T???ng ????i ?????t l???ch kh??m</span>
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

            <div className={cx('style__banner d-none d-lg-block')}>
                <div data-test="view" className={cx('header')}>
                    <div data-test="container3" className={cx('container3')}>
                        <div data-test="row" className={cx('row')}>
                            <div data-test="col" className={cx('col')}>
                                <div>
                                    <h1 className={cx('header__page')}>
                                        <span>Qu???n l?? t??i kho???n</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class={cx('list')}>DANH S??CH T??I KHO???N</h2>
            <div className={cx('filter-cover')}>
                <div className={cx('filter')}>
                    <div className={cx('selection')}>
                        <div className={cx('match')}>
                            <p>Match</p>
                        </div>
                        <form action="http://httpbin.org/post" method="post">
                            <select data-placeholder="type or select..." multiple class="chosen-select" name="test">
                                <option value=""></option>
                                <option>Kh??ch h??ng</option>
                                <option>Nh??n vi??n qu???n l?? h??? th???ng</option>
                                <option>Nh??n vi??n qu???n tr??? l???ch kh??m</option>
                                <option>Nh??n vi??n t?? v???n</option>
                                <option>Gi??m ?????c</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className={cx('toolbox')}>
                    <div className={'clear-button'} id="undo">
                        <p>clear filters</p>
                    </div>
                    <div className={cx('submit-button')} id="submit">
                        <p>apply filters</p>
                    </div>
                </div>
            </div>
            <table cellspacing="0" cellpadding="0">
                <tr>
                    <th>M?? t??i kho???n</th>
                    <th>H??? v?? t??n</th>
                    <th>Quy???n</th>
                </tr>
                <tr>
                    <td>KH_220002</td>
                    <td>NGUY???N TH??? TRANG</td>
                    <td>Kh??ch h??ng</td>
                </tr>
                <tr>
                    <td>KH_220003</td>
                    <td>NG?? ANH LONG</td>
                    <td>Kh??ch h??ng</td>
                </tr>
                <tr>
                    <td>HT_000001</td>
                    <td>PHAN H???NG ?????C</td>
                    <td>Nh??n vi??n qu???n l?? h??? th???ng</td>
                </tr>
                <tr>
                    <td>LK_000001</td>
                    <td>B??I KIM H??NG</td>
                    <td>Nh??n vi??n qu???n tr??? l???ch kh??m</td>
                </tr>
                <tr>
                    <td>GD_000001</td>
                    <td>NGUY???N TH??? MINH CH??U</td>
                    <td>Gi??m ?????c</td>
                </tr>
                <tr>
                    <td>TV_000001</td>
                    <td>NGUY???N HI???N H???I</td>
                    <td>Nh??n vi??n t?? v???n</td>
                </tr>
                <tr>
                    <td>KH_220008</td>
                    <td>B??I H???U ?????C</td>
                    <td>Kh??ch h??ng</td>
                </tr>
                <tr>
                    <td>KH_220009</td>
                    <td>NGUY???N NG???C MAI</td>
                    <td>Kh??ch h??ng</td>
                </tr>
            </table>
            <div className={cx('holder')}>
                <div className={cx('pagination')}>
                    <a class="active" href="#">
                        1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a class="last" href="#">
                        6
                    </a>
                    <a class="next" href="#">
                        next&raquo;
                    </a>
                </div>
                <div className={cx('taotaikhoan')} id="submit">
                    <p>T???o t??i kho???n</p>
                </div>
            </div>
        </div>
    );
}

export default QuanLyTaiKhoan;
