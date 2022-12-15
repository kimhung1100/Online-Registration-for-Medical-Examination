import classNames from 'classnames/bind';
// import "./chonChuyenKhoa.css"
import styles from './ChonChuyenKhoa.module.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ChonChuyenKhoa() {
    let navigate = useNavigate();
    const [selectedFaculty, setSelectedFaculty] = useState('');
    
    // const chooseFaculty = (e) => {
    //     navigate('/chon-bac-si', { state: { faculty: e.target.value } });
    // };
    const list = [ 'CHĂM SÓC GIẢM NHẸ', 'CHUYÊN GIA THẦN KINH', 'DA LIỄU',  'ĐAU MẠN TÍNH', 'DỊ ỨNG - MIỄN DỊCH LÂM SÀNG', 
        'HÌNH ẢNH HỌC CAN THIỆP', 'HÔ HẤP', 'HÓA TRỊ', 'HUYẾT HỌC', 'KHÁM VÀ TƯ VẤN DINH DƯỠNG', 'LÃO KHOA', 'LỒNG NGỰC - MẠCH MÁU', 
        'MẮT', 'PARKINSON VÀ RỐI LOẠN VẬN ĐỘNG', 'NAM KHOA', 'NGOẠI THẦN KINH', 'NGOẠI TIM MẠCH', 'NỘI THẬN', 'NỘI THẬN', 'TƯ VẤN TÂM LÝ',
        'TƯ VẤN TÂM LÝ', 'XƯƠNG KHỚP CHỈNH HÌNH', 'Y HỌC GIA ĐÌNH', 'Y HỌC HẠT NHÂN', 'TIÊU HÓA GAN MẬT', 'TIÊM NGỪA', 'THẬN NHÂN TẠO - LỌC MÀNG BỤNG', 
        'THẦN KINH', 'THẨM MỸ DA', 'TAI MŨI HỌNG', 'SẢN KHOA - CHẨN ĐOÁN TRƯỚC SINH'];

    const location = useLocation();
    console.log(location.state);

    return (
        <div>
            <div className={cx('ChonChuyenKhoa_wrapper')}>
                <div className={cx('ChonChuyenKhoa_wrapper_content')}>
                    <a href="./" className={cx('ChonChuyenKhoa_trang_chu')}>
                        Trang chủ
                    </a>
                    <div className={cx('ChonChuyenKhoa_chon_chuyen_khoa')}>
                        <i className={cx('fa-solid', 'fa-chevron-right')}></i>
                        Chọn chuyên khoa
                    </div>
                </div>
            </div>
            <div className={cx('ChonChuyenKhoa_chuyen_khoa_content')}>
                <div className={cx('ChonChuyenKhoa_thong_tin_kham')}>
                    <div className={cx('ChonChuyenKhoa_thong_tin')}>Thông tin khám</div>
                    <div className={cx('ChonChuyenKhoa_dia_chi')}>
                        <i className={cx('fa-regular', 'fa-hospital')}></i>
                        The Group Solutions - 268 Lý Thường Kiệt, P14, Q10, TP TpHCM
                    </div>
                </div>
                
                <div className={cx('ChonChuyenKhoa_chon_khoa')}>
                    <div className={cx('ChonChuyenKhoa_thong_tin')}>Vui lòng chọn chuyên khoa</div>
                    <div className={cx('ChonChuyenKhoa_search')}>
                        <div className={cx('ChonChuyenKhoa_search_box')}>
                            <i className={cx('fa-solid', 'fa-magnifying-glass')}></i>
                            <input type="text" placeholder="Tìm nhanh chuyên khoa"></input>
                        </div>
                    </div>
                    
                    <div className={cx('ChonChuyenKhoa_cac_chuyen_khoa')}>
                        <ul>
                            {list.map((element,idx) => 
                                <li key={idx}>
                                    <Link to="/chon-bac-si" state={{...location.state, specialization: element}} className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}>
                                    {/* <div className={cx('ChonChuyenKhoa_ten_chuyen_khoa')}> */}
                                        {element}
                                    {/* </div> */}
                                    </Link>
                                </li>  
                        )}
                        </ul>
                    </div>
                   
    
                    {/* <a className={cx('ChonChuyenKhoa_thac_mac')}>Bạn không biết vấn đề bạn gặp phải là gì?</a>
                    <a className={cx('ChonChuyenKhoa_back')}>Quay lại</a> */}
                    <a href="" className={cx('ChonChuyenKhoa_thac_mac')}>Bạn không biết vấn đề bạn gặp phải là gì?</a>
                    <a onClick={() => {navigate('../chon-ho-so');}} className={cx('ChonChuyenKhoa_back')}>Quay lại</a>
                </div>
                 
            </div>
        </div>
    );
}

export default ChonChuyenKhoa;
