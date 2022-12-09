import classNames from 'classnames/bind';
import styles from './TaoMoiHoSo.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';
import { useContext } from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);

function TaoMoiHoSo() {
    const [problem1, setProblem1] = useState(false);
    const [problem2, setProblem2] = useState(false);

    const handleProblem1 = () => {
        setProblem1(!problem1);
        if (problem1 === false) setProblem2(false);
    };

    const handleProblem2 = () => {
        setProblem2(!problem2);
        if (problem2 === false) setProblem1(false);
    };

    // useEffect(() => {
    //     const notiChua = document.querySelector('.TaoMoiHoSo_chua_tung_kham')
    //     const formChua = document.querySelector('.TaoMoiHoSo_form_chua_tung_kham')

    //     const notiDa = document.querySelector('.TaoMoiHoSo_da_tung_kham')
    //     const formDa = document.querySelector('.TaoMoiHoSo_form_da_tung_kham')

    //     function openDa() {
    //         notiDa.classList.add('open')
    //         formDa.classList.add('open')
    //         notiChua.classList.add('hide')
    //         formChua.classList.add('hide')
    //     }

    //     function openChua() {
    //         notiDa.classList.remove('open')
    //         formDa.classList.remove('open')
    //         notiChua.classList.remove('hide')
    //         formChua.classList.remove('hide')
    //     }

    //     notiChua.addEventListener('click', openChua)
    //     notiDa.addEventListener('click', openDa)
    // },[])

    const [user, setUser] = useContext(UserContext);

    const [data, setData] = useState({
        name: '',
        gender: '',
        birthday: '',
        email: '',
        phone: '',
        cmnd: '',
        job: '',
        ethnicity: '',
        address: '',
        province: '',
        ward: '',
        city: '',
    });

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendData = {
            name: data.name,
            gender: data.gender,
            birthday: data.birthday,
            email: data.email,
            phone: data.phone,
            cmnd: data.cmnd,
            job: data.job,
            ethnicity: data.ethnicity,
            address: data.address,
            province: data.province,
            city: data.city,
            ward: data.ward,
            userID: user.key,
        };

        axios
            .post(
                `http://localhost/Online-Registration-for-Medical-Examination/src/php/patients.php/patient/save`,
                sendData,
            )
            .then((result) => {
                console.log(user.key);
                console.log(sendData);
                navigate(`/chon-ho-so`);
            })
            .catch((error) => {
                console.log(error.response);
            });

        setData({
            ...data,
            name: '',
            gender: '',
            birthday: '',
            email: '',
            phone: '',
            cmnd: '',
            job: '',
            ethnicity: '',
            address: '',
            province: '',
            ward: '',
            city: '',
            userID: '',
        });
    };

    const handleReset = () => {
        setData({
            ...data,
            name: '',
            gender: '',
            birthday: '',
            email: '',
            phone: '',
            cmnd: '',
            job: '',
            ethnicity: '',
            address: '',
            province: '',
            ward: '',
            city: '',
            userID: '',
        });
    };

    return (
        <div>
            <div className={cx('TaoMoiHoSo_wrapper')}>
                <div className={cx('TaoMoiHoSo_wrapper_content')}>
                    <Link to="/" className={cx('TaoMoiHoSo_trang_chu')}>
                        Trang chủ
                    </Link>
                    <div className={cx('TaoMoiHoSo_tao_ho_so')}>
                        <i className={cx('fa-solid fa-chevron-right')}></i>
                        Tạo hồ sơ bệnh nhân
                    </div>
                </div>
            </div>
            <div className={cx('TaoMoiHoSo_container')}>
                <h2>TẠO MỚI HỒ SƠ</h2>
                <div className={cx('TaoMoiHoSo_lua_chon')}>
                    <div
                        onClick={handleProblem1}
                        className={cx('TaoMoiHoSo_chua_tung_kham', problem1 && 'open', problem2 && 'hide')}
                    >
                        Chưa từng khám
                    </div>
                    <div
                        onClick={handleProblem2}
                        className={cx('TaoMoiHoSo_da_tung_kham', problem2 && 'open', problem1 && 'hide')}
                    >
                        Đã từng khám
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={cx('TaoMoiHoSo_form_chua_tung_kham', problem1 && 'open', problem2 && 'hide')}>
                        <h2>NHẬP THÔNG TIN BỆNH NHÂN</h2>
                        <div className={cx('TaoMoiHoSo_info')}>
                            Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp
                            sai thông tin bệnh nhân & điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực trước khi đặt
                            khám.
                        </div>
                        <div className={cx('TaoMoiHoSo_note')}>(*) Thông tin bắt buộc nhập</div>

                        <div className={cx('TaoMoiHoSo_dien_form')}>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ho_ten">
                                    Họ và tên (Có dấu)
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ho_ten')}
                                    placeholder="Ví dụ: Bùi Kim Hưng"
                                    id="input"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".birth">
                                    Ngày tháng năm sinh
                                    <sup>*</sup>
                                </label>
                                <div className={cx('TaoMoiHoSo_form_box_birth')}>
                                    <input
                                        type="date"
                                        //placeholder="dd/mm/yy"
                                        name="birthday"
                                        value={data.birthday}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".sdt">
                                    Số điện thoại
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_sdt')}
                                    placeholder="Nhập số điện thoại"
                                    name="phone"
                                    id="input"
                                    value={data.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".gender">
                                    Giới tính
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <select
                                    name="gender"
                                    id="gender"
                                    aria-placeholder="Giới tính"
                                    value={data.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Chọn giới tính</option>
                                    <option value="Nam" onChange={handleChange}>
                                        Nam
                                    </option>
                                    <option value="Nữ" onChange={handleChange}>
                                        Nữ
                                    </option>
                                </select>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".job">
                                    Nghề nghiệp
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_job')}
                                    placeholder="Nhập nghề nghiệp"
                                    id="input"
                                    name="job"
                                    value={data.job}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".cmnd">
                                    Số CMND/Passport
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_cmnd')}
                                    placeholder="Nhập số CMND"
                                    id="input"
                                    name="cmnd"
                                    value={data.cmnd}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".email">Địa chỉ Email</label>
                                <br></br>
                                <input
                                    type="email"
                                    className={cx('TaoMoiHoSo_email')}
                                    placeholder="Nhập địa chỉ email để nhận phiếu khám"
                                    id="input"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ethnic">Dân tộc</label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ethnic')}
                                    placeholder="Nhập dân tộc"
                                    id="input"
                                    name="ethnicity"
                                    value={data.ethnicity}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".province">
                                    Tỉnh / Thành
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_province')}
                                    placeholder="Nhập tỉnh thành"
                                    name="province"
                                    value={data.province}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".city">
                                    Quận / Huyện
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_city')}
                                    placeholder="Nhập quận huyện"
                                    name="city"
                                    value={data.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ward">
                                    Phường / Xã
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ward')}
                                    placeholder="Nhập phường xã"
                                    name="ward"
                                    value={data.ward}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".address">
                                    Địa chỉ
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_address')}
                                    placeholder="Nhập địa chỉ"
                                    id="input"
                                    name="address"
                                    value={data.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx('TaoMoiHoSo_button')}>
                            <div className={cx('TaoMoiHoSo_agree')}>
                                {/* <a href="" className={cx("TaoMoiHoSo_agree")}> */}
                                <button type="submit">
                                    {' '}
                                    <i className={cx('fa-solid fa-user-plus')}></i> Tạo mới
                                </button>
                                {/* </a> */}
                            </div>
                            <div className={cx('TaoMoiHoSo_erase')} onClick={handleReset}>
                                <i className={cx('fa-solid fa-eraser')}></i>
                                Nhập lại
                            </div>
                        </div>
                    </div>
                </form>
                <div className={cx('TaoMoiHoSo_form_da_tung_kham', problem2 && 'open', problem1 && 'hide')}>
                    <h2>NHẬP MÃ SỐ BỆNH NHÂN / MÃ SỐ BHYT</h2>
                    <div className={cx('TaoMoiHoSo_da_tung')}>
                        <div className={cx('TaoMoiHoSo_dien_form')}>
                            <input type="text" placeholder="Nhập mã số bệnh nhân / Mã số BHYT"></input>
                            <a href="" className={cx('TaoMoiHoSo_search')}>
                                Tìm kiếm
                            </a>
                        </div>
                        <div className={cx('TaoMoiHoSo_lost')}>
                            <i className={cx('fa-solid fa-caret-right')}></i>
                            <a href="" className={cx('TaoMoiHoSo_link_lost')}>
                                Tôi mất mã số bệnh nhân của mình
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaoMoiHoSo;
