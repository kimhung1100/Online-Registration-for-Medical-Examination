import "../thongTinKhoa.css"
import "../move.js"

function KhoaMat () {
    return (
        <div>
            <h1>KHOA MẮT</h1>
            <div class="anh_khoa">
                <img src="..\..\assets\images\khoaMat.jpg" alt="" />
            </div>
            <div class="gioi_thieu">
                <button class="gioi_thieu_chung">GIỚI THIỆU CHUNG</button>
                <button class="trang_thiet_bi">TRANG THIẾT BỊ</button>
                <button class="thanh_tuu">THÀNH TỰU</button>
            </div>
            <div class="thong_tin_gioi_thieu">
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
            <div class="thong_tin_trang_thiet_bi">
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
            <div class="thong_tin_thanh_tuu">
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
    )
}

export default KhoaMat;