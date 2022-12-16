import classNames from 'classnames/bind';
import styles from './TraLoiThacMacChuyenMon.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/UserContext';

import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function TraLoiThacMacChuyenMon() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [thacmacchuyenmon, setthacmacchuyenmon] = useState(false);
    const handleThacMacChuyenMon = () => {
        setthacmacchuyenmon = true;
    };
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper_content')}>
                    <div className={cx('answer')}>
                        <i className={cx('fa-solid', 'fa-chevron-right')}></i>
                        Trả lời thắc mắc chuyên môn
                    </div>
                </div>
            </div>
            <div className={cx('answer-content')}>
                <div className={cx('answer-content-box')}>
                    <div className={cx('hoi-dap', 'p-4', 'mb-5')}>PHẦN HỎI ĐÁP</div>
                    <div class="d-flex justify-content-between m-4">
                        <div>
                            <div>
                                Câu hỏi thuộc chuyên khoa: Dị ứng - Miễn dịch lâm sàng
                                <button className={cx('ml-3', 'p-3', 'rounded')}>Chuyên khoa
                                    <i class="fa-solid fa-caret-down"></i>
                                </button>
                            </div>
                        </div>
                        <div class="font-weight-bold">
                            Ngày gửi: 17/06/2022
                            <br></br>
                            Người gửi: BN_220003
                        </div>
                    </div>
                    <div class="m-4">
                        <p class="font-weight-bold">Câu hỏi:</p>
                        <p>Trước đây em uống rượu bia bình thường, nhưng sau khi tiêm văcsin covid khoảng thời gian sau này chỉ cần uống 1 ly rượu hoặc bia vào người là xảy ra hiện tượng đỏ bừng mặt, đau đầu, sưng bì mặt mắt, khó chịu trong cơ thể, ... thì em bị gì và cần khám ở chuyên khoa nào ạ?</p>
                    </div>
                    <div class="m-4">
                        <p class="font-weight-bold">Câu trả lời:</p>
                        <div className={cx('answer-box', 'p-4')}>
                            Bạn thân mến,
                            <br></br>
                            Bạn khám theo chuyên khoa Dị ứng - Miễn dịch lâm sàng để BS khám và điều trị cho bạn nhé.
                            <br></br>
                            Trân trọng.
                            <br></br>
                            BS Nguyễn Hiền Hải - Phòng Tư vấn
                        </div>
                    </div>
                    <div class="m-4 d-flex flex-row-reverse">
                        <button class="mx-5 p-3 rounded">Lưu thông tin</button>
                        <button class="mx-5 p-3 rounded">Xoá câu hỏi</button>
                    </div>
                </div>
                <div className={cx('back' , 'mt-5', 'mb-5', 'p-4')}>
                    <a href=''>Quay lại</a>
                </div>
            </div>
        </div>
    );
}

export default TraLoiThacMacChuyenMon;
