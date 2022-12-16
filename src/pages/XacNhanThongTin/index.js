import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './XacNhanThongTin.module.scss';
const cx = classNames.bind(styles);
function XacNhanThongTin() {
    const navigate = useNavigate();
    
    return (
        <div className={cx('style_wrapper_content')}>
            <div className={cx('style_bg_breakcum')}>
                <div data-test="container" className={cx('container')}>
                    <div data-test="row" className={cx('row')}>
                        <div data-test="col" className={cx('col-12')}>
                            <div className={cx('style_wrap_mdbreadcrumb', 'style_head')}>
                                <nav data-test="breadcrumb">
                                    <ol style={{margin: '0 40rem'}} className={cx('breadcrumb')}>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            <a href="../">Trang chủ</a>
                                        </li>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            Xác nhận thông tin
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div data-test = "container" className='container'>
                    <div data-test="row" className={cx('row row_mobile')}>
                        <div data-test="col" className={cx('col-md-12', 'col-lg-3')}>
                            <div style={{border: '0'}} data-test="card" className={cx('card', 'style_panels')}>
                                <div data-test="card-header" className={cx('card-header', 'style_panels_header')}>Thông tin bệnh nhân</div>
                                <div data-test="card-body" className={cx('card-body', 'mb-4', 'style_card_body')}>
                                    <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                            <i className={cx('far', 'fa-user-circle')}></i>
                                            Dương Huỳnh Anh Đức
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                            <i className={cx('far', 'fa-mobile-alt')}></i>
                                            0794763040
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                            <i className={cx('far', 'fa-map-marker')}></i>
                                            107/18/5 Huỳnh Khương An, phường 05, Quận Gò Vấp, Thành phố Hồ Chí Minh
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div data-test="col" className={cx('col-md-12', 'col-lg-9')}>
                            <div style={{border: 'none'}} data-test="card" className={cx('card', 'style_panels', 'style_panel_mobile')}>
                                <div data-test="card-header" className={cx('card-header', 'style_panels_header')}>
                                    <h2 className={cx('style_title_component', 'style_title_choose_date', 'style_space_between', 'style_title_header_mobile')}>
                                        <span>Xác nhận thông tin khám</span>
                                    </h2>
                                </div>
                                <div data-test="card-body" className={cx('card-body', 'style_card_body')}>
                                    <div data-test="table" className={cx('table-responsive')}>
                                        <table className={cx('table', 'style_tableResponsive')}>
                                            <thead data-test="table-head">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Chuyên khoa</th>
                                                    <th>Dịch vụ</th>
                                                    <th>Bác sĩ</th>
                                                    <th>Giờ khám</th>
                                                    <th>Tiền khám</th>
                                                </tr>
                                            </thead>
                                            <tbody data-test="table-body">
                                                <tr>
                                                    <td>1</td>
                                                    <td>PHẪU THUẬT HÀM MẶT - RHM</td>
                                                    <td>Khám dịch vụ</td>
                                                    <td>Đặng Vũ Thảo Vy</td>
                                                    <td>
                                                        10/12
                                                        10:00
                                                    </td>
                                                    <td>150.000 đ</td>
                                                    <td className={cx('d-none')}>0 đ</td>
                                                    <td>
                                                        <button data-test="button" type="button" className={cx('btn-flat', 'btn', 'Ripple-parent', 'style_button')}>
                                                            <div>
                                                                <i className={cx('far fa-trash-alt')}></i>
                                                                Xóa
                                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                                            </div>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div style={{margin: '1.6rem 0 0 0'}} data-test="card-header" className={cx('card-header', 'style_panels_header', 'd-none', 'd-lg-block')}>
                                    <div>Thông tin bệnh nhân</div>
                                </div>
                                <div data-test="card-body" className={cx('card-body', 'style_card_body', 'd-none', 'd-lg-block')}>
                                    <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-user')}></i>
                                                Họ và tên &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                <strong>DƯƠNG HUỲNH ANH ĐỨC</strong>
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-venus-mars')}></i>
                                                Giới tính &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                Nam
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-calendar-alt')}></i>
                                                Ngày sinh &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                01/02/2002
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-id-card')}></i>
                                                CMND &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                079202001171
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-at')}></i>
                                                Email &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                anhducduonghuynh@gmail.com
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-users')}></i>
                                                Dân tộc &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                Kinh
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-credit-card')}></i>
                                                Mã số BHYT &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                Chưa cập nhật
                                            </div>
                                        </li>
                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'half')}>
                                            <div className={cx('style_column1')}>
                                                <i style={{fonWeight: '600'}} className={cx('fa-regular', 'fa-map-marker')}></i>
                                                Địa chỉ &nbsp;
                                            </div>
                                            <div className={cx('style_column2')}>
                                                107/18/5 Huỳnh Khương An, Phường 05, Quận Gò Vấp, Thành phố Hồ Chí Minh
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('style_next_prev')}>
                                    <button style={{backgroundColor:'#fff'}} data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button')}>
                                        <div>Quay lại</div>
                                        <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                    </button>
                                    <ul className={cx('list-unstyle', 'list-inline', 'm-0', 'p-0')}>
                                        <li className={cx('list-inline-item', 'm-0', 'pr-3')}>
                                            <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create')}>
                                                <div>Thêm chuyên khoa</div>
                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </button>
                                        </li>
                                        <li className={cx('list-inline-item', 'm-0')}>
                                            <button onClick={() => {
                                                navigate('../thanh-toan');
                                            }}
                                            data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create', 'style_buttonArrow')}>
                                                <div>Xác nhận
                                                    <i style={{fontWeight: '600'}} className={cx('fa-regular', 'fa-arrow-right')}></i>
                                                </div>
                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default XacNhanThongTin;
