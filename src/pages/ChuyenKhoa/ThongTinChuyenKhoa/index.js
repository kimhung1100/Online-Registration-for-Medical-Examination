import "./chuyenKhoa.css"
import lamsang from '../../../assets/images/lam_sang.jpg'
import canlamsang from '../../../assets/images/can_lam_sang.jpg'

function ThongTinChuyenKhoa() {
    return (
    <div>
        <div className="wrapper">
            CHUYÊN KHOA
        </div>
        <div className="chuyen_khoa_box">
            <div className="lam_sang">
                <div className="anh_lam_sang">
                    <img src={lamsang} alt="khong co hinh" />
                    <div className="khoa_content">KHOA LÂM SÀNG</div>
                </div>
                <div className="noi_dung_khoa">
                    <ul>
                        <li><a href="">Khoa Cấp cứu</a></li>
                        <li><a href="">Khoa Khám bệnh</a></li>
                        <li><a href="">Khoa Nội tiết</a></li>
                        <li><a href="">Khoa Nội tim mạch</a></li>
                        <li><a href="">Khoa Tim mạch can thiệp</a></li>
                        <li><a href="">Khoa Thần kinh</a></li>          
                        <li><a href="./chuyen-khoa/khoa-tai-mui-hong">Khoa Tai - Mũi - Họng</a></li>
                        <li><a href="">Khoa Phụ sản</a></li>
                        <li><a href="">Khoa Tiêu hoá</a></li>
                        <li><a href="./chuyen-khoa/khoa-ho-hap">Khoa Hô hấp</a></li>
                        <li><a href="./chuyen-khoa/khoa-mat">Khoa Mắt</a></li>
                        <li><a href="">Khoa Tạo hình Thẩm mỹ</a></li>
                    </ul>
                </div>
            </div>

            <div className="can_lam_sang">
                <div className="anh_lam_sang">
                    <img src={canlamsang} alt="" />
                    <div className="khoa_content">KHOA CẬN LÂM SÀNG</div>
                </div>    
                <div className="noi_dung_khoa">
                    <ul>
                        <li><a href="">Khoa Chẩn đoán hình ảnh</a></li>
                        <li><a href="">Khoa giải phẫu bệnh</a></li>
                        <li><a href="">Khoa Dinh dưỡng - Tiết chế</a></li>
                        <li><a href="">Khoa Nội soi</a></li>
                        <li><a href="">Khoa Xét nghiệm</a></li>
                        <li><a href="">Khoa Dược</a></li>
                        <li><a href="">Khoa Vi sinh</a></li>
                        <li><a href="">Khoa Y học hạt nhân</a></li>
                    </ul>
                </div>
            </div>    
        </div>
    </div>
    );
}

export default ThongTinChuyenKhoa;