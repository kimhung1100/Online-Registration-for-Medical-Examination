import classNames from 'classnames/bind';
import styles from './TaoMoiHoSo.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
    const onSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        name: '',
        phone: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
    });
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Họ và tên: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field autoComplete="off" id="inputCreateRecord" name="name" placeHolder="Ví dụ: Bùi Kim Hưng..." />

                    <label>Số điện thoại: </label>
                    <ErrorMessage name="phone" component="span" />
                    <Field
                        autoComplete="off"
                        type="text"
                        id="inputCreateRecord"
                        name="phone"
                        placeHolder="Nhập số điện thoại"
                    />

                    <button type="submit">Tạo hồ sơ</button>
                </Form>
            </Formik>

            <div>
                <div className={cx('TaoMoiHoSo_wrapper')}>
                    <div className={cx('TaoMoiHoSo_wrapper_content')}>
                        <a href="./" className={cx('TaoMoiHoSo_trang_chu')}>
                            Trang chủ
                        </a>
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
                                ></input>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".birth">
                                    Ngày tháng năm sinh
                                    <sup>*</sup>
                                </label>
                                <div className={cx('TaoMoiHoSo_form_box_birth')}>
                                    <select name="birth" id="birth">
                                        <option value="">Ngày</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                        <option value="">9</option>
                                        <option value="">10</option>
                                        <option value="">11</option>
                                        <option value="">12</option>
                                        <option value="">13</option>
                                        <option value="">14</option>
                                        <option value="">15</option>
                                        <option value="">16</option>
                                        <option value="">17</option>
                                        <option value="">18</option>
                                        <option value="">19</option>
                                        <option value="">20</option>
                                        <option value="">21</option>
                                        <option value="">22</option>
                                        <option value="">23</option>
                                        <option value="">24</option>
                                        <option value="">25</option>
                                        <option value="">26</option>
                                        <option value="">27</option>
                                        <option value="">28</option>
                                        <option value="">29</option>
                                        <option value="">30</option>
                                        <option value="">31</option>
                                    </select>
                                    <select name="birth" id="birth">
                                        <option value="">Tháng</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                        <option value="">9</option>
                                        <option value="">10</option>
                                        <option value="">11</option>
                                        <option value="">12</option>
                                    </select>
                                    <select name="birth" id="birth">
                                        <option value="">Năm</option>
                                        <option value="">2022</option>
                                        <option value="">2021</option>
                                        <option value="">2020</option>
                                        <option value="">2019</option>
                                        <option value="">2018</option>
                                        <option value="">2017</option>
                                        <option value="">2016</option>
                                        <option value="">2015</option>
                                        <option value="">2014</option>
                                        <option value="">2013</option>
                                        <option value="">2012</option>
                                        <option value="">2011</option>
                                        <option value="">2010</option>
                                        <option value="">2009</option>
                                        <option value="">2008</option>
                                        <option value="">2007</option>
                                        <option value="">2006</option>
                                        <option value="">2005</option>
                                        <option value="">2004</option>
                                        <option value="">2003</option>
                                        <option value="">2002</option>
                                        <option value="">2001</option>
                                        <option value="">2000</option>
                                        <option value="">1999</option>
                                        <option value="">1998</option>
                                        <option value="">1997</option>
                                        <option value="">1996</option>
                                        <option value="">1995</option>
                                        <option value="">1994</option>
                                        <option value="">1993</option>
                                        <option value="">1992</option>
                                        <option value="">1991</option>
                                        <option value="">1990</option>
                                        <option value="">1989</option>
                                        <option value="">1988</option>
                                        <option value="">1987</option>
                                        <option value="">1986</option>
                                        <option value="">1985</option>
                                        <option value="">1984</option>
                                        <option value="">1983</option>
                                        <option value="">1982</option>
                                        <option value="">1981</option>
                                        <option value="">1980</option>
                                        <option value="">1979</option>
                                        <option value="">1978</option>
                                        <option value="">1977</option>
                                        <option value="">1976</option>
                                        <option value="">1975</option>
                                        <option value="">1974</option>
                                        <option value="">1973</option>
                                        <option value="">1972</option>
                                        <option value="">1971</option>
                                        <option value="">1970</option>
                                        <option value="">1969</option>
                                        <option value="">1968</option>
                                        <option value="">1967</option>
                                        <option value="">1966</option>
                                        <option value="">1965</option>
                                        <option value="">1964</option>
                                        <option value="">1963</option>
                                        <option value="">1962</option>
                                        <option value="">1961</option>
                                        <option value="">1960</option>
                                        <option value="">1959</option>
                                        <option value="">1958</option>
                                        <option value="">1957</option>
                                        <option value="">1956</option>
                                        <option value="">1955</option>
                                        <option value="">1954</option>
                                        <option value="">1953</option>
                                        <option value="">1952</option>
                                        <option value="">1951</option>
                                        <option value="">1950</option>
                                        <option value="">1949</option>
                                        <option value="">1948</option>
                                        <option value="">1947</option>
                                        <option value="">1946</option>
                                        <option value="">1945</option>
                                        <option value="">1944</option>
                                        <option value="">1943</option>
                                        <option value="">1942</option>
                                        <option value="">1941</option>
                                        <option value="">1940</option>
                                        <option value="">1939</option>
                                        <option value="">1938</option>
                                        <option value="">1937</option>
                                        <option value="">1936</option>
                                        <option value="">1935</option>
                                        <option value="">1934</option>
                                        <option value="">1933</option>
                                        <option value="">1932</option>
                                        <option value="">1931</option>
                                        <option value="">1930</option>
                                    </select>
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
                                ></input>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".gender">
                                    Giới tính
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <select name="gender" id="gender" aria-placeholder="Giới tính">
                                    <option value="">Chọn giới tính</option>
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
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
                                ></input>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".cmnd">
                                    Số CMND/Passport
                                    <sup>*</sup>
                                </label>
                                <br></br>
                                <input type="text" className={cx('TaoMoiHoSo_cmnd')} placeholder="Nhập số CMND"></input>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".email">Địa chỉ Email</label>
                                <br></br>
                                <input
                                    type="email"
                                    className={cx('TaoMoiHoSo_email')}
                                    placeholder="Nhập địa chỉ email để nhận phiếu khám"
                                ></input>
                            </div>
                            <div className={cx('TaoMoiHoSo_form_box')}>
                                <label for=".ethnic">Dân tộc</label>
                                <br></br>
                                <input
                                    type="text"
                                    className={cx('TaoMoiHoSo_ethnic')}
                                    placeholder="Nhập dân tộc"
                                ></input>
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
                                ></input>
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
                                ></input>
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
                                ></input>
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
                                ></input>
                            </div>
                        </div>
                        <div className={cx('TaoMoiHoSo_button')}>
                            <a href="" className={cx('TaoMoiHoSo_agree')}>
                                <i className={cx('fa-solid fa-user-plus')}></i>
                                Tạo mới
                            </a>
                            <a href="" className={cx('TaoMoiHoSo_erase')}>
                                <i className={cx('fa-solid fa-eraser')}></i>
                                Nhập lại
                            </a>
                        </div>
                    </div>
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
        </div>
    );
    // ducpink
    // return (

    //     <div>
    //     <div className={cx("TaoMoiHoSo_wrapper")}>
    //         <div className={cx("TaoMoiHoSo_wrapper_content")}>
    //             <a href="./" className={cx("TaoMoiHoSo_trang_chu")}>Trang chủ</a>
    //             <div className={cx("TaoMoiHoSo_tao_ho_so")}>
    //                 <i className={cx("fa-solid fa-chevron-right")}></i>
    //                 Tạo hồ sơ bệnh nhân
    //             </div>
    //         </div>
    //     </div>
    //     <div className={cx("TaoMoiHoSo_container")}>
    //         <h2>TẠO MỚI HỒ SƠ</h2>
    //         <div className={cx("TaoMoiHoSo_lua_chon")}>
    //             <div onClick={handleProblem1} className={cx("TaoMoiHoSo_chua_tung_kham", problem1&&"open", problem2&&"hide")}>
    //                 Chưa từng khám
    //             </div>
    //             <div onClick={handleProblem2} className={cx("TaoMoiHoSo_da_tung_kham", problem2&&"open", problem1&&"hide")}>
    //                 Đã từng khám
    //             </div>
    //         </div>
    //         <div className={cx("TaoMoiHoSo_form_chua_tung_kham", problem1&&"open", problem2&&"hide")}>
    //             <h2>NHẬP THÔNG TIN BỆNH NHÂN</h2>
    //             <div className={cx("TaoMoiHoSo_info")}>Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin bệnh nhân & điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực trước khi đặt khám.</div>
    //             <div className={cx("TaoMoiHoSo_note")}>(*) Thông tin bắt buộc nhập</div>
    //             <div className={cx("TaoMoiHoSo_dien_form")}>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".ho_ten">
    //                         Họ và tên (Có dấu)
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_ho_ten" )}placeholder="Ví dụ: Bùi Kim Hưng"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                         <label for=".birth">
    //                             Ngày tháng năm sinh
    //                             <sup>*</sup>
    //                         </label>
    //                         <div className={cx("TaoMoiHoSo_form_box_birth")}>
    //                             <select name="birth" id="birth">
    //                                 <option value="">Ngày</option>
    //                                 <option value="">1</option>
    //                                 <option value="">2</option>
    //                                 <option value="">3</option>
    //                                 <option value="">4</option>
    //                                 <option value="">5</option>
    //                                 <option value="">6</option>
    //                                 <option value="">7</option>
    //                                 <option value="">8</option>
    //                                 <option value="">9</option>
    //                                 <option value="">10</option>
    //                                 <option value="">11</option>
    //                                 <option value="">12</option>
    //                                 <option value="">13</option>
    //                                 <option value="">14</option>
    //                                 <option value="">15</option>
    //                                 <option value="">16</option>
    //                                 <option value="">17</option>
    //                                 <option value="">18</option>
    //                                 <option value="">19</option>
    //                                 <option value="">20</option>
    //                                 <option value="">21</option>
    //                                 <option value="">22</option>
    //                                 <option value="">23</option>
    //                                 <option value="">24</option>
    //                                 <option value="">25</option>
    //                                 <option value="">26</option>
    //                                 <option value="">27</option>
    //                                 <option value="">28</option>
    //                                 <option value="">29</option>
    //                                 <option value="">30</option>
    //                                 <option value="">31</option>
    //                             </select>
    //                             <select name="birth" id="birth">
    //                                 <option value="">Tháng</option>
    //                                 <option value="">1</option>
    //                                 <option value="">2</option>
    //                                 <option value="">3</option>
    //                                 <option value="">4</option>
    //                                 <option value="">5</option>
    //                                 <option value="">6</option>
    //                                 <option value="">7</option>
    //                                 <option value="">8</option>
    //                                 <option value="">9</option>
    //                                 <option value="">10</option>
    //                                 <option value="">11</option>
    //                                 <option value="">12</option>
    //                             </select>
    //                             <select name="birth" id="birth">
    //                                 <option value="">Năm</option>
    //                                 <option value="">2022</option>
    //                                 <option value="">2021</option>
    //                                 <option value="">2020</option>
    //                                 <option value="">2019</option>
    //                                 <option value="">2018</option>
    //                                 <option value="">2017</option>
    //                                 <option value="">2016</option>
    //                                 <option value="">2015</option>
    //                                 <option value="">2014</option>
    //                                 <option value="">2013</option>
    //                                 <option value="">2012</option>
    //                                 <option value="">2011</option>
    //                                 <option value="">2010</option>
    //                                 <option value="">2009</option>
    //                                 <option value="">2008</option>
    //                                 <option value="">2007</option>
    //                                 <option value="">2006</option>
    //                                 <option value="">2005</option>
    //                                 <option value="">2004</option>
    //                                 <option value="">2003</option>
    //                                 <option value="">2002</option>
    //                                 <option value="">2001</option>
    //                                 <option value="">2000</option>
    //                                 <option value="">1999</option>
    //                                 <option value="">1998</option>
    //                                 <option value="">1997</option>
    //                                 <option value="">1996</option>
    //                                 <option value="">1995</option>
    //                                 <option value="">1994</option>
    //                                 <option value="">1993</option>
    //                                 <option value="">1992</option>
    //                                 <option value="">1991</option>
    //                                 <option value="">1990</option>
    //                                 <option value="">1989</option>
    //                                 <option value="">1988</option>
    //                                 <option value="">1987</option>
    //                                 <option value="">1986</option>
    //                                 <option value="">1985</option>
    //                                 <option value="">1984</option>
    //                                 <option value="">1983</option>
    //                                 <option value="">1982</option>
    //                                 <option value="">1981</option>
    //                                 <option value="">1980</option>
    //                                 <option value="">1979</option>
    //                                 <option value="">1978</option>
    //                                 <option value="">1977</option>
    //                                 <option value="">1976</option>
    //                                 <option value="">1975</option>
    //                                 <option value="">1974</option>
    //                                 <option value="">1973</option>
    //                                 <option value="">1972</option>
    //                                 <option value="">1971</option>
    //                                 <option value="">1970</option>
    //                                 <option value="">1969</option>
    //                                 <option value="">1968</option>
    //                                 <option value="">1967</option>
    //                                 <option value="">1966</option>
    //                                 <option value="">1965</option>
    //                                 <option value="">1964</option>
    //                                 <option value="">1963</option>
    //                                 <option value="">1962</option>
    //                                 <option value="">1961</option>
    //                                 <option value="">1960</option>
    //                                 <option value="">1959</option>
    //                                 <option value="">1958</option>
    //                                 <option value="">1957</option>
    //                                 <option value="">1956</option>
    //                                 <option value="">1955</option>
    //                                 <option value="">1954</option>
    //                                 <option value="">1953</option>
    //                                 <option value="">1952</option>
    //                                 <option value="">1951</option>
    //                                 <option value="">1950</option>
    //                                 <option value="">1949</option>
    //                                 <option value="">1948</option>
    //                                 <option value="">1947</option>
    //                                 <option value="">1946</option>
    //                                 <option value="">1945</option>
    //                                 <option value="">1944</option>
    //                                 <option value="">1943</option>
    //                                 <option value="">1942</option>
    //                                 <option value="">1941</option>
    //                                 <option value="">1940</option>
    //                                 <option value="">1939</option>
    //                                 <option value="">1938</option>
    //                                 <option value="">1937</option>
    //                                 <option value="">1936</option>
    //                                 <option value="">1935</option>
    //                                 <option value="">1934</option>
    //                                 <option value="">1933</option>
    //                                 <option value="">1932</option>
    //                                 <option value="">1931</option>
    //                                 <option value="">1930</option>
    //                             </select>
    //                         </div>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".sdt">
    //                         Số điện thoại
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_sdt")} placeholder="Nhập số điện thoại"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".gender">
    //                         Giới tính
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <select name="gender" id="gender" aria-placeholder="Giới tính">
    //                         <option value="">Chọn giới tính</option>
    //                         <option value="">Nam</option>
    //                         <option value="">Nữ</option>
    //                     </select>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".job">
    //                         Nghề nghiệp
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_job")} placeholder="Nhập nghề nghiệp"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".cmnd">
    //                         Số CMND/Passport
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_cmnd")} placeholder="Nhập số CMND"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".email">
    //                         Địa chỉ Email
    //                     </label>
    //                     <br></br>
    //                     <input type="email" className={cx("TaoMoiHoSo_email")} placeholder="Nhập địa chỉ email để nhận phiếu khám"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".ethnic">
    //                         Dân tộc
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_ethnic")} placeholder="Nhập dân tộc"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".province">
    //                         Tỉnh / Thành
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_province")} placeholder="Nhập tỉnh thành"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".city">
    //                         Quận / Huyện
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_city")} placeholder="Nhập quận huyện"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".ward">
    //                         Phường / Xã
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_ward")} placeholder="Nhập phường xã"></input>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_form_box")}>
    //                     <label for=".address">
    //                         Địa chỉ
    //                         <sup>*</sup>
    //                     </label>
    //                     <br></br>
    //                     <input type="text" className={cx("TaoMoiHoSo_address")} placeholder="Nhập địa chỉ"></input>
    //                 </div>
    //             </div>
    //             <div className={cx("TaoMoiHoSo_button")}>
    //                 <a href="" className={cx("TaoMoiHoSo_agree")}>
    //                     <i className={cx("fa-solid fa-user-plus")}></i>
    //                     Tạo mới
    //                 </a>
    //                 <a href="" className={cx("TaoMoiHoSo_erase")}>
    //                     <i className={cx("fa-solid fa-eraser")}></i>
    //                     Nhập lại
    //                 </a>
    //             </div>
    //         </div>
    //         <div className={cx("TaoMoiHoSo_form_da_tung_kham", problem2&&"open", problem1&&"hide")}>
    //             <h2>NHẬP MÃ SỐ BỆNH NHÂN / MÃ SỐ BHYT</h2>
    //             <div className={cx("TaoMoiHoSo_da_tung")}>
    //                 <div className={cx("TaoMoiHoSo_dien_form")}>
    //                     <input type="text" placeholder="Nhập mã số bệnh nhân / Mã số BHYT"></input>
    //                     <a href="" className={cx("TaoMoiHoSo_search")}>Tìm kiếm</a>
    //                 </div>
    //                 <div className={cx("TaoMoiHoSo_lost")}>
    //                     <i className={cx("fa-solid fa-caret-right")}></i>
    //                     <a href="" className={cx("TaoMoiHoSo_link_lost")}>Tôi mất mã số bệnh nhân của mình</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // );
}

export default TaoMoiHoSo;
