import classNames from 'classnames/bind';
import styles from './TraLoiThacMacChuyenMon.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/UserContext';

import whiteLogo from '../../assets/images/white_logo.jpg';
const cx = classNames.bind(styles);
function TraLoiThacMacChuyenMon() {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [thacmacchuyenmon, setthacmacchuyenmon] = useState(false);
    const handleThacMacChuyenMon = () => {
        setthacmacchuyenmon = true;
    };
    return (
        <div className={cx('ThacMacChuyenMon_wrapper')}>
            <p>cauhoi</p>
        </div>
    );
}

export default TraLoiThacMacChuyenMon;
