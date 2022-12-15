import classNames from 'classnames/bind';

import styles from './NhapHoSoBacSi.module.scss';
const cx = classNames.bind(styles);
function NhapHoSoBacSi() {
    return (
        <div class="container">
            <div class="row">
            <div class="col-md-6 offset-md-3">
            <form action="/import-excel" enctype="multipart/form-data" method="post">
                <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                name="import-excel"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                multiple
                />
                <button type="submit" class="btn btn-dark" value="Store File"></button>
            </form>
            </div>
            </div>
        </div>
    );
}
{/* <div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div> */}
export default NhapHoSoBacSi;
