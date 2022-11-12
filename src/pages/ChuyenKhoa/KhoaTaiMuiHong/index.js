import "../thongTinKhoa.css"
import "../move.js"

function KhoaTaiMuiHong () {
    return (
        <div>
            <h1>KHOA TAI - MŨI - HỌNG</h1>
            <div class="anh_khoa">
                <img src="..\..\assets\images\khoaTaiMuiHong.jpg" alt="" />
            </div>
            <div class="gioi_thieu">
                <button class="gioi_thieu_chung">GIỚI THIỆU CHUNG</button>
                <button class="trang_thiet_bi">TRANG THIẾT BỊ</button>
                <button class="thanh_tuu">THÀNH TỰU</button>
            </div>
            <div class="thong_tin_gioi_thieu">
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
            <div class="thong_tin_trang_thiet_bi">
                <ul>
                    <li>Phòng phẫu thuật được trang bị đầy đủ các dụng cụ như dụng cụ phẫu thuật đầu cổ - họng thanh quản - tai thần kinh - mũi xoang, dao laser, dao plasma, máy nội soi,...</li>
                    <li>Phòng khám được trang bị các dụng cụ khám và nội soi tai mũi họng, làm thủ thuật tự do.</li>
                    <li>Phòng thủ thuật làm các thủ thuật và nội soi tai mũi họng. </li>
                    <li>Phòng bệnh được bố trí giường bệnh hiện đại, mỗi giường được trang bị hệ thống chuông báo, chăm sóc người bệnh tích cực.</li>
                    <li>Trang thiết bị khác: Máy thính lực, máy nhĩ lượng, máy đo âm ốc tai.</li>
                </ul>
            </div>
            <div class="thong_tin_thanh_tuu">
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
    )
}

export default KhoaTaiMuiHong;