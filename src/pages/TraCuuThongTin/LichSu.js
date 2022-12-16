import classNames from 'classnames/bind';
import styles from './TraCuuThongTin.module.scss';
import medical_insurance from './medical_insurance.jpg';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
const cx = classNames.bind(styles);

export default function HoSoBenhNhan(){
    const [user,setUser] = useContext(UserContext);

    return (
    <div id = "PaymentHistory">
        <div data-test="row" class="row">
            <div data-test="col" class="col">
                <div className={cx("header")}>
                    <div>
                        <div data-test="row" class="row align-items-center">
                            <div data-test="col" class="col">
                                <h6 className={cx("header_pretitle")}>Payment History</h6>
                                <h1 className={cx("header_title")}>Lịch sử thanh toán viện phí</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-test="tabContent" className={cx("tab-content", "tabcontent")}>
            <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane active")}>
                <div data-test="animation" className={cx("animated", "fadeIn", "no_noti_inform")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                    {/* <p>Bạn chưa có lịch sử thanh toán.</p>
                    <p className={cx("subMessageGuide")}>Vui lòng liên hệ bộ phận CSKH (19001080) nếu không tìm thấy lịch sử các lần thanh toán </p>
                    <div className={cx("not_found_result")}>
                        <img src={medical_insurance} style={{width: '500px'}}/>
                    </div> */}


                    <Table >
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Họ và tên bệnh nhân</th>
                                <th>Chuyên khoa</th>
                                <th>Ngày khám</th>
                                <th>Thời gian thanh toán</th>
                                <th>Tổng chi phí</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>BÙI KIM HƯNG</td>
                                <td>THẨM MỸ DA</td>
                                <td>05/10/2022</td>
                                <td>11:59:00 04/10/2022</td>
                                <td>160.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>NGUYỄN THỊ MINH CHÂU</td>
                                <td>CHĂM SÓC GIẢM NHẸ</td>
                                <td>05/10/2022</td>
                                <td>8:00:00 03/10/2022</td>
                                <td>200.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>PHẠM QUỐC AN</td>
                                <td>THẨM MỸ DA</td>
                                <td>03/10/2022</td>
                                <td>15:37:30 02/10/2022</td>
                                <td>160.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>DƯƠNG HUỲNH ANH ĐỨC</td>
                                <td>MẮT</td>
                                <td>03/10/2022</td>
                                <td>20:50:45 02/10/2022</td>
                                <td>200.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>BÙI KIM HƯNG</td>
                                <td>THẨM MỸ DA</td>
                                <td>20/11/2021</td>
                                <td>10:47:24 04/10/2021</td>
                                <td>160.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>PHAN HỒNG ĐỨC</td>
                                <td>TỔNG QUÁT</td>
                                <td>05/10/2021</td>
                                <td>17:30:20 04/10/2021</td>
                                <td>300.000 VNĐ</td>
                            </tr>
                        </tbody>
                    </Table> 
                </div>
            </div>
        </div>
    </div>


        
    );
}