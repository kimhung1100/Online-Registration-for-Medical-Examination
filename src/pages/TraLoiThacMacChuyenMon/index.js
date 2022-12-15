import classNames from 'classnames/bind';
import styles from './TraLoiThacMacChuyenMon.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/UserContext';

import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function TraLoiThacMacChuyenMon() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [thacmacchuyenmon, setthacmacchuyenmon] = useState(false);
    const handleThacMacChuyenMon = () => {
        setthacmacchuyenmon = true;
    };
    return (
        <div className={cx('ThacMacChuyenMon_wrapper')}>
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
                                                onClick={handleThacMacChuyenMon}
                                                data-test="nav-item"
                                                className={cx(
                                                    'nav-item',
                                                    thacmacchuyenmon && 'style_active',
                                                    thacmacchuyenmon && 'undefined',
                                                )}
                                            >
                                                <Link
                                                    to="/thong-ke-phieu-kham"
                                                    aria-current="page"
                                                    className={cx(
                                                        'nav-link',
                                                        'Ripple-parent',
                                                        thacmacchuyenmon && 'active',
                                                    )}
                                                    data-test="nav-link"
                                                >
                                                    Thắc mắc chuyên môn
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
            <div className={cx('ThacMacChuyenMon_container')} class="d-flex justify-content-center">
                <div className={cx('left-side')}>
                    <div class="table table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">DANH MỤC THẮC MẮC</th>
                            </tr>
                        </thead>
                        <div class="list-group" id="list-tab" role="tablist">
                            <a
                                class="list-group-item list-group-item-action active"
                                id="list-home-list"
                                data-bs-toggle="list"
                                href="#list-home"
                                role="tab"
                                aria-controls="list-home"
                            >
                                TẤT CẢ
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-profile-list"
                                data-bs-toggle="list"
                                href="#list-profile"
                                role="tab"
                                aria-controls="list-profile"
                            >
                                Hoá trị
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-messages-list"
                                data-bs-toggle="list"
                                href="#list-messages"
                                role="tab"
                                aria-controls="list-messages"
                            >
                                Huyết học
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Lồng ngực - mạch máu
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Mắt
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Ngoại thần kinh
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Nhi - Tiêm ngừa
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Nội thận
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Nội tiết
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Phổi
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Sản phụ khoa
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Tai mũi họng
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Tâm lý
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('right-side')}>
                    <table class="table table-hover">
                        <thead class="thead">
                            <tr>
                                <th scope="col" className={cx('questionDay')}>
                                    Ngày gửi
                                </th>
                                <th scope="col" className={cx('question')}>
                                    Câu hỏi
                                </th>
                                <th scope="col" className={cx('sender')}>
                                    Người gửi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={cx('not_seen_question')}>
                                <td>
                                    {/* <FontAwesomeIcon icon="fa-solid fa-circle" /> */}
                                    22/10/2022
                                </td>
                                <td>
                                    Tôi năm nay 51 tuổi bị mất ngủ thường xuyên, mỗi đêm chỉ ngủ được 2 giờ đồng hồ, có
                                    đêm thức trắng. Vậy nên khám khoa nào thưa bác sĩ?
                                </td>
                                <td>DƯƠNG HUỲNH ANH ĐỨC</td>
                            </tr>
                            <tr>
                                <td>12/09/2022</td>
                                <td>
                                    trước đây em uống rượu bia bình thường, nhưng sau khi tiêm văcsin covid khoảng thời
                                    gian sau này chỉ cần uống 1 ly rượu hoặc bia vào người là xảy ra hiện tượng đỏ bừng
                                    mặt, đau đầu, sưng bì mặt mắt, khó chịu trong cơ thể, ... thì em bị gì và cần khám ở
                                    chuyên khoa nào ạ?
                                </td>
                                <td>Chien PQ</td>
                            </tr>
                            <tr className={cx('not_seen_question')}>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex flex-wrap" className={cx('footer_right_side')}>
                        <nav aria-label="...">
                            <ul class="pagination pagination-lg">
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">1</span>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        ...
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        11
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* <button class="btn btn-primary btn-lg justify-content-end">Tạo câu hỏi</button> */}
                    </div>

                    {/* <div data-test="card-header" className={cx('card-header', 'style_panels_header')}>
                         , câu hỏi, người gửi
                        <ul class="d-flex flex-wrap">
                            <li class="list-group-item">20/06/2022</li>
                            <div style={{ width: 600 }}>
                                <li class="list-group-item">
                                    Tôi năm nay 51 tuổi bị mất ngủ thường xuyên, mỗi đêm chỉ ngủ được 2 giờ đồng hồ, có
                                    đêm thức trắng. Vậy nên khám khoa nào thưa bác sĩ?
                                </li>
                            </div>

                            <div style={{ width: 200 }}>
                                <li class="list-group-item item_name">Dương Huỳnh Anh Đức</li>
                            </div>
                        </ul> 
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default TraLoiThacMacChuyenMon;
