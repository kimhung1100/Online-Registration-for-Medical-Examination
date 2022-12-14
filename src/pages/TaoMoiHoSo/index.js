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
        // valid input
        if (data.name === '') {
            alert('Vui l??ng nh???p h??? t??n');
            return;
        }
        // valid phone number
        if (data.phone === '') {
            alert('Vui l??ng nh???p s??? ??i???n tho???i');
            return;
        } else if (data.phone.length < 10 || data.phone.length > 11) {
            alert('S??? ??i???n tho???i kh??ng h???p l???');
            return;
        }
        // valid cmnd
        if (data.cmnd === '') {
            alert('Vui l??ng nh???p s??? CMND');
            return;
        } else if (data.cmnd.length < 9 || data.cmnd.length > 12) {
            alert('S??? CMND kh??ng h???p l???');
            return;
        }
        // valid email
        if (data.email === '') {
            alert('Vui l??ng nh???p email');
            return;
        } else if (!data.email.includes('@')) {
            alert('Email kh??ng h???p l???');
            return;
        }

        // valid address
        if (data.address === '') {
            alert('Vui l??ng nh???p ?????a ch???');
            return;
        }
        // valid province
        if (data.province === '') {
            alert('Vui l??ng ch???n t???nh/th??nh ph???');
            return;
        }
        // valid city
        if (data.city === '') {
            alert('Vui l??ng ch???n qu???n/huy???n');
            return;
        }
        // valid ward
        if (data.ward === '') {
            alert('Vui l??ng ch???n ph?????ng/x??');
            return;
        }
        // valid birthday
        if (data.birthday === '') {
            alert('Vui l??ng ch???n ng??y sinh');
            return;
        }

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
                        Trang ch???
                    </Link>
                    <div className={cx('TaoMoiHoSo_tao_ho_so')}>
                        <i className={cx('fa-solid fa-chevron-right')}></i>
                        T???o h??? s?? b???nh nh??n
                    </div>
                </div>
            </div>
            <div className={cx('TaoMoiHoSo_container')}>
                <h2>T???O M???I H??? S??</h2>
                <div className={cx('TaoMoiHoSo_lua_chon')}>
                    <div
                        onClick={handleProblem1}
                        className={cx('TaoMoiHoSo_chua_tung_kham', problem1 && 'open', problem2 && 'hide')}
                    >
                        Ch??a t???ng kh??m
                    </div>
                    <div
                        onClick={handleProblem2}
                        className={cx('TaoMoiHoSo_da_tung_kham', problem2 && 'open', problem1 && 'hide')}
                    >
                        ???? t???ng kh??m
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={cx('TaoMoiHoSo_form_chua_tung_kham', problem1 && 'open', problem2 && 'hide')}>
                        <h2>NH???P TH??NG TIN B???NH NH??N</h2>
                        <div className={cx('TaoMoiHoSo_info')}>
                            Vui l??ng cung c???p th??ng tin ch??nh x??c ????? ???????c ph???c v??? t???t nh???t. Trong tr?????ng h???p cung c???p
                            sai th??ng tin b???nh nh??n & ??i???n tho???i, vi???c x??c nh???n cu???c h???n s??? kh??ng hi???u l???c tr?????c khi ?????t
                            kh??m.
                        </div>
                        <div className={cx('TaoMoiHoSo_note')}>(*) Th??ng tin b???t bu???c nh???p</div>

                        <div className={cx('TaoMoiHoSo_dien_form')}>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ho_ten">
                                    H??? v?? t??n (C?? d???u)
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ho_ten')}
                                    placeholder="V?? d???: B??i Kim H??ng"
                                    id="input"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".birth">
                                    Ng??y th??ng n??m sinh
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
                                    S??? ??i???n tho???i
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_sdt')}
                                    placeholder="Nh???p s??? ??i???n tho???i"
                                    name="phone"
                                    id="input"
                                    value={data.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".gender">
                                    Gi???i t??nh
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <select
                                    name="gender"
                                    id="gender"
                                    aria-placeholder="Gi???i t??nh"
                                    value={data.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Ch???n gi???i t??nh</option>
                                    <option value="Nam" onChange={handleChange}>
                                        Nam
                                    </option>
                                    <option value="N???" onChange={handleChange}>
                                        N???
                                    </option>
                                </select>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".job">
                                    Ngh??? nghi???p
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_job')}
                                    placeholder="Nh???p ngh??? nghi???p"
                                    id="input"
                                    name="job"
                                    value={data.job}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".cmnd">
                                    S??? CMND/Passport
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_cmnd')}
                                    placeholder="Nh???p s??? CMND"
                                    id="input"
                                    name="cmnd"
                                    value={data.cmnd}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".email">?????a ch??? Email</label>
                                <br></br>
                                <input
                                    type="email"
                                    className={cx('TaoMoiHoSo_email')}
                                    placeholder="Nh???p ?????a ch??? email ????? nh???n phi???u kh??m"
                                    id="input"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ethnic">D??n t???c</label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ethnic')}
                                    placeholder="Nh???p d??n t???c"
                                    id="input"
                                    name="ethnicity"
                                    value={data.ethnicity}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".province">
                                    T???nh / Th??nh
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_province')}
                                    placeholder="Nh???p t???nh th??nh"
                                    name="province"
                                    value={data.province}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".city">
                                    Qu???n / Huy???n
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_city')}
                                    placeholder="Nh???p qu???n huy???n"
                                    name="city"
                                    value={data.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ward">
                                    Ph?????ng / X??
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ward')}
                                    placeholder="Nh???p ph?????ng x??"
                                    name="ward"
                                    value={data.ward}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".address">
                                    ?????a ch???
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_address')}
                                    placeholder="Nh???p ?????a ch???"
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
                                    <i className={cx('fa-solid fa-user-plus')}></i> T???o m???i
                                </button>
                                {/* </a> */}
                            </div>
                            <div className={cx('TaoMoiHoSo_erase')} onClick={handleReset}>
                                <i className={cx('fa-solid fa-eraser')}></i>
                                Nh???p l???i
                            </div>
                        </div>
                    </div>
                </form>
                <div className={cx('TaoMoiHoSo_form_da_tung_kham', problem2 && 'open', problem1 && 'hide')}>
                    <h2>NH???P M?? S??? B???NH NH??N / M?? S??? BHYT</h2>
                    <div className={cx('TaoMoiHoSo_da_tung')}>
                        <div className={cx('TaoMoiHoSo_dien_form')}>
                            <input type="text" placeholder="Nh???p m?? s??? b???nh nh??n / M?? s??? BHYT"></input>
                            <a href="" className={cx('TaoMoiHoSo_search')}>
                                T??m ki???m
                            </a>
                        </div>
                        <div
                            onClick={handleProblem2}
                            className={cx('TaoMoiHoSo_da_tung_kham', problem2 && 'open', problem1 && 'hide')}
                        >
                            ???? t???ng kh??m
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('TaoMoiHoSo_form_chua_tung_kham', problem1 && 'open', problem2 && 'hide')}>
                            <h2>NH???P TH??NG TIN B???NH NH??N</h2>
                            <div className={cx('TaoMoiHoSo_info')}>
                                Vui l??ng cung c???p th??ng tin ch??nh x??c ????? ???????c ph???c v??? t???t nh???t. Trong tr?????ng h???p cung
                                c???p sai th??ng tin b???nh nh??n & ??i???n tho???i, vi???c x??c nh???n cu???c h???n s??? kh??ng hi???u l???c tr?????c
                                khi ?????t kh??m.
                            </div>
                            <div className={cx('TaoMoiHoSo_note')}>(*) Th??ng tin b???t bu???c nh???p</div>

                            <div className={cx('TaoMoiHoSo_dien_form')}>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".ho_ten">
                                        H??? v?? t??n (C?? d???u)
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_ho_ten')}
                                        placeholder="V?? d???: B??i Kim H??ng"
                                        id="input"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".birth">
                                        Ng??y th??ng n??m sinh
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
                                        S??? ??i???n tho???i
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_sdt')}
                                        placeholder="Nh???p s??? ??i???n tho???i"
                                        name="phone"
                                        id="input"
                                        value={data.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".gender">
                                        Gi???i t??nh
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <select
                                        name="gender"
                                        id="gender"
                                        aria-placeholder="Gi???i t??nh"
                                        value={data.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Ch???n gi???i t??nh</option>
                                        <option value="Nam" onChange={handleChange}>
                                            Nam
                                        </option>
                                        <option value="N???" onChange={handleChange}>
                                            N???
                                        </option>
                                    </select>
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".job">
                                        Ngh??? nghi???p
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_job')}
                                        placeholder="Nh???p ngh??? nghi???p"
                                        id="input"
                                        name="job"
                                        value={data.job}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".cmnd">
                                        S??? CMND/Passport
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_cmnd')}
                                        placeholder="Nh???p s??? CMND"
                                        id="input"
                                        name="cmnd"
                                        value={data.cmnd}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".email">?????a ch??? Email</label>
                                    <br></br>
                                    <input
                                        type="email"
                                        className={cx('TaoMoiHoSo_email')}
                                        placeholder="Nh???p ?????a ch??? email ????? nh???n phi???u kh??m"
                                        id="input"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".ethnic">D??n t???c</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_ethnic')}
                                        placeholder="Nh???p d??n t???c"
                                        id="input"
                                        name="ethnicity"
                                        value={data.ethnicity}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".province">
                                        T???nh / Th??nh
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_province')}
                                        placeholder="Nh???p t???nh th??nh"
                                        name="province"
                                        value={data.province}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".city">
                                        Qu???n / Huy???n
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_city')}
                                        placeholder="Nh???p qu???n huy???n"
                                        name="city"
                                        value={data.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".ward">
                                        Ph?????ng / X??
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_ward')}
                                        placeholder="Nh???p ph?????ng x??"
                                        name="ward"
                                        value={data.ward}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={cx('TaoMoiHoSo_form_box')}>
                                    <label for=".address">
                                        ?????a ch???
                                        <sup>*</sup>
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className={cx('TaoMoiHoSo_address')}
                                        placeholder="Nh???p ?????a ch???"
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
                                        <i className={cx('fa-solid fa-user-plus')}></i> T???o m???i
                                    </button>
                                    {/* </a> */}
                                </div>
                                <div className={cx('TaoMoiHoSo_erase')} onClick={handleReset}>
                                    <i className={cx('fa-solid fa-eraser')}></i>
                                    Nh???p l???i
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className={cx('TaoMoiHoSo_form_da_tung_kham', problem2 && 'open', problem1 && 'hide')}>
                        <h2>NH???P M?? S??? B???NH NH??N / M?? S??? BHYT</h2>
                        <div className={cx('TaoMoiHoSo_da_tung')}>
                            <div className={cx('TaoMoiHoSo_dien_form')}>
                                <input type="text" placeholder="Nh???p m?? s??? b???nh nh??n / M?? s??? BHYT"></input>
                                <div className={cx('TaoMoiHoSo_search')}>T??m ki???m</div>
                            </div>
                            <div className={cx('TaoMoiHoSo_lost')}>
                                <i className={cx('fa-solid fa-caret-right')}></i>
                                <a href="" className={cx('TaoMoiHoSo_link_lost')}>
                                    T??i m???t m?? s??? b???nh nh??n c???a m??nh
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaoMoiHoSo;
