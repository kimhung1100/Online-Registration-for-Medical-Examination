import '.dangnhap.scss'
import '../../assets/images/dangnhap.png'
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf'

function DangNhap() {
    return (
        <section>
            <div className="quaylai"><a href="#" className="previous">&#8592;</a></div>
            <div className="noi-dung">
                <div className="form">
                    <h2>Đăng nhập</h2>
                    <h3>Vui lòng nhập số điện thoại để tiếp tục</h3>
                    <form action="">
                        <div className="input-form">
                            <input type="text" name="" placeholder="+84"></input>
                        </div>

                        <div className="input-form">
                            <input type="submit" value="Tiếp tục"></input>
                        </div>
                        <div className="input-form">
                            <p>Bạn Chưa Có Tài Khoản? <a href="http://127.0.0.1:5500/dangki.html">Đăng Ký</a></p>
                        </div>
                    </form>
                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul class="icon-dang-nhap">
                        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i className="fa fa-google" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
            <div className="img-bg">
                <img src="images/dangnhap.png"></img>
            </div>
        </section>       
    );
}

export default DangNhap;
