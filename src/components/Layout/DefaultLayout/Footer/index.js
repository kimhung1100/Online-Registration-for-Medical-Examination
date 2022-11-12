import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import './Footer.module.scss';
import blueLogo from '../../../../assets/images/blue_logo.jpg';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("style_footer", "animated")}>
            <div className={cx('style_footer_inner')}>
                    <div data-test='container' class={cx("container")}>
                        <div data-test='row' class="row">
                            <div data-test='col' class="col-lg-2">
                                <div className='style_footer_item'>
                                    <img src={blueLogo} class="img-fluid" className={styles.logo}></img>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <p><strong>THE GROUP SOLUTIONS</strong></p>
                                <p>Địa chỉ: Trường Đại học Bách Khoa TPHCM</p>
                                <p>Điện thoại: 028 7300 9999</p>
                                <p>Email: the_groupsolutions@hcmut.edu.vn</p>
                                <p>Điện thoại: (+84) XX XXX XXXXXX</p>
                            </div>
                            <div class="col-lg-3">
                                <p>Liên hệ</p>
                                <p>Điều khoản dịch vụ</p>
                                <p>Chính sách bảo mật</p>
                                <p>Quy định sử dụng</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" className={cx('linearBar')}></div>
            </div>
        </div>

        // <div className={cx('linnearBar')}>
        //         <div class="container">
        //             <div class="row">
        //                 <div class="col-lg-12">
        //                     <p>© 2021 THE GROUP SOLUTIONS. All rights reserved.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
    );
}

export default Footer;
