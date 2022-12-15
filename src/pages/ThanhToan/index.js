import classNames from 'classnames/bind';

import styles from './ThanhToan.module.scss';
const cx = classNames.bind(styles);
function ThanhToan() {
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
                                            Thanh toán
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
                                        <span>Chọn phương thức thanh toán</span>
                                    </h2>
                                </div>
                                <div data-test="card-body" className={cx('card-body', 'style_card_body')}>
                                    <div data-test="row" className={cx('row')}>
                                        <div data-test="col" className={cx('col-md-6')}>
                                            <div>
                                                <div className={cx('style_group_payment_item', 'style_active')}>
                                                    <div className={cx('form-check')}>
                                                        <input data-test="input" id='momo' type="radio" className={cx('form-control', 'form-check-input')} value=""></input>
                                                        <label className={cx('form-check-label', 'mr-5')} for="momo" data-error data-success id='monmo'>
                                                            Thanh toán bằng Ví MoMo
                                                        </label>
                                                    </div>
                                                    <div className={cx('style_list_card')}>
                                                        <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/momo.png' alt='MOMO'></img>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={cx('style_group_payment_item', 'style_active')}>
                                                    <div className={cx('form-check')}>
                                                        <input data-test="input" id='atm' type="radio" className={cx('form-control', 'form-check-input')} value=""></input>
                                                        <label className={cx('form-check-label', 'mr-5')} for="atm" data-error data-success id='monmo'>
                                                            Thanh toán bằng thẻ ATM nội địa/Internet Banking
                                                        </label>
                                                    </div>
                                                    <div className={cx('style_list_card')}>
                                                        <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/vietcombank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/vietinbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/bidv_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/agribank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/sacombank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/techcombank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/acb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/vpbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/dongabank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/shb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/eximbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/tpbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/ncb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/ojb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/msbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/hdbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/namabank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/ocb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/scb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/abb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/ivb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/saigonbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/pvcb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://bo-api.medpro.com.vn:5000/static/images/pk…202022%2014:16:16%20GMT+0700%20(Indochina%20Time)' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/sea_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/vab_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://bo-api.medpro.com.vn:5000/static/images/pk…202022%2014:30:47%20GMT+0700%20(Indochina%20Time)' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/bab_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                                <img src='https://pay.vnpay.vn/images/bank/qr-mbbank.png' alt='MOMO'></img>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-test="col" className={cx('col-md-6')}>
                                            
                                        </div>
                                    </div>
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
                                            <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create', 'style_buttonArrow')}>
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

export default ThanhToan;
