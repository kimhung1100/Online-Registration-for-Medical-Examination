import classNames from 'classnames/bind';
import styles from './lienhe.module.scss';
// import whiteLogo from '../../../../assets/images/white_logo.jpg';
import { useState } from 'react';
import chat_icon from './chat_icon.png'
import zalo_icon from './zalo_icon.png'
import facebook_icon from './facebook_icon.png'
import time_icon from './time_icon.png'
// import ThacMac from '../ThacMac/index.js';

// import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';

const cx = classNames.bind(styles);
function LienHe() {
    return(
        <div className={cx('style_wrapper_content')}>
            <div>
                <div className={cx('d-none', 'd-lg-block')}>
                    <div data-test="view" className={cx('view', 'style_img_parallax')} style={{
                        backgroundImage: "url(https://umc.medpro.com.vn/static/media/blur-01.b18ae4e7.jpg)",
                        backgroundPosition: 'center center',
                        backgroundSize: 'conver',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh',
                        backgroundAttachment: 'fixed',
                        }}>
                        <div data-test="container" className={cx('container')}>
                            <div data-test="row" className={cx('row')}>
                                <div data-test="col" className={cx('col')}>
                                    <h1 className={cx('style_title_component', 'style_title_line', 'style_title_contact')}>
                                        <span>Liên hệ với chúng tôi</span>
                                    </h1>
                                    <div className={cx('style_desc')}>
                                        <p>Bạn đang quan tâm đến các dịch vụ của chúng tôi hoặc cần tư vấn!</p>
                                        <p>Chúng tôi luôn sẵn sàng giúp đỡ bạn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-test="container" className={cx('container')}>
                            <div data-test="row" className={cx('row')}>
                                <div className={cx('style_list_hotline')}>
                                    <div className={cx('style_list_group')}>
                                        <div className={cx('style_list_group_item')}>
                                            <h2 className={cx('style_title_component')}>
                                                <span>Hỏi đáp nhanh</span>
                                            </h2>
                                            <p className={cx('style_desc__2')}>Danh sách các câu hỏi đã được hệ thống hóa, bạn có thể tham khảo nhanh</p>
                                            <div className={cx('style_list_group_img')}>
                                                <img className={cx("style_icon")} src={chat_icon}></img>
                                            </div>
                                            <div>
                                                <span className={cx('style_link')}>
                                                    <a href='./thac-mac'>
                                                        Tham khảo
                                                        <i className={cx('fa', 'fa-long-arrow-alt-right')}></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className={cx('style_list_group')}>
                                        <div className={cx('style_list_group_item')}>
                                            <h2 className={cx('style_title_component')}>
                                                <span>Các kênh hỗ trợ</span>
                                            </h2>
                                            <p className={cx('style_desc__2')}>Liên hệ trực tiếp với chúng tôi qua các kênh hỗ trợ sau</p>
                                            <div className={cx('style_list_group_img')}>
                                                <img className={cx("style_icon")} src={zalo_icon}></img>
                                                <img className={cx("style_icon")} src={facebook_icon}></img>
                                            </div>
                                            <div>
                                                <a className={cx("style_phone")} href="tel:1900-1080">1900-1080</a>
                                            </div>
                                        </div> 
                                    </div>

                                    <div className={cx('style_list_group')}>
                                        <div className={cx('style_list_group_item')}>
                                            <h2 className={cx('style_title_component')}>
                                                <span>Thời gian làm việc</span>
                                            </h2>
                                            <p className={cx('style_desc__2')}>Thời gian làm việc từ thứ 2 đến thứ 7</p>
                                            <p className={cx('style_desc__2')}>7:30 - 16:30</p>
                                            <div className={cx('style_list_group_img')}>
                                                <img className={cx("style_icon")} src={time_icon}></img>
                                            </div>
                                            <div>
                                                <span className={cx("style_out_working_hours")}>Ngoài giờ hành chính</span>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('style_contact_page')}>
                    <div data-test="container" className={cx('container')}>
                        <div data-test = "row" className={cx('row')}>
                            <div data-test='col' className={cx('col-md-4', 'mb-4')}>
                                <div className={cx('style_contact_column')}>
                                    <div className={cx('style_contact_inner_box')}>
                                        <span className={cx('style_text_info')}>THÔNG TIN CHI TIẾT</span>
                                        <ul>
                                            <li>
                                                <span className={cx('fal', 'fa-hospital')}></span>
                                                <div>
                                                    <p>
                                                        Bệnh viện THE GROUP
                                                        <sup>®</sup>
                                                    </p>
                                                    <p className={cx('style_addressLink')}>107/18/5 Huỳnh Khương An, P.5, Q.GV, TP.HCM</p>
                                                </div>
                                            </li>
                                            <li>
                                                <span className={cx('fal', 'fa-stethoscope')}></span>
                                                <div>
                                                    <p>TƯ VẤN CHUYÊN MÔN</p>
                                                    <p>
                                                        <a href="tel:1900-1080" title="Tư vấn chuyên môn">1900-1080</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <span className={cx('fal', 'fa-cog')}>

                                                </span>
                                                <div>
                                                    <p>HỖ TRỢ ĐẶT KHÁM</p>
                                                    <p>
                                                        <a href="tel:19001080" title="Hỗ trợ đặt khám">1900.1080</a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div data-test='col' className={cx('col-md-8')}>
                                <div className={cx('style_form_column')}>
                                    <div className={cx('style_form_contact_info', 'style_form_contact_custom')}>
                                        <div className={cx('style_form_group')}>
                                            <label for="label_name">
                                                Họ và tên
                                                <sup>*</sup>
                                            </label>
                                            <input id="label_name" type="text" className={cx('form-control')} placeholder="Vui lòng nhập họ và tên (có dấu)..."></input>
                                            <span className={cx('style_input_warning')}></span>
                                        </div>
                                        <div className={cx('style_form_group')}>
                                            <label for="label_email">
                                                Địa chỉ email
                                            </label>
                                            <input id="label_email" type="text" className={cx('form-control')} placeholder="Vui lòng nhập email..."></input>
                                            <span className={cx('style_input_warning')}></span>
                                        </div>
                                        <div className={cx('style_form_group')}>
                                            <label for="label_mobile">
                                                Số điện thoại
                                                <sup>*</sup>
                                            </label>
                                            <input id="label_mobile" type="text" className={cx('form-control')} placeholder="Vui lòng nhập số điện thoại..."></input>
                                            <span className={cx('style_input_warning')}></span>
                                        </div>
                                        <div className={cx('style_form_group', 'style_form_select')}>
                                            <label for="label_mobile">
                                                Vấn đề của bạn
                                                <sup>*</sup>
                                            </label>
                                            <select className={cx('browser-default', 'custom-select')}>
                                                <option value={"0"}>Chọn vấn đề</option>
                                                <option value={"1"}>Vấn đề chuyên môn</option>
                                                <option value={"2"}>Vấn đề kỹ thuật</option>
                                                <option value={"3"}>Vấn đề khác</option>
                                            </select>
                                            <span className={cx('style_input_warning')}></span>
                                        </div>
                                        <div className={cx('style_form_group', 'style_w_100')}>
                                            <label for="label_mobile">
                                                Nhập nội dung cần trợ giúp
                                                <sup>*</sup>
                                            </label>
                                            <textarea id="label_content" className={cx('form-control')} type="textarea" placeholder='Vui lòng nhập nội dung cần hỗ trợ...' rows={"5"}></textarea>
                                            <span className={cx('style_input_warning')}></span>
                                        </div>
                                        <div className={cx('style_form_group', 'style_w_100', 'style_btn_send_support')}>
                                            <button data-test="button" type="button" className={cx('btn-flat', 'btn', 'Ripple-parent', 'style_button', 'style_create')}>
                                                <div>GỬI HỖ TRỢ</div>
                                                <div data-test="waves" className={cx('Ripple Ripple-outline')} style={{
                                                    top: '0',
                                                    left: '0',
                                                    width: '0',
                                                    height: '0'}}></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <div data-test = "row" className={cx('row')}>
                            <div data-test="container" className={cx('container', 'text-center')}>
                                <div data-test="iframe" className={cx('embed-responsive', 'embed-responsive')}>
                                <iframe title="" className={cx("embed-responsive-item")} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=107/18/5 Huỳnh Khương An&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" target="_parent" allowfullscreen="" height="100%" width="100%">
                                </iframe>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LienHe;
