import { useState } from 'react';
import React, { useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../components/UserContext';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../TaoMoiHoSo/TaoMoiHoSo.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function SuaHoSo() {
    const param = useParams();
    const context = useContext(UserContext);
    const [user, setUser] = context[0];
    //const [patient, setPatient] = useState({});
    useEffect(() => {
        getPatients();
    }, []);

    const getPatients = () => {
        const sendData = {
            userID: user.key,
            id: param.id,
        };
        axios
            .post(
                `http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/lookupone`,
                sendData,
            )
            .then((result) => {
                setData(result.data);
                console.log(result.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

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
            id: data.id,
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
            .put(
                `http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/update`,
                sendData,
            )
            .then((result) => {
                console.log(data.id);
                console.log(sendData);
                navigate(`/`);
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
                        Cập nhật hồ sơ bệnh nhân
                    </div>
                </div>
            </div>
            <div>
                <div className={cx('TaoMoiHoSo_container')}>
                    <h2>CẬP NHẬT HỒ SƠ</h2>
                    <div className={cx('TaoMoiHoSo_lua_chon')}></div>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('TaoMoiHoSo_form_chua_tung_kham', problem1 && 'open', problem2 && 'hide')}>
                            <h2>NHẬP THÔNG TIN BỆNH NHÂN</h2>
                            <div className={cx('TaoMoiHoSo_info')}>
                                Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung
                                cấp sai thông tin bệnh nhân & điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực trước
                                khi đặt khám.
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
                                <button type="submit" className={cx('TaoMoiHoSo_agree')}>
                                    {/* <a href="" className={cx("TaoMoiHoSo_agree")}> */}
                                    <i className={cx('fa-solid fa-user-plus')}></i> Cập nhật
                                </button>
                                <div className={cx('TaoMoiHoSo_erase')} onClick={handleReset}>
                                    <i className={cx('fa-solid fa-eraser')}></i>
                                    Nhập lại
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
