import classNames from 'classnames/bind';
import styles from './TraCuuThongTin.module.scss';
import medical_insurance from './medical_insurance.jpg';
import { UserContext } from '../../components/UserContext';
import { useContext } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import $ from 'jquery';
import Table from 'react-bootstrap/Table';
import ChiTietHoSo from './ChiTietHoSo';
const cx = classNames.bind(styles);

export default function HoSoBenhNhan() {
    const [user, setUser] = useContext(UserContext);
    const [patient, setPatient] = useState([{}]);
    const [chosenPatient, setChosenPatient] = useState();
    
    useEffect(() => {
        getPatients();
    },[]);

    const getPatients = () => {
        const sendData = {
            userID: user.key
        }
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/lookup`, sendData)
        .then((result) => {
            setPatient(result.data);
            console.log(result.data);
            console.log(chosenPatient);
        })
        .catch((error) => {
            console.log(error.response);
        });
    }

    const handleDelete = (e) => {
        //e.preventDefault();
        axios.delete(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/delete/${e.id}`)
        .then((result) => {
            getPatients();
            console.log(result.data);
        })
    }



    return (
        <div id = "RecordPatient">
        {chosenPatient ? (<ChiTietHoSo element={chosenPatient}></ChiTietHoSo>) :
        (
        <div>
            <div data-test="row" class="row">
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
            </div>
            <div data-test="tabContent" className={cx("tab-content", "tabcontent")}>
                <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane active")}>
                    <div data-test="animation" className={cx("animated", "fadeIn", "no_noti_inform")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                        {patient && patient.length === 0 ? (
                            <div>
                            <p>Bạn chưa có hồ sơ bệnh nhân. Vui lòng tạo mới hồ sơ để được đặt khám.</p>
                            <p className={cx("subMessageGuide")}>Vui lòng liên hệ bộ phận CSKH (19001080) nếu không tìm thấy hồ sơ bệnh nhân đã tạo</p>
                            <div className={cx("not_found_result")}>
                                <img src={medical_insurance} style={{width: '500px'}}/>
                            </div>
                            </div>
                        ) :
                        (patient && patient?.map((element,idx) => (
                        <ul data-test="list-group" className={cx("list-group", "list_group", "list_group_parent")} key={idx}>
                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                <div data-test="card" className={cx("card", "style_card")}>
                                    <div data-test="card-body" className={cx("card-body", "style_card_body")}>
                                    
                                        <ul data-test="list-group" className={cx("list-group", "list_group", "sub_list_group")}>
                                        <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                <div className={cx("column1", "blue")}>
                                                    <i class="far fa-user-circle"></i>{element.name}
                                                </div>
                                                <div className={cx("view_all")} onClick={() => setChosenPatient(element)}>Xem thêm</div>
                                            </li>
                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                <div className={cx("column1")}>
                                                    <i class="far-regular fa-mobile-button"></i>Điện thoại
                                                </div>
                                                <div className={cx("column2")}>{element.phone}
                                                </div>
                                            </li>
                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                <div className={cx("column1")}>
                                                    <i class="far-regular fa-location-dot"></i>Địa chỉ
                                                </div>
                                                <div className={cx("column2")}>{element.address}</div>
                                            </li>
                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                <div className={cx("action_edit_remove")}>
                                                    <button data-test="button" type="button" className={cx("btn-default btn", "Ripple-parent", "button", "remove", "small")} onClick={()=>handleDelete(element)}>
                                                        <i class="fal fa-trash-alt"></i> Xoá hồ sơ
                                                        <div data-test="waves" className={cx("Ripple ")} style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}>
                                                        </div>
                                                    </button>
                                                    <button data-test="button" type="button" className={cx("btn-default btn", "Ripple-parent", "button", "edit", "small")}>
                                                    <Link to={`/sua-ho-so/${element.id}`}><i class="fal fa-edit"></i> Sửa hồ sơ </Link>
                                                        <div data-test="waves" className={cx("Ripple ")} style={{top: `0px`, left: `0px`, width: `0px`, height: `0px`}}></div>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    
                                    </div>
                                </div>
                            </li>
                        </ul>
                        )))
                        }
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>


        
    );
}
