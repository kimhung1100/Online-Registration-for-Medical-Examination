import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'react-router-dom';
import {UserContext} from '../../components/UserContext';
import { useContext } from 'react';
import React, { useEffect} from "react";
import axios from 'axios';
import styles from './ChonHoSo.module.scss';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const cx = classNames.bind(styles);

function ChonHoSo(props) {
    const [user, setUser] = useContext(UserContext);
    const [patient, setPatient] = useState([]);
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();
    const handleClick = (divNum) => {
        setSelected(divNum);
    };

    useEffect(() => {
        getPatients();
    },[]);

    const getPatients = () => {
        const sendData = {
            userID: user.key
        }
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/lookup`, sendData)
        .then((result) => {
            setPatient(result.data);
            console.log(result.data);
        })
        .catch((error) => {
            console.log(error.response);
        });
    }

    const handleDelete = (e) => {
        //e.preventDefault();
        axios.delete(`http://localhost/Online-Registration-for-Medical-Examination-1/src/php/patients.php/patient/delete/${e.id}`)
        .then((result) => {
            getPatients();
            console.log(result.data);
        })
    }

    

    return (
        <div className={cx('style_wrapper_content')}>
            <div className={cx('style_bg_breakcum')}>
                <div data-test="container" className={cx('container')}>
                    <div data-test="row" className={cx('row')}>
                        <div data-test="col" className={cx('col-12')}>
                            <div className={cx('style_wrap_mdbreadcrumb', 'style_head')}>
                                <nav data-test="breadcrumb">
                                    <ol className={cx('breadcrumb')}>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            <a href="../">Trang chủ</a>
                                        </li>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            Chọn hồ sơ bệnh nhân
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div data-test="container" className={cx('container')}>
                    <div data-test="row" className={cx('row')}>
                        <div data-test="col" className={cx('col-md-12')}>
                            <div>
                                <h1
                                    className={cx(
                                        'style_title_component',
                                        'style_title_line',
                                        'style_title_header_mobile',
                                    )}
                                >
                                    <span>Chọn hồ sơ bệnh nhân</span>
                                </h1>
                            </div>
                            
                            <div className={cx('style_wrapper_page_item')} >
                            {patient.map((element,idx) => (
                                <div
                                    data-test="animation"
                                    className={cx('animated', 'fadeIn')}
                                    style={{
                                        animationIterationCount: '1',
                                        visibility: 'visible',
                                        animationName: 'fadeIn',
                                    }} key={idx}
                                >
                                    <div
                                        onClick={() => {handleClick(idx)}}
                                        data-test="card"
                                        className={cx('card', 'style_card', (selected === idx ? ( 'style_active') : ''))}
                                    >
                                        <ul data-test="list-group" className={cx('list-group', 'style_list_group')}>
                                            <li
                                                data-test="list-group-item"
                                                className={cx('list-group-item', 'list-group-item-undefined')}
                                            >
                                                <div className={cx('style_fullname')}>
                                                    <i className={cx('fal', 'fa-user-circle')}></i>
                                                    <strong style={{ color: '#0352cc' }}>{element.name}</strong>
                                                </div>
                                            </li>
                                            <li
                                                data-test="list-group-item"
                                                className={cx('list-group-item', 'list-group-item-undefined')}
                                            >
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-birthday-cake')}></i>
                                                    <span>Ngày sinh</span>
                                                </div>
                                                <div className={cx('style_column2')}>{element.birthday}</div>
                                            </li>
                                            <li
                                                data-test="list-group-item"
                                                className={cx('list-group-item', 'list-group-item-undefined')}
                                            >
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-mobile')}></i>
                                                    <span>Số điện thoại</span>
                                                </div>
                                                <div className={cx('style_column2')}>{element.phone}</div>
                                            </li>
                                            {selected === idx  && (
                                                <li
                                                    data-test="list-group-item"
                                                    className={cx('list-group-item', 'list-group-item-undefined')}
                                                >
                                                    <div className={cx('style_column1')}>
                                                        <i className={cx('fal', 'fa-venus-mars')}></i>
                                                        Giới tính
                                                    </div>
                                                    <div className={cx('style_column2')}>{element.gender}</div>
                                                </li>
                                            )}
                                            {selected === idx  && (
                                                <li
                                                    data-test="list-group-item"
                                                    className={cx('list-group-item', 'list-group-item-undefined')}
                                                >
                                                    <div className={cx('style_column1')}>
                                                        <i className={cx('fal', 'fa-id-card')}></i>
                                                        Dân tộc
                                                    </div>
                                                    <div className={cx('style_column2')}>{element.ethnicity}</div>
                                                </li>
                                            )}
                                            {selected === idx  && (
                                                <li
                                                    data-test="list-group-item"
                                                    className={cx('list-group-item', 'list-group-item-undefined')}
                                                >
                                                    <div className={cx('style_column1')}>
                                                        <i className={cx('fal', 'fa-map-marker')}></i>
                                                        <span>Địa chỉ</span>
                                                    </div>
                                                    <div className={cx('style_column2')}>
                                                    {element.address}
                                                    </div>
                                                </li>
                                            )}
                                            {selected === idx  && (
                                                <div className={cx('style_action_edit_remove')}>
                                                    <div>
                                                        <button
                                                            data-test="button"
                                                            type="button"
                                                            className={cx(
                                                                'btn',
                                                                'btn-flat',
                                                                'Ripple-parent',
                                                                'style_button',
                                                                'style_remove',
                                                            )}
                                                        >
                                                            <div onClick={()=>handleDelete(element)}>
                                                                <i className={cx('fal', 'fa-trash-alt')}></i>
                                                                Xóa
                                                            </div>
                                                            <div
                                                                data-test="waves"
                                                                className={cx('Ripple', 'Ripple-outline')}
                                                                style={{
                                                                    top: '0',
                                                                    left: '0',
                                                                    width: '0',
                                                                    height: '0',
                                                                }}
                                                            ></div>
                                                        </button>
                                                        <a href="#">
                                                            <button
                                                                data-test="button"
                                                                type="button"
                                                                className={cx(
                                                                    'btn',
                                                                    'btn-flat',
                                                                    'Ripple-parent',
                                                                    'style_button',
                                                                    'style_edit',
                                                                )}
                                                            >
                                                                <div> <Link to={`/sua-ho-so/${element.id}`}>
                                                                    <i className={cx('fal', 'fa-edit')}></i>
                                                                    Sửa
                                                                    </Link>
                                                                </div>
                                                                <div
                                                                    data-test="waves"
                                                                    className={cx('Ripple', 'Ripple-outline')}
                                                                    style={{
                                                                        top: '0',
                                                                        left: '0',
                                                                        width: '0',
                                                                        height: '0',
                                                                    }}
                                                                ></div>
                                                            </button>
                                                        </a>
                                                    </div>                                                      
                                                    <div className={cx('style_action_right')} >
                                                    <Link to="/chon-chuyen-khoa" state={{patientID: element.id}}>
                                                        <button
                                                            data-test="button"
                                                            type="button"
                                                            className={cx(
                                                                'btn',
                                                                'btn-flat',
                                                                'Ripple-parent',
                                                                'style_button',
                                                                'style_create',
                                                                'style_buttonArrow',
                                                            )}
                                                            
                                                        >
                                                            <div> 
                                                            Tiếp tục
                                                                <i
                                                                    className={cx('fal', 'fa-long-arrow-right')}
                                                                ></i>
                                                            </div>
                                                             <div
                                                                data-test="waves"
                                                                className={cx('Ripple', 'Ripple-outline')}
                                                                style={{
                                                                    top: '0',
                                                                    left: '0',
                                                                    width: '0',
                                                                    height: '0',
                                                                }}
                                                            ></div>
                                                        </button>
                                                        </Link>
                                                    </div>
                                                </div> 
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                ),
                                )}
                                <div className={cx('style_next_prev')}>
                                    <button
                                        onClick={() => {
                                            navigate('../');
                                        }}
                                        id="btn-back"
                                        data-test="button"
                                        type="button"
                                        className={cx('btn-flat', 'btn', 'Ripple-parent', 'style_button')}
                                    >
                                        <div>Quay lại</div>
                                        <div
                                            data-test="waves"
                                            type="button"
                                            className={cx('Ripple', 'Ripple-outline')}
                                            style={{
                                                top: '0',
                                                left: '0',
                                                width: '0',
                                                height: '0',
                                            }}
                                        ></div>
                                    </button>
                                    <Link to="/tao-moi-ho-so">
                                    <button
                                        onClick={() => {
                                            navigate('../tao-moi-ho-so');
                                        }}
                                        id="btn-add"
                                        data-test="button"
                                        type="button"
                                        className={cx(
                                            'btn-flat',
                                            'btn',
                                            'Ripple-parent',
                                            'style_button',
                                            'style_create',
                                        )}
                                    >
                                        <div>Thêm hồ sơ</div>
                                        <div
                                            data-test="waves"
                                            type="button"
                                            className={cx('Ripple', 'Ripple-outline')}
                                            style={{
                                                top: '0',
                                                left: '0',
                                                width: '0',
                                                height: '0',
                                            }}
                                        ></div>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChonHoSo;
