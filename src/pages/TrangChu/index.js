import classNames from 'classnames/bind';
import doctorImage from '../../assets/images/doctor_image.png';
import styles from './TrangChu.module.scss';
import backgroundImage from '../../assets/images/hospital_background.jpg';
const cx = classNames.bind(styles);
function TrangChu() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('middle')}>
                    <div className={cx('title')}>ĐẶT LỊCH KHÁM</div>
                    <div className={cx('description')}>Đặt lịch khám theo chuyên khoa, chuyên môn, bác sĩ.</div>
                    <div className={cx('button')}>
                        <a href="./dang-ky">Đăng ký khám</a>
                    </div>
                    <div className={cx('right')}>
                        <img src={doctorImage} className={cx('doctorImage')}></img>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div className={cx('leftBox')}>
                        <div className={cx('title')}>TẠI SAO NÊN CHỌN CHÚNG TÔI?</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div className={cx('rightBox')}>
                        <div className={cx('title')}>TẠI SAO KHÔNG NÊN CHỌN CHÚNG TÔI?</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrangChu;

// {
//     <div className={cx('content')}>
//         <div className={cx('middle')}>
//             <div className={cx('title')}>
//                 <h1>Chào mừng bạn đến với</h1>
//                 <h1>Phòng khám đa khoa</h1>
//                 <h1>Đại Học Y Dược</h1>
//             </div>
//             <div className={cx('description')}>
//                 <p>
//                     Phòng khám đa khoa Đại học Y Dược là một trong những phòng khám đa khoa uy tín, chuyên nghiệp tại Hà
//                     Nội. Chúng tôi có đội ngũ bác sĩ chuyên nghiệp, giàu kinh nghiệm, luôn sẵn sàng phục vụ bạn.
//                 </p>
//             </div>
//             <div className={cx('button')}>
//                 <a href="./dang-ky">Đăng ký khám</a>
//             </div>
//         </div>
//         <div className={cx('right')}>
//             <img src={doctorImage} className={cx('doctorImage')}></img>
//         </div>
//     </div>;
// }

{
    /* <div class="card" style="width: 18rem;">
    <img src={doctorImage} class="card-img-top" alt="..." />
    <div class="card-body">
        <h5
            class="card-title
                        "
        >
            Card title
        </h5>
        <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
            Go somewhere
        </a>
    </div>
</div>; */
}
