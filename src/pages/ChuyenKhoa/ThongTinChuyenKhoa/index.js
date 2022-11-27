import "./chuyenKhoa.css"
import lamsang from '../../../assets/images/lam_sang.jpg'
import canlamsang from '../../../assets/images/can_lam_sang.jpg'

function ThongTinChuyenKhoa() {
    return (
    <div>
        <div className="ChuyenKhoa_wrapper">
            CHUYÊN KHOA
        </div>
        <div className="ChuyenKhoa_chuyen_khoa_box">
            <div className="ChuyenKhoa_lam_sang">
                <div className="ChuyenKhoa_anh_lam_sang">
                    <img src={lamsang} alt="" />
                    <div className="ChuyenKhoa_khoa_content">KHOA LÂM SÀNG</div>
                </div>
                <div className="ChuyenKhoa_noi_dung_khoa">
                    <ul>
                        <li><a href="./khoa-tai-mui-hong">Khoa Cấp cứu</a></li>
                        <li><a href="./khoa-ho-hap">Khoa Khám bệnh</a></li>
                        <li><a href="./khoa-mat">Khoa Nội tiết</a></li>
                        <li><a href="./khoa-tai-mui-hong">Khoa Nội tim mạch</a></li>
                        <li><a href="./khoa-ho-hap">Khoa Tim mạch can thiệp</a></li>
                        <li><a href="./khoa-mat">Khoa Thần kinh</a></li>          
                        <li><a href="./khoa-tai-mui-hong">Khoa Tai - Mũi - Họng</a></li>
                        <li><a href="./khoa-ho-hap">Khoa Phụ sản</a></li>
                        <li><a href="./khoa-mat">Khoa Tiêu hoá</a></li>
                        <li><a href="./khoa-ho-hap">Khoa Hô hấp</a></li>
                        <li><a href="./khoa-mat">Khoa Mắt</a></li>
                        <li><a href="/khoa-tai-mui-hong">Khoa Tạo hình Thẩm mỹ</a></li>
                    </ul>
                </div>
            </div>

            <div className="ChuyenKhoa_can_lam_sang">
                <div className="ChuyenKhoa_anh_lam_sang">
                    <img src={canlamsang} alt="" />
                    <div className="ChuyenKhoa_khoa_content">KHOA CẬN LÂM SÀNG</div>
                </div>    
                <div className="ChuyenKhoa_noi_dung_khoa">
                    <ul>
                        <li><a href="/khoa-tai-mui-hong">Khoa Chẩn đoán hình ảnh</a></li>
                        <li><a href="./khoa-ho-hap">Khoa giải phẫu bệnh</a></li>
                        <li><a href="./khoa-mat">Khoa Dinh dưỡng - Tiết chế</a></li>
                        <li><a href="/khoa-tai-mui-hong">Khoa Nội soi</a></li>
                        <li><a href="./khoa-ho-hap">Khoa Xét nghiệm</a></li>
                        <li><a href="./khoa-mat">Khoa Dược</a></li>
                        <li><a href="/khoa-tai-mui-hong">Khoa Vi sinh</a></li>
                        <li><a href="./khoa-ho-hap">Khoa Y học hạt nhân</a></li>
                    </ul>
                </div>
            </div>    
        </div>
    </div>
    );
}

export default ThongTinChuyenKhoa;