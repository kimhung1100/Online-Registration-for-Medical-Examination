import './dangki.scss'
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf'

function DangKy() {
    return(
        <section>
            <div className="quaylai"><a href="./" className="previous">&#8592;</a></div>
            <div className="noi-dung1">
                <div className="form">
                    <h2>Form đăng kí </h2>
                    <form action="">
                        <div className="input-form">
                            <label for="phone">Số điện thoại:</label><input type="text" name="" placeholder="+84"></input>
                        </div>
                        <div className="input-form">
                            <label for="username">Tên tài khoản:</label><input type="text" id="username" name="username"
                                placeholder=""></input>
                        </div>
                        <div className="input-form">
                            <label for="password">Password:</label><input type="password" id="password" name="password"
                                placeholder=""></input>
                            <p> 6-14 kí tự, kết hợp chữ cái và số</p>
                        </div>
                        <ul className="gender">
                            <li><label for="gender">Giới tính:</label> </li>
                            <li><label for="male">Nam</label>
                                <input type="radio" name="gender" id="male" value="male" checked></input>
                            </li>
                            <li><label for="female">Nữ</label>
                                <input type="radio" name="gender" id="female" value="female"></input>
                            </li>
                        </ul>
                    </form>
                    <ul className="icon-dang-nhap">
                        <li>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <p><a href="">Liên kết với facebook</a></p>
                        </li>
                        <li>
                            <i className="fa fa-google" aria-hidden="true"></i>
                            <p><a href="">Liên kết với google</a></p>
                        </li>
                        <li>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <p><a href="">Liên kết với twitter</a></p>
                        </li>
                    </ul>
                    <div className="input-form1">
                        <input type="submit" value="Xác nhận" ></input>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DangKy;
