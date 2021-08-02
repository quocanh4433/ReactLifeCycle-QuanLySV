import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div>
                <h3 className="text-warning">{this.props.ketQua}</h3>
                <h5 className="text-success">
                    Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
                </h5>
                <h5 className="text-success">
                    Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span>
                </h5>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        soBanThang: rootReducer.BaiTapOanTuTiReducer.soBanThang,
        soBanChoi: rootReducer.BaiTapOanTuTiReducer.soBanChoi,
        ketQua: rootReducer.BaiTapOanTuTiReducer.ketQua
    }
}
export default connect(mapStateToProps)(Result)