import classNames from 'classnames/bind';
import styles from './TraLoiThacMacChuyenMon.module.scss';
const cx = classNames.bind(styles);
function TraLoiThacMacChuyenMon() {
    return (
        <div className={cx('ThacMacChuyenMon_wrapper')}>
            <div className={cx('ThacMacChuyenMon_container')} class="d-flex justify-content-center">
                <div className={cx('left-side')}>
                    <div class="table table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">DANH MỤC THẮC MẮC</th>
                            </tr>
                        </thead>
                        <div class="list-group" id="list-tab" role="tablist">
                            <a
                                class="list-group-item list-group-item-action active"
                                id="list-home-list"
                                data-bs-toggle="list"
                                href="#list-home"
                                role="tab"
                                aria-controls="list-home"
                            >
                                TẤT CẢ
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-profile-list"
                                data-bs-toggle="list"
                                href="#list-profile"
                                role="tab"
                                aria-controls="list-profile"
                            >
                                Hoá trị
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-messages-list"
                                data-bs-toggle="list"
                                href="#list-messages"
                                role="tab"
                                aria-controls="list-messages"
                            >
                                Huyết học
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Lồng ngực - mạch máu
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Mắt
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Ngoại thần kinh
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Nhi - Tiêm ngừa
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Nội thận
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Nội tiết
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Phổi
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Sản phụ khoa
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Tai mũi họng
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                id="list-settings-list"
                                data-bs-toggle="list"
                                href="#list-settings"
                                role="tab"
                                aria-controls="list-settings"
                            >
                                Tâm lý
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('right-side')}>
                    <table class="table table-hover">
                        <thead class="thead">
                            <tr>
                                <th scope="col" className={cx('questionDay')}>
                                    Ngày gửi
                                </th>
                                <th scope="col" className={cx('question')}>
                                    Câu hỏi
                                </th>
                                <th scope="col" className={cx('sender')}>
                                    Người gửi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={cx('not_seen_question')}>
                                <td>
                                    {/* <FontAwesomeIcon icon="fa-solid fa-circle" /> */}
                                    22/10/2022
                                </td>
                                <td>
                                    Tôi năm nay 51 tuổi bị mất ngủ thường xuyên, mỗi đêm chỉ ngủ được 2 giờ đồng hồ, có
                                    đêm thức trắng. Vậy nên khám khoa nào thưa bác sĩ?
                                </td>
                                <td>DƯƠNG HUỲNH ANH ĐỨC</td>
                            </tr>
                            <tr>
                                <td>12/09/2022</td>
                                <td>
                                    trước đây em uống rượu bia bình thường, nhưng sau khi tiêm văcsin covid khoảng thời
                                    gian sau này chỉ cần uống 1 ly rượu hoặc bia vào người là xảy ra hiện tượng đỏ bừng
                                    mặt, đau đầu, sưng bì mặt mắt, khó chịu trong cơ thể, ... thì em bị gì và cần khám ở
                                    chuyên khoa nào ạ?
                                </td>
                                <td>Chien PQ</td>
                            </tr>
                            <tr className={cx('not_seen_question')}>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                            <tr>
                                <td>20/07/2022</td>
                                <td>
                                    Tôi đã sử dụng thuốc theo bác sĩ chỉ dẫn, trong đó có tuýp Salforelle, khi sử dụng
                                    thì mặt bị sưng đỏ, nhưng tôi vẫn sử dụng đã 3 ngày mà mặt còn sưng đỏ, vậy tôi tiếp
                                    tục sử dụng hay ngưng lại. Xin cảm ơn BS.
                                </td>
                                <td>NGUYEN VAN A</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex flex-wrap" className={cx('footer_right_side')}>
                        <nav aria-label="...">
                            <ul class="pagination pagination-lg">
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">1</span>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        ...
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        11
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* <button class="btn btn-primary btn-lg justify-content-end">Tạo câu hỏi</button> */}
                    </div>

                    {/* <div data-test="card-header" className={cx('card-header', 'style_panels_header')}>
                         , câu hỏi, người gửi
                        <ul class="d-flex flex-wrap">
                            <li class="list-group-item">20/06/2022</li>
                            <div style={{ width: 600 }}>
                                <li class="list-group-item">
                                    Tôi năm nay 51 tuổi bị mất ngủ thường xuyên, mỗi đêm chỉ ngủ được 2 giờ đồng hồ, có
                                    đêm thức trắng. Vậy nên khám khoa nào thưa bác sĩ?
                                </li>
                            </div>

                            <div style={{ width: 200 }}>
                                <li class="list-group-item item_name">Dương Huỳnh Anh Đức</li>
                            </div>
                        </ul> 
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default TraLoiThacMacChuyenMon;
