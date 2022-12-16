import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import styles from './NhapLichKham.module.scss';
const cx = classNames.bind(styles);

function NhapLichKham() {
    return (
        <div class="row"> 
            <div class="col-md-8 offset-md-2">
                <div className={cx('style_header')}>
                   NHẬP LỊCH KHÁM
                </div>
                <div className={cx('style_content')}>
                    <div class="row justify-content-center form-group form-group-sm">
                        <div class="col-9" >
                        {/* <div class="mb-3"> */}
                            <input  class='form-control' className={cx('form-control', 'form-control-sm')} style={{fontSize: '1.8rem', padding: 0}} type="file" id="formFileMultiple" multiple/>
                        </div>
                        <div class="col-2" style={{padding: '20px'}}>
                            <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor: '#1da1f2', borderColor: '#1da1f2',fontSize: '1.5rem', width: '10rem', margin: '10rem' }}>Nhập file</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NhapLichKham;
