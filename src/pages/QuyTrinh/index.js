import { AlignCenter, ChevronRight} from 'react-bootstrap-icons';
import "./checkupProcess.scss";

function QuyTrinh() {
    return (
   
    <div id="CheckupProcessPage">
      <div className="wrapper__process"> 
        <h1>QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH</h1>
      </div>
      <div class="container__process">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
          
            <ul class="timeline">
              <li>
                <p class="timeline_date">Bước 1</p>
                  <div class="timeline_content">
                    <h3>Đặt lịch khám</h3>
                    <div class="ct_inside">
                      <ul>
                        <li><ChevronRight size={8} ></ChevronRight>Đăng nhập phần mềm trên web hoặc ứng dụng di động.</li>
                        <li><ChevronRight size={8}></ChevronRight>Chọn hình thức đặt khám: Theo ngày hoặc theo bác sĩ.</li>
                        <li><ChevronRight size={8}></ChevronRight>Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới.</li>
                        <li><ChevronRight size={8}></ChevronRight>Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và có BHYT hay không.</li>
                      </ul>
                    </div>
                </div>
              </li>
              <li>
                <p class="timeline_date">Bước 2</p>
                <div class="timeline_content">
                  <h3>Thanh toán tiền khám</h3>
                  <div class="ct_inside">
                    <ul>
                      <li><ChevronRight size={8}></ChevronRight>Chọn loại thẻ thanh toán: Thẻ khám bệnh của bệnh viện Đại Học Y Dược TPHCM, thẻ thanh toán quốc tế hoặc thẻ ATM nội địa.</li>
                      <li><ChevronRight size={8}></ChevronRight>Kiểm tra tiền khám, các loại phí và tổng tiền thanh toán.</li>
                      <li><ChevronRight size={8}></ChevronRight>Nhập thông tin thẻ để tiến hành thanh toán.</li>
                    </ul>
                    <p><strong>Lưu ý:</strong></p>
                    <ul>
                      <li><ChevronRight size={8}></ChevronRight><i>Thanh toán bằng thẻ khám bệnh của Bệnh viện Đại học Y Dược TPHCM, phí tiện ích sẽ có mức thấp nhất.</i></li>
                      <li><ChevronRight size={8}></ChevronRight><i>Đối với thẻ khám Bệnh viện Đại học Y Dược TPHCM, vui lòng đăng ký chức năng thanh toán trực tuyến tại các chi nhánh Vietinbank trong cả nước, trước khi sử dụng.</i></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p class="timeline_date">Bước 3</p>
                <div class="timeline_content">
                  <h3>Xác nhận Người bệnh đến bệnh viện khám theo hẹn</h3>
                  <div class="ct_inside">
                    <ul>
                      <li><ChevronRight size={8}></ChevronRight>Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.</li>
                      <li><ChevronRight size={8}></ChevronRight><strong>Đến ngày khám,</strong></li>
                      <li>
                        <ul>
                          <li><ChevronRight size={8}></ChevronRight>Người bệnh không BHYT sẽ đến trực tiếp phòng khám trước giờ hẹn 15-30 phút để khám bệnh .</li>
                          <li><ChevronRight size={8}></ChevronRight>Người bệnh khám BHYT vui lòng đến quầy 12,13,14 khu A trước giờ hẹn 15-30 phút để xác nhận bảo hiểm trước khi vào phòng khám .</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p class="timeline_date">Bước 4</p>
                <div class="timeline_content">
                  <h3>Khám và thực hiện cận lâm sàng</h3>
                  <div class="ct_inside">
                    <ul>
                      <li><ChevronRight size={8}></ChevronRight>Người bệnh khám tại các phòng khám chuyên khoa theo sự hướng dẫn của nhân viên y tế.</li>
                      <li><ChevronRight size={8}></ChevronRight>Thực hiện cận lâm sàng (nếu có) và đóng phí tại các quầy thu ngân</li>
                      <li><ChevronRight size={8}></ChevronRight>Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p class="timeline_date">Bước 5</p>
                <div class="timeline_content">
                  <h3>Nhận thuốc</h3>
                  <div class="ct_inside">
                    <ul>
                      <li><ChevronRight size={8}></ChevronRight><strong>Người bệnh có BHYT:</strong> Thực hiện kết toán BHYT tại quầy 17,18,19,20 tầng trệt khu A và nhận thuốc tại nhà thuốc khu B.</li>
                      <li><ChevronRight size={8}></ChevronRight><strong>Người bệnh không có BHYT:</strong> Đến nhà thuốc khu A hoặc khu B mua thuốc, thanh toán tiền thuốc tại quầy hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <p class="timeline_date">Bước 6</p>
                <div class="timeline_content">
                  <h3>Đặt lịch tái khám</h3>
                  <div class="ct_inside">
                    <ul>
                      <li><ChevronRight size={8}></ChevronRight>Sử dụng phần mềm đặt hẹn tái khám như BƯỚC 1 và BƯỚC 2 để nhận phiếu khám điện tử.</li>
                      <p>Lưu ý:</p>
                      <li><ChevronRight size={8}></ChevronRight>Chọn bác sĩ khám và ngày tái khám theo thông tin trên toa thuốc.</li>
                      <li><ChevronRight size={8}></ChevronRight>Nhập thông tin người bệnh bằng số hồ sơ trên toa thuốc (không được tạo mới).</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default QuyTrinh;
