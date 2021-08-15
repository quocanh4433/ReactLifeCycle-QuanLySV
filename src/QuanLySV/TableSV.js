import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSV extends Component {

    state = {
        keyword: ""
    }

    searchValue = (event) => {
        let value = event.target.value
        this.setState({
            keyword: value
        })
    }

    onSearch = () => {
        const action = {
            type: "TIM_KIEM_SV",
            keyword: this.state.keyword
        }
        this.props.dispatch(action)
    } 

    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="form-inline d-flex justify-content-center md-form form-sm active-purple-2 m-2">
                            <input 
                                className="form-control form-control-sm mr-3 w-75" 
                                type="text" placeholder="Search" 
                                aria-label="Search" 
                                onChange={this.searchValue} />
                            <button type="submit" className="btn btn-primary" onClick={this.onSearch}>
                                <i className="fas fa-search" aria-hidden="true" /> 
                            </button>
                        </div>
                    </div>
                </div>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.mangSV.map((sinhVien, index) => (
                                <tr key={index}>
                                    <td>{sinhVien.maSV}</td>
                                    <td>{sinhVien.hoTen}</td>
                                    <td>{sinhVien.soDienThoai}</td>
                                    <td>{sinhVien.email}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2" onClick={() => {
                                            const action = {
                                                type: "XOA_SV",
                                                maSV: sinhVien.maSV
                                            }
                                            this.props.dispatch(action)
                                        }}>Xóa</button>
                                        <button className="btn btn-primary" onClick={() => {
                                            const action = {
                                                type: "CHINH_SUA_SV",
                                                SVChinhSua: sinhVien
                                            }
                                            this.props.dispatch(action)
                                        }}>Chỉnh Sửa</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mangSV: state.QuanLySVReducer.mangSV,
})

export default connect(mapStateToProps)(TableSV)