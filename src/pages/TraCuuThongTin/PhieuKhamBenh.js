import classNames from 'classnames/bind';
import styles from './PhieuKhamBenh.module.scss';
import medical_insurance from './medical_insurance.jpg';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
import React, { useEffect, useState} from "react";
import axios from 'axios';
const cx = classNames.bind(styles);

export default function PhieuKhamBenh (){
    const [user,setUser] = useContext(UserContext);
    const [record, setRecord] = useState([]);
    const [selected, setSelected] = useState(false);
    //const [double, setDouble] = useState(false);
    const handleClick = () => {
        setSelected(!selected);
    };

    useEffect(() => {
        getRecords();
    },[]);

    const getRecords = () => {
        const sendData = {
            userID: user.key
        }
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/records.php/record/lookup`, sendData)
        .then((result) => {
            setRecord(result.data);
            console.log(result.data);
        })
        .catch((error) => {
            console.log(error.response);
        });
    }

    return (
    <div id = "MedicalBill">
        
        <div data-test="row" class="row">
            <div data-test="col" class="col">
                <div className={cx("header")}>
                    <div>
                        <div data-test="row" class="row align-items-center">
                            <div data-test="col" class="col">
                                <h6 className={cx("header_pretitle")}>Medical Bills</h6>
                                <h1 className={cx("header_title")}>Danh sách phiếu khám bệnh</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-test="tabContent" className={cx("tab-content", "tabcontent")}>
            <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane active")}>
                {record.length === 0 ? (
                    <div data-test="animation" className={cx("animated", "fadeIn", "no_noti_inform")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                        <p>Bạn chưa có phiếu khám bệnh.</p>
                        <p className={cx("subMessageGuide")}>Vui lòng liên hệ bộ phận CSKH (19001080) nếu không tìm thấy thông tin phiếu khám bệnh</p>
                        <div className={cx("not_found_result")}>
                            <img src={medical_insurance} style={{width: '500px'}}/>
                        </div>
                    </div>
                ) : (
                    <div data-test="animation" className={cx("animated", "fadeIn")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                        <div data-test="animation" className={cx("animated", "fadeIn", "list_medical_user")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                            <div data-test="card" className={cx("card", "card_collapse")}>
                                <div data-test="collapse-header" className={cx("card-header", ((selected === true ) ? "style_card_header_selected" : "style_card_header") )} style={{cursor: "pointer"}} onClick={()=>handleClick()}>
                                    <h5 class="mb-0">DF FDFDS
                                        <i class="fa fa-angle-down rotate-icon ml-1"></i>
                                    </h5>
                                </div>
                                <div data-test="collapse" id="0"  class={(selected === true) ? "collapse show" : "collapse"} style={{}}>
                                    <ul data-test="list-group"  className={cx("list-group", "list_group", "style_list_group_parent")}>
                                        <ul data-test="list-group"  className={cx("list-group", "list_group")}>
                                            <li data-test="list-group-item"  className={cx("list-group-item", "list-group-item-undefined")}>
                                                <div data-test="card"  className={cx("card", "style_card")}>
                                                    <div data-test="card-body"  className={cx("card-body", "style_card_body")}>
                                                        <div data-test="row" class="row">
                                                            <div data-test="col" class="col-md-12 col-xl-8">
                                                                <div  className={cx("card_body_item")}>
                                                                    <div  className={cx("info_list")}>
                                                                        {record.map((element,idx) =>
                                                                        <ul data-test="list-group"  className={cx("list-group", "style_list_group", "list_group_children")} key={idx}>
                                                                            <li data-test="list-group-item"  className={cx("list-group-item", "list-group-item-undefined")}>
                                                                                <div  className={cx("wrapper_title")}>
                                                                                    <div  className={cx("column1")}>
                                                                                        <span  className={cx("mp_blue")}>Bệnh viện The Group</span>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li data-test="list-group-item"   className={cx("list-group-item", "list-group-item-undefined")}>
                                                                                <div className={cx("column1")}>
                                                                                    <span className={cx("mp_blue")}>Chuyên khoa: {element.specialization}</span>
                                                                                </div>
                                                                            </li>
                                                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                                                <div className={cx("column1")}>
                                                                                    <span className={cx("mp_blue")}>Dịch vụ: Khám dịch vụ</span>
                                                                                </div>
                                                                            </li>
                                                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                                                <div className={cx("column1")}>
                                                                                    <span className={cx("mp_blue")}>Bác sĩ: {element.doctor}</span>
                                                                                </div>
                                                                            </li>
                                                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                                                <div className={cx("column1")}>
                                                                                    <span className={cx("mp_blue")}>Ngày khám: {element.date}</span>
                                                                                </div>
                                                                            </li>
                                                                            <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                                                <div className={cx("column1")}>
                                                                                    <span className={cx("mp_blue")}>Giờ khám dự kiến: {element.time} (Buổi {element.period})</span>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-test="col" class="col-md-12 col-xl-4">
                                                                <ul data-test="list-group" className={cx("list-group", "listAction")}>
                                                                    <li data-test="list-group-item" className={cx("list-group-item", "item", "list-group-item-undefined")}>
                                                                        <div className={cx("payment", "not_payment")}>Chưa thanh toán</div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                )}
                
            </div>
        </div>
        
    </div>


        
    );
}