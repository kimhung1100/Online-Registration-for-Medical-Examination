import styles from './dangnhap.scss';
import classNames from 'classnames/bind';
import bglogin from '../../assets/images/dangnhap.png';
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import * from './Validator';

const cx = classNames.bind(styles);

// validator
function Validator(option) {
    var formElement = document.querySelector(option.form);
    // if (formElement) {
    //     options.rules.forEach(function (rule) {
    //         var inputElement = formElement.querySelector(rule.selector);
    //         if (inputElement) {
    //             inputElement.onblur = function () {
    //                 validate(inputElement, rule);
    //             };
    //             inputElement.oninput = function () {
    //                 var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
    //                 if (errorElement) {
    //                     errorElement.innerText = '';
    //                 }
    //                 inputElement.parentElement.classList.remove('invalid');
    //             };
    //         }
    //     });
    // }
}

Validator.isRequired = function () {};

Validator.isEmail = function () {};

function DangNhap() {
    const initialValues = {
        phone: '',
        password: '',
    };
    const context = useContext(UserContext);

    const [user, setUser] = context[0];

    const [data, setData] = useState({
        password: '',
        phone: '',
    });

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        console.log(data);
    };

    const handleSubmit = async (e) => {
        console.log(data);
        e.preventDefault();
        const sendData = {
            password: data.password,
            phone: data.phone,
        };

        axios
            .post(
                `http://localhost/Online-Registration-for-Medical-Examination-1/src/php/user.php/user/login`,
                sendData,
            )
            .then((result) => {
                console.log(result);
                if (result.data.Status === '200') {
                    //window.localStorage.setItem('phone', result.data.phone);
                    //window.localStorage.setItem('password', result.data.password);

                    //user.key = result.data.Id;
                    setUser((user) => ({
                        ...user,
                        ...data,
                        login: true,
                        userName: result.data.userName,
                        key: result.data.Id,
                        gender: result.data.gender,
                    }));
                    console.log(user);
                    navigate('/');
                } else {
                    alert('Invalid');
                }
            })
            .catch((error) => {
                console.log(error.response);
            });

        setData({
            ...data,
            password: '',
            phone: '',
        });
    };
    // Validator({
    //     form: '#form-1',
    //     rules: [Validator.isRequired('#phone'), Validator.isRequired('#password')],
    // });
    const validationSchema = Yup.object().shape({
        phone: Yup.string().min(3).max(15).required('Required'),
        password: Yup.string().min(4).max(20).required('Required'),
    });
    return (
        <section className={cx('container1')}>
            <div className={cx('quaylai')}>
                <Link to="/" className={cx('previous')}>
                    &#8592;
                </Link>
            </div>
            <div className={cx('noi-dung')}>
                <div className={cx('form')}>
                    <h2>Đăng nhập</h2>
                    <h3>Vui lòng nhập số điện thoại để tiếp tục</h3>
                    <form action="" onSubmit={handleSubmit} id="form-1" validationSchema={validationSchema}>
                        <div className={cx('input-form')}>
                            <input
                                type="text"
                                name="phone"
                                placeholder="+84"
                                value={data.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={data.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <input type="submit" value="Xác nhận" />
                        </div>

                        <div className={cx('input-form')}>
                            <p>
                                Bạn Chưa Có Tài Khoản? <a href="http://127.0.0.1:3000/dang-ky">Đăng Ký</a>
                            </p>
                        </div>
                    </form>

                    {/* <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        <Form className="formContainer">
                            <div className={cx('input-form')}>
                                <label>Số điện thoại: </label>
                                <ErrorMessage name="phone" component="span" />
                                <Field
                                    autoComplete="on"
                                    id="phone"
                                    name="phone"
                                    placeholder="+84"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-form')}>
                                <label>Mật khẩu: </label>
                                <ErrorMessage name="password" component="span" />
                                <Field
                                    autoComplete="off"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeHolder="Your Password..."
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={cx('input-form')}>
                                <input type="submit" value="Xác nhận"></input>
                            </div>
                            <div className={cx('input-form')}>
                                <p>
                                    Bạn Chưa Có Tài Khoản? <a href="http://127.0.0.1:3000/dang-ky">Đăng Ký</a>
                                </p>
                            </div>
                        </Form>
                    </Formik> */}

                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul class={cx('icon-dang-nhap')}>
                        <li>
                            <i className={cx('fa fa-facebook')} aria-hidden="true"></i>
                        </li>
                        <li>
                            <i className={cx('fa fa-google')} aria-hidden="true"></i>
                        </li>
                        <li>
                            <i className={cx('fa fa-twitter')} aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('img-bg')}>
                <img src={bglogin} value="image"></img>
            </div>
        </section>
    );
}
export default DangNhap;
// const validationSchema = Yup.object().shape(
//     {
//       phone: Yup.string().min(3).max(15).required("Required"),
//       password: Yup.string().min(4).max(20).required("Required"),
//     }
//   )
{
    /* <Formik onSubmit={handleSubmit} validationSchema={validationSchema}>
    <Form className="formContainer">
        <div className={cx('input-form')}>
            <label>Username: </label>
            <ErrorMessage name="phone" component="span" />
            <Field autoComplete="on" name="phone" placeholder="+84" />
        </div>
        <div className={cx('input-form')}>
            <label>Password: </label>
            <ErrorMessage name="password" component="span" />
            <Field autoComplete="off" type="password" name="password" placeHolder="Your Password..." />
        </div>
        <div className={cx('input-form')}>
            <button type="submit">Xác nhận</button>
        </div>
    </Form>
</Formik>; */
}
