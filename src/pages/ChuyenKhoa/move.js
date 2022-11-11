const showGioiThieu = document.querySelector('.gioi_thieu_chung')
const showThietBi = document.querySelector('.trang_thiet_bi')
const showThanhTuu = document.querySelector('.thanh_tuu')

const showThongTinGioiThieu = document.querySelector('.thong_tin_gioi_thieu')
const showThongTinThietBi = document.querySelector('.thong_tin_trang_thiet_bi')
const showThongTinThanhTuu = document.querySelector('.thong_tin_thanh_tuu')

function openGioiThieu() {
    showThongTinGioiThieu.classList.remove('none')
    showGioiThieu.classList.remove('none')
    showThongTinGioiThieu.classList.add('open')
    showGioiThieu.classList.add('open')
    showThietBi.classList.remove('open')
    showThanhTuu.classList.remove('open')
    showThongTinThietBi.classList.remove('open')
    showThongTinThanhTuu.classList.remove('open')
}
function openThietBi() {
    showThongTinThietBi.classList.add('open')
    showThietBi.classList.add('open')
    showGioiThieu.classList.remove('open')
    showGioiThieu.classList.add('none')
    showThanhTuu.classList.remove('open')
    showThongTinGioiThieu.classList.remove('open')
    showThongTinGioiThieu.classList.add('none')
    showThongTinThanhTuu.classList.remove('open')
        }
function openThanhTuu() {
    showThongTinThanhTuu.classList.add('open')
    showThanhTuu.classList.add('open')
    showGioiThieu.classList.remove('open')
    showGioiThieu.classList.add('none')
    showThietBi.classList.remove('open')
    showThongTinGioiThieu.classList.remove('open')
    showThongTinGioiThieu.classList.add('none')
    showThongTinThietBi.classList.remove('open')
}

showGioiThieu.addEventListener('click', openGioiThieu)
showThietBi.addEventListener('click', openThietBi)
showThanhTuu.addEventListener('click', openThanhTuu)