// Layouts
import { NotLinearBar } from '../components/Layout';

import TrangChu from '../pages/TrangChu';
import GioiThieu from '../pages/GioiThieu';
import DangKy from '../pages/DangKy';
import DangNhap from '../pages/DangNhap';
import QuyTrinh from '../pages/QuyTrinh';
import LienHe from '../pages/LienHe';
import ThacMac from '../pages/ThacMac';
import ChuyenKhoa from '../pages/ChuyenKhoa';
import NhapLichKham from '../pages/NhapLichKham';
// public routes
const publicRoutes = [
    { path: '/', component: TrangChu, layout: NotLinearBar }, // path: '/', component: trangChu, exact: true'}
    { path: '/gioi-thieu', component: GioiThieu, layout: NotLinearBar },
    { path: '/quy-trinh', component: QuyTrinh, layout: NotLinearBar },
    { path: '/lien-he', component: LienHe, layout: NotLinearBar },
    { path: '/dang-ky', component: DangKy, layout: null },
    { path: '/dang-nhap', component: DangNhap, layout: null },
    { path: '/chuyen-khoa', component: ChuyenKhoa },
    { path: '/thac-mac', component: ThacMac, layout: NotLinearBar },
];
// must login
const privateRoutes = [{ path: '/nhap-lich-kham', component: NhapLichKham }];

export { publicRoutes, privateRoutes };
