import "../thongTinKhoa.css"
import "../move.js"

function KhoaHoHap () {
    return (
        <div>
            <h1>KHOA HÔ HẤP</h1>
            <div class="anh_khoa">
                <img src="..\..\assets\images\khoaHoHap.jpg" alt="" />
            </div>
            <div class="gioi_thieu">
                <button class="gioi_thieu_chung">GIỚI THIỆU CHUNG</button>
                <button class="trang_thiet_bi">TRANG THIẾT BỊ</button>
                <button class="thanh_tuu">THÀNH TỰU</button>
            </div>
            <div class="thong_tin_gioi_thieu">
                <p>Đội ngũ nhân sự:</p>
                <ul>
                    <li>PGS TS BS. Lê Tiến Dũng - Trưởng khoa</li>
                    <li>BS CKII. Lê Thị Kim Chi</li>
                    <li>BS CKI. Nguyễn Dũng</li>
                    <li>ThS BS. Trần Minh Trí</li>
                    <li>ThS BS. Trần Xuân Sáng </li>
                    <li>ThS BS. Phan Quang Hiếu</li>
                    <br />
                    <li>ThS BS. Võ Kim Tuyến</li>
                    <li>ThS BS. Nguyễn Lê Phương Anh</li>
                    <li>ThS BS. Nguyễn Tuấn Anh</li>
                    <li>ThS BS. Nguyễn Tiết Âu</li>
                    <li>BS. Sơn Thị Oanh</li>
                    <li>BS. Đỗ Đức Quân</li>
                </ul>
            </div>
            <div class="thong_tin_trang_thiet_bi">
                <ul>
                    <li>Bên cạnh yếu tố nhân lực, khoa Hô Hấp rất chú trọng vào việc đầu tư trang thiết bị, máy móc hiện đại nhằm mang lại kết quả chính xác trong chẩn đoán cũng như điều trị cho bệnh nhân. Các trang thiết bị cần thiết để phục vụ cho việc khám chữa bệnh về hô hấp luôn được đảm bảo đầy đủ gồm có: Máy thở không xâm lấn, máy thở xâm lấn, hệ thống soi phế quản, Monitor, máy phun khí dung… và các thiết bị hỗ trợ điều trị khác.</li>
                    <li>Với mong muốn tạo môi trường thoải mái nhất cho các bệnh nhân đến thăm khám, điều trị, khoa Hô Hấp quan tâm xây dựng các phòng điều trị với giường bệnh hiện đại, đầy đủ tiện ích, không gian thoải mái, sạch sẽ cho cả người bệnh và người nhà đến chăm sóc.</li>
                    <li>Cùng với đó, không thể không kể đến hệ thống xe cấp cứu được trang bị đầy đủ thuốc, vật tư, hộp chống sốc và những phương tiện hiện đại nhất cho việc chăm sóc kịp thời cho người bệnh theo tiêu chuẩn của Y khoa quốc tế. </li>
                </ul>
            </div>
            <div class="thong_tin_thanh_tuu">
                <ul>
                    <li>Sinh thiết phổi dưới hướng dẫn CT scan ngực: Phương pháp đưa kim sinh thiết vào  phổi dưới hướng dẫn của máy chụp cắt lớp vi tính để tiến hành lấy một số bệnh phẩm từ u phổi. Các mẫu này sau đó được gửi đi kiểm tra dưới kính hiển vi giúp xác định bệnh tật. Kết quả chẩn đoán chính xác lên đến 81,5% và được đánh giá là phương pháp xâm lấn tối thiểu ít xảy ra tai biến.</li>
                    <li>Sinh thiết màng phổi mù bằng kim Abrams: Dùng kim sinh thiết màng phổi Abrams chọc qua thành ngực vào vùng có dịch ở khoang màng phổi. Sau khi đã chắc chắn đưa được kim dẫn đường vào khoang màng phổi, nòng của kim dẫn đường được rút ra, sau đó kim cắt được đưa vào để cắt bệnh phẩm. Mỗi lần sinh thiết thường lấy 3-4 mảnh để gửi xét nghiệm mô bệnh học. Ưu điểm của kỹ thuật này là dễ triển khai, nhanh chóng trong quá trình thực hiện và mang đến chi phí hợp lý cho người bệnh.</li>
                    <li>Nội soi phế quản: Thủ thuật giúp bác sĩ quan sát đường hô hấp bằng một ống soi mềm (soi phế quản) để chẩn đoán các bệnh lý về phổi. Trong quá trình nội soi, bác sĩ có thể lấy các mẫu mô, tế bào hoặc dịch của phổi để phục vụ cho công tác chẩn đoán, điều trị.</li>
                </ul>
            </div>
        </div>
    )
}

export default KhoaHoHap;