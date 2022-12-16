import classNames from 'classnames/bind';
import styles from './TraCuuThongTin.module.scss';
import medical_insurance from './medical_insurance.jpg';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
const cx = classNames.bind(styles);

export default function PhieuKhamBenh (){
    const [user,setUser] = useContext(UserContext);

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
                <div data-test="animation" className={cx("animated", "fadeIn", "no_noti_inform")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                    <p>Bạn chưa có phiếu khám bệnh.</p>
                    <p className={cx("subMessageGuide")}>Vui lòng liên hệ bộ phận CSKH (19001080) nếu không tìm thấy thông tin phiếu khám bệnh</p>
                    <div className={cx("not_found_result")}>
                        <img src={medical_insurance} style={{width: '500px'}}/>
                    </div>


                    {/* <div data-test="card" className={cx("card", "card_collapse")}>
                        <div data-test="collapse-header" data-bs-toggle="collapse" data-bs-target="#0" className={cx("card-header", "card_header_selected")} style={{cursor: "pointer"}}>
                            <h5 class="mb-0">DF FDFDS
                                <i class="fa fa-angle-down rotate-icon ml-1"></i>
                            </h5>
                        </div>
                        <div data-test="collapse" id="0"  class="collapse" style={{}}>
                            <ul data-test="list-group"  className={cx("list-group", "style_list_group", "style_list_group_parent")}>
                                <ul data-test="list-group"  className={cx("list-group", "style_list_group")}>
                                    <li data-test="list-group-item"  className={cx("list-group-item", "list-group-item-undefined")}>
                                        <div data-test="card"  className={cx("card", "style_card")}>
                                            <div data-test="card-body"  className={cx("card-body", "style_card_body")}>
                                                <div data-test="row" class="row">
                                                    <div data-test="col" class="col-md-12 col-xl-8">
                                                        <div  className={cx("card_body_item")}>
                                                            <div  className={cx("info_list")}>
                                                                <ul data-test="list-group"  className={cx("list-group", "style_list_group", "list_group_children")}>
                                                                    <li data-test="list-group-item"  className={cx("list-group-item", "list-group-item-undefined")}>
                                                                        <div  className={cx("wrapper_title")}>
                                                                            <div  className={cx("column1")}>
                                                                                <span  className={cx("mp_blue")}>Bệnh viện Đại học Y Dược TP.HCM - Cơ sở 1</span>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li data-test="list-group-item"   className={cx("list-group-item", "list-group-item-undefined")}>
                                                                        <div className={cx("column1")}>
                                                                            <span className={cx("style_mp_blue")}>Chuyên khoa: KHÁM VÀ TƯ VẤN DINH DƯỠNG</span>
                                                                        </div>
                                                                    </li>
                                                                    <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                                        <div className={cx("column1")}>
                                                                            <span className={cx("mp_blue")}>Dịch vụ: Khám dịch vụ</span>
                                                                        </div>
                                                                    </li>
                                                                    <li data-test="list-group-item" className={cx("list-group-item", "list-group-item-undefined")}>
                                                                        <div className={cx("column1")}>
                                                                            <span className={cx("mp_blue")}>Bác sĩ: Nguyễn Thị Thanh Nhàn</span>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-test="col" class="col-md-12 col-xl-4">
                                                        <ul data-test="list-group" className={cx("list-group", "style_listAction")}>
                                                            <li data-test="list-group-item" className={cx("list-group-item", "style_item", "list-group-item-undefined")}>
                                                                <div className={cx("style_payment", "style_not_payment")}>Chưa thanh toán</div>
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
                    </div> */}
                </div>
            </div>
        </div>
    </div>


        
    );
}