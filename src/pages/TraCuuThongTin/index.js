import classNames from 'classnames/bind';
import styles from './TraCuuThongTin.module.scss';
import medical_insurance from './medical_insurance.jpg';
import $ from "jquery";
import HoSoBenhNhan from './HoSoBenhNhan';
import PhieuKhamBenh from './PhieuKhamBenh';
import ThongBao from './ThongBao';
import LichSu from './LichSu';
import { useState } from 'react';
import { Link } from "react-router-dom";
import React, { useEffect} from "react";
import axios from 'axios';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
const cx = classNames.bind(styles);

function TraCuuThongTin() {
    const [page, setPage] = useState("HoSoBenhNhan");
//     const [user, setUser] = useContext(UserContext);
//     const [patient, setPatient] = useState([]);
//     useEffect(() => {
//         getPatients();
//     }, [patient]);

//     function getPatients() {
//         //useEffect(() => {
//         const sendData = {
//             userID: user.key
//         }
//         axios.post(`http://localhost/Online-Registration-for-Medical-Examination/src/php/selectPatient.php/patients/`, sendData)
//         .then((result) => {
//             // setPatient({patient:
//             //     [...patient,result.data]}
//             // ); 
//             setPatient([...patient,result.data]);
//             console.log(result.data);
//             console.log(patient);
//             //setPatient([]);
//         })
//         .catch((error) => {
//             console.log(error.response);
//         });
//     }
// //,[patient])

    $(".nav-item a").on('click', function() {
        $('.TraCuuThongTin_active__A8PmN').removeClass('TraCuuThongTin_active__A8PmN');
        $(this).addClass("TraCuuThongTin_active__A8PmN");
    });
    return (
        <div className={cx("wrapper_content_lookup")}>
            <div className={cx("bg_breakcum")}>
                <div data-test="container" className={cx("container")}>
                    <div data-test="row" class="row">
                        <div data-test="col" class="col-12">
                            <div className={cx("wrap_mdbreadcrumb", "head")}>
                                <nav data-test="breadcrumb">
                                    <ol className={cx("breadcrumb")}>
                                        <li data-test="breadcrumb-item" className={cx("breadcrumb-item")}>
                                            <Link to="/">Trang chủ</Link>
                                        </li>
                                        <li data-test="breadcrumb-item" className={cx("breadcrumb-item")}>Thông tin tài khoản
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="">
                    <div data-test="container" className="container">
                        <div data-test="row" className="row">
                            <div data-test="col" className="col-md-5 col-lg-4">
                                <a className={cx("add_patients")} href="#">
                                    <i className="fas fa-user-plus"></i>Thêm hồ sơ bệnh nhân
                                </a>
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
                            </div>
                            <div data-test="col" class="col-md-7 col-lg-8">
                                <div data-test="card" className={cx("card", "panels")}>
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
                                                {page === "HoSoBenhNhan" && (<HoSoBenhNhan></HoSoBenhNhan>)}
                                                {page === "PhieuKhamBenh" && (<PhieuKhamBenh></PhieuKhamBenh>)}
                                                {page === "ThongBao" && (<ThongBao></ThongBao>)}
                                                {page === "LichSu" && (<LichSu></LichSu>)}
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
                </div> 
            </div>
        </div>
    );
}

export default TraCuuThongTin;
