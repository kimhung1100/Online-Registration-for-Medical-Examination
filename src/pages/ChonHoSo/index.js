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

function ChonHoSo() {

    const [user, setUser] = useContext(UserContext);
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        const sendData = {
            userID: user.key
        }
        axios.post(`http://localhost/Online-Registration-for-Medical-Examination/src/php/patients.php/patient/lookup`, sendData)
        .then((result) => {
            setPatient(result.data);
            console.log(result.data);
            console.log(patient);
        })
        .catch((error) => {
            console.log(error.response);
        });
        //setPatient([]);
        console.log(patient);
    },[])

    const [press, setpress] = useState(false);
    const navigate = useNavigate();
    const pressHoso = () => {
        setpress(true);
    };
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
                                            <a href="../">Trang ch???</a>
                                        </li>
                                        <li data-test="breadcrumb-item" className={cx('breadcrumb-item')}>
                                            Ch???n h??? s?? b???nh nh??n
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
                                    <span>Ch???n h??? s?? b???nh nh??n</span>
                                </h1>
                            </div>
                            
                            <div className={cx('style_wrapper_page_item')} >
                            {patient.map((element,idx)=>
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
                                        onClick={pressHoso}
                                        data-test="card"
                                        className={cx('card', 'style_card', press && 'style_active')}
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
                                                    <span>Ng??y sinh</span>
                                                </div>
                                                <div className={cx('style_column2')}>{element.birthday}</div>
                                            </li>
                                            <li
                                                data-test="list-group-item"
                                                className={cx('list-group-item', 'list-group-item-undefined')}
                                            >
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-mobile')}></i>
                                                    <span>S??? ??i???n tho???i</span>
                                                </div>
                                                <div className={cx('style_column2')}>{element.phone}</div>
                                            </li>
                                            {press && (
                                                <li
                                                    data-test="list-group-item"
                                                    className={cx('list-group-item', 'list-group-item-undefined')}
                                                >
                                                    <div className={cx('style_column1')}>
                                                        <i className={cx('fal', 'fa-venus-mars')}></i>
                                                        Gi???i t??nh
                                                    </div>
                                                    <div className={cx('style_column2')}>{element.gender}</div>
                                                </li>
                                            )}
                                            {press && (
                                                <li
                                                    data-test="list-group-item"
                                                    className={cx('list-group-item', 'list-group-item-undefined')}
                                                >
                                                    <div className={cx('style_column1')}>
                                                        <i className={cx('fal', 'fa-id-card')}></i>
                                                        D??n t???c
                                                    </div>
                                                    <div className={cx('style_column2')}>{element.ethnicity}</div>
                                                </li>
                                            )}
                                            {press && (
                                                <li
                                                    data-test="list-group-item"
                                                    className={cx('list-group-item', 'list-group-item-undefined')}
                                                >
                                                    <div className={cx('style_column1')}>
                                                        <i className={cx('fal', 'fa-map-marker')}></i>
                                                        <span>?????a ch???</span>
                                                    </div>
                                                    <div className={cx('style_column2')}>
                                                    {element.address}
                                                    </div>
                                                </li>
                                            )}
                                            {press && (
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
                                                            <div>
                                                                <i className={cx('fal', 'fa-trash-alt')}></i>
                                                                X??a
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
                                                                <div>
                                                                    <i className={cx('fal', 'fa-edit')}></i>
                                                                    S???a
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
                                                    <div className={cx('style_action_right')}>
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
                                                            <div
                                                                onClick={() => {
                                                                    navigate('../chon-chuyen-khoa');
                                                                }}
                                                            >
                                                                Ti???p t???c
                                                                <i className={cx('fal', 'fa-long-arrow-right')}></i>
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
                                                    </div>
                                                </div>
                                            )}
                                        </ul>
                                    </div>
                                </div>
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
                                        <div>Quay l???i</div>
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
                                        <div>Th??m h??? s??</div>
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
