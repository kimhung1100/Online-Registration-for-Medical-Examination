const notiChua = document.querySelector('.TaoMoiHoSo_chua_tung_kham')
const formChua = document.querySelector('.TaoMoiHoSo_form_chua_tung_kham')

const notiDa = document.querySelector('.TaoMoiHoSo_da_tung_kham')
const formDa = document.querySelector('.TaoMoiHoSo_form_da_tung_kham')

function openDa() {
    notiDa.classList.add('open')
    formDa.classList.add('open')
    notiChua.classList.add('hide')
    formChua.classList.add('hide')
}

function openChua() {
    notiDa.classList.remove('open')
    formDa.classList.remove('open')
    notiChua.classList.remove('hide')
    formChua.classList.remove('hide')
}

notiChua.addEventListener('click', openChua)
notiDa.addEventListener('click', openDa)