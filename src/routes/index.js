// Layouts
import { NotLinearBar } from '../components/Layout';

import TrangChu from '../pages/TrangChu';
import GioiThieu from '../pages/GioiThieu';
import DangKy from '../pages/DangKy';
import DangNhap from '../pages/DangNhap';
import QuyTrinh from '../pages/QuyTrinh';
import LienHe from '../pages/LienHe';
import ThacMac from '../pages/ThacMac';
import ThongTinChuyenKhoa from '../pages/ChuyenKhoa/ThongTinChuyenKhoa';
import NhapLichKham from '../pages/NhapLichKham';
// import KhoaHoHap from '../pages/ChuyenKhoa/KhoaHoHap';
// import KhoaTaiMuiHong from '../pages/ChuyenKhoa/KhoaTaiMuiHong';
// import KhoaMat from '../pages/ChuyenKhoa/KhoaMat';
// public routes
const publicRoutes = [
    { path: '/', component: TrangChu, layout: NotLinearBar }, // path: '/', component: trangChu, exact: true'}
    { path: '/gioi-thieu', component: GioiThieu, layout: NotLinearBar },
    { path: '/quy-trinh', component: QuyTrinh, layout: NotLinearBar },
    { path: '/lien-he', component: LienHe, layout: NotLinearBar },
    { path: '/dang-ky', component: DangKy, layout: null },
    { path: '/dang-nhap', component: DangNhap, layout: null },
    { path: '/chuyen-khoa', component: ThongTinChuyenKhoa, layout: NotLinearBar },
    { path: '/thac-mac', component: ThacMac, layout: NotLinearBar },
    // { path: '/chuyen-khoa/khoa-ho-hap', component: KhoaHoHap },
    // { path: '/chuyen-khoa/khoa-tai-mui-hong', component: KhoaTaiMuiHong },
    // { path: '/chuyen-khoa/khoa-mat', component: KhoaMat },
];
// must login
const privateRoutes = [{ path: '/nhap-lich-kham', component: NhapLichKham }];

export { publicRoutes, privateRoutes };
