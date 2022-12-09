import classNames from 'classnames/bind';
// import "./chonChuyenKhoa.css"
import styles from './ChonChuyenKhoa.module.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ChonChuyenKhoa() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    return (
        <div>
        <div className={cx('ChonChuyenKhoa_wrapper')}>
            <div className={cx('ChonChuyenKhoa_wrapper_content')}>
                <a href="./" className={cx('ChonChuyenKhoa_trang_chu')}>Trang chủ</a> 
                <div className={cx('ChonChuyenKhoa_chon_chuyen_khoa')}>
                    <i className={cx('fa-solid', 'fa-chevron-right')}></i>
                    Chọn chuyên khoa
                </div>
            </div>
        </div>
        <div className={cx('ChonChuyenKhoa_chuyen_khoa_content')}>
            <div className={cx('ChonChuyenKhoa_thong_tin_kham')}>
                <div className={cx('ChonChuyenKhoa_thong_tin')}>
                    Thông tin khám
                </div>
                <div className={cx('ChonChuyenKhoa_dia_chi')}>
                    <i className={cx('fa-regular', 'fa-hospital')}></i>
                    The Group Solutions - 268 Lý Thường Kiệt, P14, Q10, TP TpHCM
                </div>
            </div>
            <div className={cx('ChonChuyenKhoa_chon_khoa')}>
                <div className={cx('ChonChuyenKhoa_thong_tin')}>
                    Vui lòng chọn chuyên khoa
                </div>
                <div className={cx('ChonChuyenKhoa_search')}>
                    <div className={cx('ChonChuyenKhoa_search_box')}>
                        <i className={cx('fa-solid', 'fa-magnifying-glass')}></i>
                        <input type="text" placeholder='Tìm nhanh chuyên khoa'></input>
                    </div>
                </div>  
                <div className={cx('ChonChuyenKhoa_cac_chuyen_khoa')}>
                    <ul>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>CHĂM SÓC GIẢM NHẸ</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>CHUYÊN GIA THẦN KINH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>DA LIỄU</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>ĐAU MẠN TÍNH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>DỊ ỨNG - MIỄN DỊCH LÂM SÀNG</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>HÌNH ẢNH HỌC CAN THIỆP</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>HÔ HẤP</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>HÓA TRỊ</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>HUYẾT HỌC</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>KHÁM VÀ TƯ VẤN DINH DƯỠNG</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>LÃO KHOA</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>LỒNG NGỰC - MẠCH MÁU</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>MẮT</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>PARKINSON VÀ RỐI LOẠN VẬN ĐỘNG</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>NAM KHOA</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>NGOẠI THẦN KINH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>NGOẠI TIM MẠCH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>NỘI THẬN</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>TẠO HÌNH - THẨM MỸ</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>TƯ VẤN TÂM LÝ</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>VIÊM GAN</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>XƯƠNG KHỚP CHỈNH HÌNH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>Y HỌC GIA ĐÌNH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>Y HỌC HẠT NHÂN</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>TIÊU HÓA GAN MẬT</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>TIÊM NGỪA</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>THẬN NHÂN TẠO - LỌC MÀNG BỤNG</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>THẦN KINH</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>THẨM MỸ DA</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>TAI MŨI HỌNG</a>
                        </li>
                        <li>
                            <a href="" className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>SẢN KHOA - CHẨN ĐOÁN TRƯỚC SINH</a>
                        </li>
                    </ul>
                </div>
                <a href="" className={cx('ChonChuyenKhoa_thac_mac')}>Bạn không biết vấn đề bạn gặp phải là gì?</a>
                <a onClick={() => {navigate('../chon-ho-so');}} className={cx('ChonChuyenKhoa_back')}>Quay lại</a>
            </div>
        </div>
    </div>
    );
}

export default ChonChuyenKhoa;
