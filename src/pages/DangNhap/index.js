import './dangnhap.scss'
import bglogin from '../../assets/images/dangnhap.png'
import '../../assets/fonts/Archivo-VariableFont_wdth,wght.ttf'
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

function DangNhap() {
    const [user, setUser] = useContext(UserContext);

    const [data, setData] = useState({
        password:"",
        phone:"",
    });


	const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
        const sendData = {
            password:data.password,
            phone:data.phone,
        }
		
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination/src/php/user.php/user/login`,sendData)
        .then((result) => {
            console.log(result);
            if(result.data.Status === "200"){
                //window.localStorage.setItem('phone', result.data.phone);
                //window.localStorage.setItem('password', result.data.password);
                
                //user.key = result.data.Id;
                setUser(user => ({
                    ...user,
                    ...data,
                    login:true,
                    userName:result.data.userName,
                    key:result.data.Id,
                    gender:result.data.gender
                }));
                console.log(user);
                navigate('/');
            }
            else {alert('Invalid');}
        })
        .catch((error) => {
            console.log(error.response);
        });
        
        setData({
            ...data,
            password:"",
            phone:"",
        });
        
        
	};

    return (
        <section>
            <div className="quaylai"><Link to="/" className="previous">&#8592;</Link></div>
            <div className="noi-dung">
                <div className="form">
                    <h2>Đăng nhập</h2>
                    <h3>Vui lòng nhập số điện thoại để tiếp tục</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-form">
                            <input 
                            type="text" 
                            name="phone" 
                            placeholder="+84"
                            value={data.phone}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="input-form">
                            <input 
                            type="text" 
                            name="password" 
                            placeholder="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className="input-form">
                            <input type="submit" value="Xác nhận"/>
                        </div>
                        <div className="input-form">
                            <p>Bạn Chưa Có Tài Khoản? <a href="http://127.0.0.1:5500/dangki.html">Đăng Ký</a></p>
                        </div>
                    </form>
                    <h3>Đăng Nhập Bằng Mạng Xã Hội</h3>
                    <ul class="icon-dang-nhap">
                        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i className="fa fa-google" aria-hidden="true"></i></li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
            <div className="img-bg">
                <img src={bglogin}></img>
            </div>
        </section>       
    );
}

export default DangNhap;
