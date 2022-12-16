import classNames from 'classnames/bind';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './ThanhToan.module.scss';
const cx = classNames.bind(styles);

function ThanhToan() {
    const [isActive, setIsActive] = useState({
        id: 'med1',
    })
    useEffect(() => {
        console.log(isActive)
      }, [isActive])
    const hideShowMed = (e) => {
        setIsActive({
          id: e.currentTarget.id,
        })
    }
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const navigate = useNavigate();
    const method1 = () =>{
        setActive1(!active1);
        setActive2(false);
    }

    const method2 = () =>{
        setActive2(!active2);
        setActive1(false);
    }
    // const method1 = useRef(null);
    // const method2 = useRef(null);

    // const methodsArray = [method1, method2];
    // console.log(methodsArray);
    // function showMethod(element) {
    //     for (let i = 0; i < 2; i++) {
    //         if (methodsArray[i].current.classList.contains("style_active")) {
    //             methodsArray[i].current.classList.remove("style_active");
    //         } 
    //         else if (methodsArray[i] == element) { 
    //             element.current.classList.toggle("style_active");
    //         }
    //     }
    // }

    // useEffect(()=>{
    //     // setActive = !active;
    // },[active])

    // const showMethodPayment = event => {
    //     // 👇️ toggle shown state
    //     setActive1(current => !current);
    //     setActive2(false);
    //     // 👇️ or simply set it to true
    //     // setIsShown(true);
    //   };
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
                                                <div className={cx('style_group_payment_item', active1&&'style_active')}>
                                                    <div className={cx('form-check')}>
                                                        <input hidden data-test="input" id='momo' type="radio" className={cx('form-control', 'form-check-input', active1&&'active_circle')} value=""></input>
                                                        <label style={{textDecoration: 'none'}}onClick={method1} className={cx('form-check-label', 'mr-5', 'method1')} for="momo" data-error data-success id='monmo'>
                                                            Thanh toán bằng Ví MoMo
                                                        </label>
                                                    </div>
                                                    <div className={cx('style_list_card')}>
                                                        <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                                            <li data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', active1&&'style_active')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/momo.png' alt='MOMO'></img>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={cx('style_group_payment_item', active2&&'style_active')}>
                                                    <div className={cx('form-check')}>
                                                        <input hidden data-test="input" id='atm' type="radio" className={cx('form-control', 'form-check-input', active2&&'active_circle')} value=""></input>
                                                        <label onClick={method2} className={cx('form-check-label', 'mr-5', 'method2')} for="atm" data-error data-success id='monmo'>
                                                            Thanh toán bằng thẻ ATM nội địa/Internet Banking
                                                        </label>
                                                    </div>
                                                    <div className={cx('style_list_card')}>
                                                        <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                                            <li     id="med1"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med1'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/vietcombank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med2"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med2'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/vietinbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med3"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med3'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/bidv_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med4"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med4'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/agribank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med5"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med5'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/sacombank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med6"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med6'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/techcombank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med7"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med7'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/acb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med8"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med8'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/vpbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med9"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }} data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med9'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/dongabank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med10"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med10'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/shb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med11"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med11'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/eximbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li     id="med12"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med12'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/tpbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med13"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med13'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/ncb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med14"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med14'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/ojb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med15"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med15'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/msbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med16"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med16'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/hdbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med17"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med17'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/namabank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med18"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med18'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/ocb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med19"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med19'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/scb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med20"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med20'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/abb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med21"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med21'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/ivb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med22"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med22'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn/st/bank/saigonbank_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med23"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med23'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/pvcb_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med24"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med24'?'style_active':'')}>
                                                                <img src='https://bo-api.medpro.com.vn:5000/static/images/pk…202022%2014:16:16%20GMT+0700%20(Indochina%20Time)' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med25"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med25'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/sea_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med26"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med26'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/vab_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med27"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med27'?'style_active':'')}>
                                                                <img src='https://bo-api.medpro.com.vn:5000/static/images/pk…202022%2014:30:47%20GMT+0700%20(Indochina%20Time)' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med28"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med28'?'style_active':'')}>
                                                                <img src='https://api-v2.medpro.com.vn:5000/st/bank/bab_logo.png' alt='MOMO'></img>
                                                            </li>
                                                            <li id="med29"
                                                                    onClick={(e) => {
                                                                    hideShowMed(e)
                                                                    }}data-test = "list-group-item" className={cx('list-group-item', 'list-group-item-undefined', isActive.id==='med29'?'style_active':'')}>
                                                                <img src='https://pay.vnpay.vn/images/bank/qr-mbbank.png' alt='MOMO'></img>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-test="col" className={cx('col-md-6')}>
                                            <div className={cx('style_list_group_payment')}>
                                                <div className={cx('style_sub_title')}>
                                                    {/* <i className={cx('fa-regular', 'fa-square-info')}></i> */}
                                                    Thông tin thanh toán
                                                </div>
                                                <ul data-test="list-group" className={cx('list-group', 'style_list_group__C')}>
                                                    <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                        <div className={cx('style_column1')}>
                                                            <i className={cx('fa-solid', 'fa-stethoscope')}></i>
                                                            Chuyên khoa
                                                        </div>
                                                        <div className={cx('style_column2')}>UNG BƯỚU GAN MẬT VÀ GHÉP GAN</div>
                                                    </li>
                                                    <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                        <div className={cx('style_column1')}>
                                                            <i className={cx('fa-solid', 'fa-stethoscope')}></i>
                                                            Dịch vụ
                                                        </div>
                                                        <div className={cx('style_column2')}>Khám dịch vụ</div>
                                                    </li>
                                                    <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                        <div className={cx('style_column1')}>Tiền khám</div>
                                                        <div className={cx('style_column2')}>
                                                            <strong style={{color:'#12263f'}}>
                                                                150.000 VND
                                                            </strong>
                                                        </div>
                                                    </li>
                                                    <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined', 'd-none')}>
                                                        <div className={cx('style_column1')}>Tiền tạm ứng</div>
                                                        <div className={cx('style_column2')}>
                                                            <strong>
                                                                0 VND
                                                            </strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className={cx('style_total_payment')}>
                                                    <ul data-test="list-group" className={cx('list-group', 'style_list_group__C')}>
                                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                            Tổng tiền khám
                                                            <strong>
                                                                150.000 VND
                                                            </strong>
                                                        </li>
                                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                            Phí tiện lợi
                                                            <strong>
                                                                0 VND
                                                            </strong>
                                                        </li>
                                                        <li data-test="list-group-item" className={cx('list-group-item', 'list-group-item-undefined')}>
                                                            Tổng cộng
                                                            <strong>
                                                                150.000 VND
                                                            </strong>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                
                                        </div>
                                        
                                    </div>
                                        <div className={cx('style_next_prev')}>
                                            <button onClick={() => {
                                            navigate('../xac-nhan-thong-tin');
                                            }} style={{backgroundColor:'#fff', border:'none'}} data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button')}>
                                                <div>Quay lại</div>
                                                <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                            </button>
                                            <ul className={cx('list-unstyle', 'list-inline', 'm-0', 'p-0')}>
                                                <li className={cx('list-inline-item', 'm-0', 'pr-3')}>
                                                    <button style={{border: 'none'}} data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create')}>
                                                        <div>Thêm chuyên khoa</div>
                                                        <div data-test="waves" className={cx('Ripple', 'Ripple-outlin')} style={{top: '0px', left: '0px', width: '0px', height: '0px'}}></div>
                                                    </button>
                                                </li>
                                                <li className={cx('list-inline-item', 'm-0')}>
                                                    <button style={{border: 'none'}} data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create', 'style_buttonArrow')}>
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
        </div>
    );
}

export default ThanhToan;
