import classNames from 'classnames/bind';
import styles from './ChiTietHoSo.module.scss';
import medical_insurance from './medical_insurance.jpg';
import $ from "jquery";
import HoSoBenhNhan from './HoSoBenhNhan';
import PhieuKhamBenh from './PhieuKhamBenh';
import ThongBao from './ThongBao';
import LichSu from './LichSu';
import { useState } from 'react';
import React, { useEffect} from "react";
import axios from 'axios';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);


function ChiTietHoSo({element}) {
    const [page, setPage] = useState(false);
    

    return (
        // <div className={cx("wrapper_content_lookup")}>
        //     <div className={cx("bg_breakcum")}>
        //         <div data-test="container" className={cx("container")}>
        //             <div data-test="row" class="row">
        //                 <div data-test="col" class="col-12">
        //                     <div className={cx("wrap_mdbreadcrumb", "head")}>
        //                         <nav data-test="breadcrumb">
        //                             <ol className={cx("breadcrumb")}>
        //                                 <li data-test="breadcrumb-item" className={cx("breadcrumb-item")}>
        //                                     <Link to="/">Trang chủ</Link>
        //                                 </li>
        //                                 <li data-test="breadcrumb-item" className={cx("breadcrumb-item")}>Hồ Sơ Bệnh Nhân
        //                                 </li>
        //                             </ol>
        //                         </nav>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        page === false ? (
            <div>
                <div className="">
                    <div data-test="container" className="container">
                        <div data-test="row" className="row">
                            {/* <div data-test="col" className="col-md-5 col-lg-4">
                                <Link className={cx("add_patients")} to="/tao-moi-ho-so">
                                    <i className="fas fa-user-plus"></i>Thêm hồ sơ bệnh nhân
                                </Link>
                                <ul data-test="nav" className={cx("nav", "nav_tab_info")}>
                                    <li data-test="nav-item" className={cx("nav-item")}>
                                        <Link aria-current="page" className={cx("nav-link", "Ripple-parent", "active")} data-test="nav-link" role="tab" onClick={() => setPage("HoSoBenhNhan")}>
                                            <i className="far fa-address-book"></i>Hồ sơ bệnh nhân
                                            <div data-test="waves" className={cx("Ripple ")} style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div>
                                        </Link>
                                    </li>
                                    <li data-test="nav-item" className={cx("nav-item")}>
                                        <Link aria-current="page" className={cx("nav-link", "Ripple-parent")} data-test="nav-link" role="tab" onClick={() => setPage("PhieuKhamBenh")}>
                                            <i className="fas fa-file-medical"></i>Phiếu khám bệnh
                                            <div data-test="waves" className={cx("Ripple ")} style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div>
                                        </Link>
                                    </li>
                                    <li data-test="nav-item" className="nav-item">
                                        <Link aria-current="page" className={cx("nav-link", "Ripple-parent")} data-test="nav-link" role="tab" onClick={() => setPage("ThongBao")}>
                                            <i className="far fa-bell"></i>Thông báo 
                                            <div data-test="waves" className={cx("Ripple ")} style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div>
                                        </Link>
                                    </li>
                                    <li data-test="nav-item" className="nav-item">
                                        <Link aria-current="page" className={cx("nav-link", "Ripple-parent")} data-test="nav-link" role="tab" onClick={() => setPage("LichSu")}>
                                            <i className="fa fa-history"></i>Lịch sử thanh toán viện phí
                                            <div data-test="waves" className={cx("Ripple ")} style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div data-test="col" class="col-md-7 col-lg-8">
                                <div data-test="card" className={cx("card", "panels")}> */}
                                    {/* <div data-test="row" class="row">
                                        <div data-test="col" class="col">
                                            <div className={cx("header")}>
                                                <div>
                                                    <div data-test="row" class="row align-items-center">
                                                        <div data-test="col" class="col">
                                                            <h6 className={cx("header_pretitle")}>Patient's records</h6>
                                                            <h1 className={cx("header_title")}>Danh sách hồ sơ bệnh nhân</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div data-test="tabContent" className={cx("tab-content", "tabcontent")}>
                                        <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane active")}>
                                            <div data-test="animation" className={cx("animated", "fadeIn", "no_noti_inform")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}> */}
                                    <div data-test="col" class="col-md-12 col-lg-8">
                                    <div data-test="row" class="row">
                                        <div data-test="col" class="col">
                                            <div className={cx("back_btn")}>
                                                {/* <Link className={cx("button", "back_children")} to="/tra-cuu">Quay lại</Link> */}
                                                <div className={cx("button", "back_children")} onClick={() => setPage(true)}> Quay lại </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-test="card" className={cx("card", "panels")}>
                                        <div data-test="card-header" className={cx("card-header", "text-center", "panels_header")}>
                                            <h2 className={cx("title_component", "title_choose_date", "space_between", "title_user")}>
                                                <span>Chi tiết hồ sơ bệnh nhân</span>
                                            </h2>
                                        </div>
                                        <div data-test="card-body" className={cx("card-body", "card_body")}>
                                            <ul data-test="list-group" className={cx("list-group", "list_group")}>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("column1")}>
                                                        <i className="fal fa-user"></i>Họ và tên &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>
                                                        <strong>{element.name}</strong>
                                                    </div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("column1")}> 
                                                        <i className="fal fa-venus-mars"></i>Giới tính &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>{element.gender}</div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item" ,"list-group-item-undefined")}>
                                                    <div className={cx("column1")}> 
                                                        <i className="fal fa-calendar-alt"></i>Ngày sinh &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>{element.birthday}</div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("column1")}>
                                                        <i className="fal fa-id-card"></i>CMND &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>{element.cmnd}</div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("column1")}>
                                                        <i className="fal fa-at"></i>Email &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>{element.email}</div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("style_column1")}>
                                                        <i className="fal fa-users"></i>Dân tộc &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>{element.ethnicity}</div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("column1")}>
                                                        <i className="fal fa-credit-card"></i>Số điện thoại &nbsp;
                                                    </div>
                                                    <div className={cx("column2")}>{element.phone}</div>
                                                </li>
                                                <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                    <div className={cx("column1")}>
                                                        <i className="fal fa-map-marker"></i>Địa chỉ &nbsp;
                                                    </div>
                                                    <div className={cx("column1")}>{element.address}</div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                            {/* </div>
                                        </div> */}
                                        <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane")}></div>
                                        <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane")}></div>
                                        <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane")}></div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            //     </div> 
            // </div>
        ) : 
        (<HoSoBenhNhan></HoSoBenhNhan>)
        // </div>
    );
}

export default ChiTietHoSo;
