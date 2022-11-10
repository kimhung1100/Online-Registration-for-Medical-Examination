import "./introduction.scss";

function GioiThieu() {
    return( 
    
      <div id="IntroductionPage">
        <div className="container_intro">
          <div className="wapper"> 
            <h1>GIỚI THIỆU</h1>
          </div>
          <div class="contenty">
              <p>Chào mừng bạn đến với <span style={{fontWeight: 'bold'}}>phần mềm đăng ký khám bệnh theo hẹn – trước ngày khám</span> tại <span style={{fontWeight: 'bold'}}>Bệnh viện The Group Solutions</span>, phần mềm này được phát triển nhằm giúp bệnh nhân có thể:</p>
              <ul>
                  <li>Đăng ký khám bệnh.</li>
                  <li>Thanh toán tiền mặt.</li>
                  <li>Nhận tiền khám bệnh</li>
                  <li>Tạo hồ sơ bệnh nhân</li>
                  <li>Quản lý hồ sơ bệnh nhân</li>
                  <li>Quản lý phiếu khám bệnh</li>
                  <li>Quản lý lịch hẹn tái khám, ..v..v..</li>
              </ul>
              <p>Hoàn toàn trực tuyến ở mọi lúc mọi nơi mà không cần phải đến bệnh viện để xếp hàng và chờ đợi.</p>
              <p>Thông qua phần mềm, chúng tôi luôn hy vọng đã tạo nên một phương thức giúp bệnh nhân có thể tiếp cận với các dịch vụ y tế (nói chung), và dịch vụ khám chữa bệnh (nói riêng) một cách dễ dàng, nhanh chóng và thuận lợi.</p>
              <p>Từ đó làm tăng thêm sự hài lòng của bệnh nhân, nâng cao chất lượng dịch vụ của bệnh viện, và góp phần phát triển bệnh viện ngày càng trở nên thông minh hiện đại đáp ứng với sự kỳ vọng và tin tưởng của quý bệnh nhân trong và ngoài nước.</p>
              <p>Trân trọng!</p>
          </div>
        </div>
      </div>
    );
}

export default GioiThieu;
