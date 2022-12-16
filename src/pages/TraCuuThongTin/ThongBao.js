import classNames from 'classnames/bind';
import styles from './TraCuuThongTin.module.scss';
import medical_insurance from './medical_insurance.jpg';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
const cx = classNames.bind(styles);

export default function ThongBao (){
    const [user,setUser] = useContext(UserContext);

    return (
    <div id = "Notification">
        <div data-test="row" class="row">
            <div data-test="col" class="col">
                <div className={cx("header")}>
                    <div>
                        <div data-test="row" class="row align-items-center">
                            <div data-test="col" class="col">
                                <h6 className={cx("header_pretitle")}>Notifications</h6>
                                <h1 className={cx("header_title")}>Danh sách thông báo</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-test="tabContent" className={cx("tab-content", "tabcontent")}>
            <div data-test="tab-pane" role="tabpanel" className={cx("tab-pane active")}>
                <div data-test="animation" className={cx("animated", "fadeIn", "no_noti_inform")} style={{animationIterationcount: 1, visibility: `visible`, animationName: `fadeIn`}}>
                    <p>Bạn chưa có thông báo.</p>
                    <div className={cx("not_found_result")}>
                        <img src={medical_insurance} style={{width: '500px'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

        
    );
}