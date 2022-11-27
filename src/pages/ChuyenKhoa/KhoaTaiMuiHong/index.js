import "../thongTinKhoa.css"
import React, { useEffect, useState, useRef } from 'react';
import khoaTaiMuiHong from '../../../assets/images/khoaTaiMuiHong.jpg'
import classNames from 'classnames';

function KhoaTaiMuiHong () {
    const [problem1, setProblem1] = useState(false);
    const [problem2, setProblem2] = useState(false);
    const [problem3, setProblem3] = useState(false);

    const handleProblem1 = () => {
        setProblem1(!problem1) 
        if(problem1===false)
            setProblem2(false)
            setProblem3(false)
    }

    const handleProblem2 = () => {
        setProblem2(!problem2) 
        if(problem2===false)
            setProblem1(false)
            setProblem3(false)
    }

    const handleProblem3 = () => {
        setProblem3(!problem3) 
        if(problem3===false)
            setProblem1(false)
            setProblem2(false)
    }

    return (
        <div>
            <div className={classNames("ThongTinChuyenKhoa_wrapper")}>
                <h1>KHOA TAI - MŨI - HỌNG</h1>
                <div className={classNames("ThongTinChuyenKhoa_anh_khoa")}>
                    <img src={khoaTaiMuiHong} alt="" />
                </div>
                <div className={classNames("ThongTinChuyenKhoa_gioi_thieu")}>
                    <button onClick={handleProblem1} className={classNames("ThongTinChuyenKhoa_gioi_thieu_chung", problem1&&"open", problem2&&"none", problem3&&"none")}>GIỚI THIỆU CHUNG</button>
                    <button onClick={handleProblem2} className={classNames("ThongTinChuyenKhoa_trang_thiet_bi", problem2&&"open", problem1&&"none", problem3&&"none")}>TRANG THIẾT BỊ</button>
                    <button onClick={handleProblem3} className={classNames("ThongTinChuyenKhoa_thanh_tuu", problem3&&"open", problem2&&"none", problem1&&"none")}>THÀNH TỰU</button>
                </div>
                <div className={classNames("ThongTinChuyenKhoa_thong_tin_gioi_thieu", problem1&&"open", problem2&&"none", problem3&&"none")}>
                    <p>Đội ngũ nhân sự:</p>
                    <ul>
                        <li>GS TS BS. Phạm Kiên Hữu - Cố vấn chuyên môn</li>
                        <li>TS BS. Lý Xuân Quang - Trưởng khoa</li>
                        <li>CNĐD. Huỳnh Thị Bích Hà - Điều dưỡng trưởng</li>
                        <li>ThS BS. Văn Thị Hải Hà</li>
                        <li>TS BS. Lê Minh Tâm</li>
                        <li>ThS BS. Lê Quang Hưng</li>
                        <br />
                        <li>ThS BS. Trần Ngọc Tường Linh</li>
                        <li>TS BS. Lý Xuân Quang - Trưởng khoa</li>
                        <li>ThS BS. Nguyễn Văn Thành</li>
                        <li>ThS BS. Lê Văn Vĩnh Quyền</li>
                        <li>BS CKII. Nguyễn Mai Phương Trang</li>
                    </ul>
                </div>
                <div className={classNames("ThongTinChuyenKhoa_thong_tin_trang_thiet_bi", problem2&&"open", problem1&&"none", problem3&&"none")}>
                    <ul>
                        <li>Phòng phẫu thuật được trang bị đầy đủ các dụng cụ như dụng cụ phẫu thuật đầu cổ - họng thanh quản - tai thần kinh - mũi xoang, dao laser, dao plasma, máy nội soi,...</li>
                        <li>Phòng khám được trang bị các dụng cụ khám và nội soi tai mũi họng, làm thủ thuật tự do.</li>
                        <li>Phòng thủ thuật làm các thủ thuật và nội soi tai mũi họng. </li>
                        <li>Phòng bệnh được bố trí giường bệnh hiện đại, mỗi giường được trang bị hệ thống chuông báo, chăm sóc người bệnh tích cực.</li>
                        <li>Trang thiết bị khác: Máy thính lực, máy nhĩ lượng, máy đo âm ốc tai.</li>
                    </ul>
                </div>
                <div className={classNames("ThongTinChuyenKhoa_thong_tin_thanh_tuu", problem3&&"open", problem2&&"none", problem1&&"none")}>
                    <p style={{fontWeight: 'normal'}}>Trải qua quá trình hoạt động cùng những nỗ lực không ngừng về mặt chuyên môn, đào tạo, hợp tác, Khoa Tai - Mũi - Họng Bệnh viện The Group Solutions đã đạt được những thành tựu chuyên môn và giải thưởng quan trọng.</p>
                    <ul>
                        <li>Danh hiệu thi đua: 
                            <ul>
                                <li>Tập thể lao động xuất sắc (2013 - 2020)</li>
                                <li>Bằng khen Bộ trưởng Bộ y tế (2019 - 2020)</li>
                            </ul>
                        </li>
                        <li>Giải thưởng thành tựu chuyên môn UMC: Hạng 2 (2020)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default KhoaTaiMuiHong;