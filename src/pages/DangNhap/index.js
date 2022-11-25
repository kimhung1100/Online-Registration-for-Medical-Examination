import styles from './dangnhap.scss'
import classNames from 'classnames/bind';
import img from '../../assets/images/dangnhap.png'
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf'
const cx = classNames.bind(styles);
function DangNhap() {
    return (
        <section className={cx('container1')}>
            <div className={cx('quaylai')}><a href="./" className={cx('previous')}>&#8592;</a></div>
            <div className='noi-dung'>
                <div className='form'>
                    <h2>Đăng nhập</h2>
                    <h3>Vui lòng nhập số điện thoại để tiếp tục</h3>
                    <form action=''>
                        <div className={cx('input-form')}>
                            <input type="text" name="" placeholder="+84"></input>
                        </div>

                        <div className={cx("input-form")}>
                            <input type="submit" value="Tiếp tục"></input>
                        </div>
                        <div className={cx("input-form")}>
                            <p>Bạn Chưa Có Tài Khoản? <a href="http://localhost:3000/dang-ky">Đăng Ký</a></p>
                        </div>
                    </form>
                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul class={cx("icon-dang-nhap")}>
                        <li><i className={cx("fa fa-facebook")} aria-hidden="true"></i></li>
                        <li><i className={cx("fa fa-google")} aria-hidden="true"></i></li>
                        <li><i className={cx("fa fa-twitter")} aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
            <div className={cx("img-bg")}>
                <img src={img} value="image"></img>
            </div>
        </section>       
    );
}

export default DangNhap;
