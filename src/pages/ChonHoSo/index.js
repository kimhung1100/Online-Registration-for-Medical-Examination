import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import styles from './ChonHoSo.module.scss';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
const cx = classNames.bind(styles);

function ChonHoSo() {
    const [press,setpress] = useState(false)
    const navigate = useNavigate();
    const pressHoso = () => {
        setpress(true)
    }
    return (
        <div className={cx('style_wrapper_content')}>
            <div className={cx('style_bg_breakcum')}>
                <div data-test='container' className={cx('container')}>
                    <div data-test='row' className={cx('row')}>
                        <div data-test='col' className={cx('col-12')}>
                            <div className={cx('style_wrap_mdbreadcrumb', 'style_head')}>
                                <nav data-test='breadcrumb'>
                                    <ol className={cx('breadcrumb')}>
                                        <li data-test='breadcrumb-item' className={cx('breadcrumb-item')}>
                                            <a href='../'>Trang chủ</a>
                                        </li>
                                        <li data-test='breadcrumb-item' className={cx('breadcrumb-item')}>
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
                <div data-test='container' className={cx('container')}>
                    <div data-test='row' className={cx('row')}>
                        <div data-test='col' className={cx('col-md-12')}>
                            <div>
                                <h1 className={cx('style_title_component', 'style_title_line', 'style_title_header_mobile')}>
                                    <span>
                                        Chọn hồ sơ bệnh nhân
                                    </span>
                                </h1>
                            </div>
                            <div className={cx('style_wrapper_page_item')}>
                                <div data-test='animation' className={cx('animated', 'fadeIn')} style={{
                                    animationIterationCount: '1',
                                    visibility: 'visible',
                                    animationName: 'fadeIn'
                                }}>
                                    <div onClick={pressHoso} data-test='card' className={cx('card', 'style_card', press&&'style_active')}>
                                        <ul data-test='list-group' className={cx('list-group', 'style_list_group')}>
                                            <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                                <div className={cx('style_fullname')}>
                                                    <i className={cx('fal', 'fa-user-circle')}></i>
                                                    <strong style={{color: '#0352cc'}}>DƯƠNG HUỲNH ANH ĐỨC</strong>
                                                </div>
                                            </li>
                                            <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-birthday-cake')}></i>
                                                    <span>Ngày sinh</span>
                                                </div>
                                                <div className={cx('style_column2')}>01/02/2002</div>
                                            </li>
                                            <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-mobile')}></i>
                                                    <span>Số điện thoại</span>
                                                </div>
                                                <div className={cx('style_column2')}>0794763040</div>
                                            </li>
                                            {press&&(
                                            <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-venus-mars')}></i>
                                                    Giới tính
                                                </div>
                                                <div className={cx('style_column2')}>Nam</div>
                                            </li>
                                            )}
                                            {press&&(
                                            <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-id-card')}></i>
                                                    Dân tộc
                                                </div>
                                                <div className={cx('style_column2')}>Kinh</div>
                                            </li>
                                            )}
                                            {press&&(
                                            <li data-test='list-group-item' className={cx('list-group-item', 'list-group-item-undefined')}>
                                                <div className={cx('style_column1')}>
                                                    <i className={cx('fal', 'fa-map-marker')}></i>
                                                    <span>Địa chỉ</span>
                                                </div>
                                                <div className={cx('style_column2')}>107/18/5 Huỳnh Khương An, phường 5, quận Gò Vấp, Thành phố Hồ Chí Minh</div>
                                            </li>
                                            )}
                                            {press&&(<div className={cx('style_action_edit_remove')}>
                                                <div>
                                                    <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_remove')}>
                                                        <div>
                                                            <i className={cx('fal', 'fa-trash-alt')}></i>
                                                            Xóa
                                                        </div>
                                                        <div data-test="waves" className={cx('Ripple', 'Ripple-outline')} style={{
                                                            top: '0',
                                                            left: '0',
                                                            width: '0',
                                                            height: '0'
                                                        }}></div>
                                                    </button>
                                                    <a href='#'>
                                                        <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_edit')}>
                                                            <div>
                                                                <i className={cx('fal','fa-edit')}></i>
                                                                Sửa
                                                            </div>
                                                            <div data-test="waves" className={cx('Ripple', 'Ripple-outline')} style={{
                                                                top: '0',
                                                                left: '0',
                                                                width: '0',
                                                                height: '0'
                                                            }}></div>
                                                        </button>
                                                    </a>
                                                </div>
                                                <div className={cx('style_action_right')}>
                                                    <button data-test="button" type="button" className={cx('btn', 'btn-flat', 'Ripple-parent', 'style_button', 'style_create', 'style_buttonArrow')}>
                                                        <div>
                                                            Tiếp tục
                                                            <i className={cx('fal','fa-long-arrow-right')}></i>
                                                        </div>
                                                        <div data-test="waves" className={cx('Ripple', 'Ripple-outline')} style={{
                                                            top: '0',
                                                            left: '0',
                                                            width: '0',
                                                            height: '0'
                                                        }}></div>
                                                    </button>
                                                </div>
                                            </div>)}
                                        </ul>
                                    </div>
                                </div>

                                <div className={cx('style_next_prev')}>
                                    <button onClick={()=> {navigate("../")}} id="btn-back" data-test="button" type='button' className={cx('btn-flat', 'btn', 'Ripple-parent', 'style_button')}>
                                        <div>Quay lại</div>
                                        <div data-test='waves' type='button' className={cx('Ripple', 'Ripple-outline')} style={{
                                            top: '0',
                                            left: '0',
                                            width: '0',
                                            height: '0'
                                        }}></div>
                                    </button>
                                    <button onClick={()=> {navigate("../")}} id='btn-add' data-test="button" type='button' className={cx('btn-flat', 'btn', 'Ripple-parent', 'style_button', 'style_create')}>
                                        <div>Thêm hồ sơ</div>
                                        <div data-test='waves' type='button' className={cx('Ripple', 'Ripple-outline')} style={{
                                            top: '0',
                                            left: '0',
                                            width: '0',
                                            height: '0'
                                        }}></div>
                                    </button>

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
