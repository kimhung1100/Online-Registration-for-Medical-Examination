import "../thongTinKhoa.css"
import classNames from 'classnames';
import React, { useEffect, useState, useRef } from 'react';
import khoaMat from '../../../assets/images/khoaMat.jpg'

function KhoaMat () {
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
                <h1>KHOA MẮT</h1>
                <div className={classNames("ThongTinChuyenKhoa_anh_khoa")}>
                    <img src={khoaMat} alt="" />
                </div>
                <div className={classNames("ThongTinChuyenKhoa_gioi_thieu")}>
                    <button onClick={handleProblem1} className={classNames("ThongTinChuyenKhoa_gioi_thieu_chung", problem1&&"open", problem2&&"none", problem3&&"none")}>GIỚI THIỆU CHUNG</button>
                    <button onClick={handleProblem2} className={classNames("ThongTinChuyenKhoa_trang_thiet_bi", problem2&&"open", problem1&&"none", problem3&&"none")}>TRANG THIẾT BỊ</button>
                    <button onClick={handleProblem3} className={classNames("ThongTinChuyenKhoa_thanh_tuu", problem3&&"open", problem2&&"none", problem1&&"none")}>THÀNH TỰU</button>
                </div>
                <div className={classNames("ThongTinChuyenKhoa_thong_tin_gioi_thieu", problem1&&"open", problem2&&"none", problem3&&"none")}>
                    <p>Đội ngũ nhân sự:</p>
                    <ul>
                        <li>ThS BS. Hồng Văn Hiệp - Cố vấn chuyên môn</li>
                        <li>PGS TS BS. Nguyễn Công Kiệt - Trưởng khoa</li>
                        <li>PGS TS BS. Võ Thị Hoàng Lan - Điều dưỡng trưởng</li>
                        <li>TS BS. Nguyễn Phạm Trung Hiếu</li>
                        <li>BS CKII. Nguyễn Thành Luân</li>
                        <br />
                        <li>ThS BS. Nguyễn Phú Thiện</li>
                        <li>ThS BS. Trần Vũ Ngọc Tuyên</li>
                        <li>ThS BS. Ngô Nguyễn Thu Hằng</li>
                        <li>BS CKI. Hoàng Đức Thiệp</li>
                    </ul>
                </div>
                <div className={classNames("ThongTinChuyenKhoa_thong_tin_trang_thiet_bi", problem2&&"open", problem1&&"none", problem3&&"none")}>
                    <ul>
                        <li>Máy kiểm tra thị lực chính xác, đa năng.</li>
                        <li>Máy đo khúc xạ tự động.</li>
                        <li>Máy sinh hiển vi khám bệnh có Camera chụp và ghi hình giúp chẩn đoán, theo dõi tổn thương.</li>
                        <li>Máy chụp bản đồ giác mạc giúp xác định bệnh lý và bất thường khúc xạ giác mạc.</li>
                        <li>Máy siêu âm mắt.</li>
                        <li>Máy chụp hình màu đáy mắt giúp tầm soát, phát hiện các bệnh lý võng mạc, thị thần kinh.</li>
                        <li>Máy OCT-A: Giúp phát hiện sớm, chẩn đoán xác định và theo dõi diễn tiến các bệnh lý hắc, võng mạc, thị thần kinh đặc biệt chụp được mạch máu hắc, võng mạc mà không cần tiêm thuốc cản quang.</li>
                        <li>Hệ thống phẫu thuật Phaco: Can thiệp được ở những người bệnh bị cứng độ V; Phẫu thuật được những trường hợp đục thủy tinh thể phức tạp như đục lệch, đục do chấn thương, đục do viêm màng bồ đào, đục kèm bệnh Glaucoma, đục kèm cận thị nặng, bệnh nhân đã mổ Lasik; Giải quyết được những biến chứng trên bệnh nhân đã được mổ trước đó; Phẫu thuật, đặt được những thủy tinh thể nhân tạo cao cấp, đa năng cho bệnh nhân có nhu cầu cao như kính nội nhãn có độ loạn, kính đa tròng,...</li>
                        <li>Máy Laser Yag: Phòng ngừa và điều trị Glaucoma; Điều trị đục bao sau sau khi phẫu thuật đục thủy tinh thể; Trị màng đồng tử.</li>
                        <li>Máy Laser 532S: Laser điều trị bệnh lý võng mạc.</li>
                    </ul>
                </div>
                <div className={classNames("ThongTinChuyenKhoa_thong_tin_thanh_tuu", problem3&&"open", problem2&&"none", problem1&&"none")}>
                    <p style={{fontWeight: 'normal'}}>Trải qua quá trình hoạt động cùng những nỗ lực không ngừng về mặt chuyên môn, đào tạo, hợp tác, Khoa Mắt Bệnh viện The Group Solutions đã đạt được những thành tựu chuyên môn và giải thưởng quan trọng.</p>
                    <ul>
                        <li>Danh hiệu thi đua: 
                            <ul>
                                <li>8 năm liên tục đơn vị được công nhận là tập thể lao động xuất sắc.</li>
                                <li>3 năm liền được nhận cờ thi đua của UBND 6 năm liền được nhận cờ thi đua của Liên đoàn Lao động tỉnh và Công đoàn Y tế Việt Nam.</li>
                                <li>Năm 2011 được nhận bằng khen của Thủ tướng Chính phủ.</li>
                                <li>Năm 2013 được nhận huân chương lao động hạng III của Chủ tịch nước.</li>
                            </ul>
                        </li>
                        <li>Giải thưởng thành tựu chuyên môn UMC: Hạng 5 (2018)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default KhoaMat;