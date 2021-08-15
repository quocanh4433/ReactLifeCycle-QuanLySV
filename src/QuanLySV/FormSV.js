import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSV extends Component {
    state = {
        value : {
            maSV: "",
            hoTen: "",
            soDienThoai: "",
            email: "",
        },
        errors: {
            maSV: "",
            hoTen: "",
            soDienThoai: "",
            email: "",
        }
    }

    handleChangeInput = (event) => {
        let lable = event.target.getAttribute("lable")
        let {value, name} = event.target

        let newValue = {...this.state.value}
        newValue[name] = value
        let newErros = {... this.state.errors}
        
        let messageErrors = '';
        if (value.trim() === '') {
            messageErrors = lable + " không được bỏ trống"
        }

        let attrValue= ''
        let regex
        if (event.target.getAttribute("typeemail")) { 
            attrValue = event.target.getAttribute("typeemail")
            regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        }

        if (regex) {
            if (attrValue === "email") {
                if (!regex.test(value)){
                    messageErrors = lable + ' phải đúng định dạng'
                }
            }
        }
        
        newErros[name] = messageErrors

        this.setState({
            value: newValue,
            errors: newErros
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let valid = true

        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                valid = false
                break;
            }
        }

        for (let key in this.state.values) {
            if (this.state.values[key]) {
                valid = false
                break;
            }
        } 
        if (!valid) {
            alert('Dữ liệu không hợp lệ')
            return;
        }

        const action = {
            type: "THEM_SV",
            SV: this.state.value
        }
        this.props.dispatch(action)
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            value: newProps.SVChinhSua
        })
    }

    render() {
        let {maSV, soDienThoai, email, hoTen} = this.state.value
        return (
            <form className="card mt-5" onSubmit={this.handleSubmit}>
                <h3 className="card-header bg-dark text-white">THÔNG TIN SINH VIÊN</h3>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Mã SV <span className="text-danger">*</span></p>
                                <input value={maSV} className="form-control" name="maSV" lable="Mã SV" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.maSV}</p>
                            </div>
                            <div className="form-group">
                                <p>Họ Tên <span className="text-danger">*</span></p>
                                <input value={hoTen} className="form-control" name="hoTen" lable="Họ Tên" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.hoTen}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Số Điện Thoại <span className="text-danger">*</span></p>
                                <input typePhone="phone" value={soDienThoai} className="form-control" name="soDienThoai" lable="Số Điện Thoại" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <p>Email <span className="text-danger">*</span></p>
                                <input value={email} typeemail="email" className="form-control" name="email" lable="Email" onChange={this.handleChangeInput}/>
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-left">
                        <button type="submit" className="btn btn-success mr-2">Thêm Sinh Viên</button>
                        <button type="button" className="btn btn-primary" onClick={()=>{
                            const action = {
                                type: "CAP_NHAT_SV",
                                SVCapNhat: this.state.value
                            }
                            this.props.dispatch(action)
                        }}>Cập Nhật</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SVChinhSua: state.QuanLySVReducer.SVChinhSua,
    }
}

export default connect(mapStateToProps)(FormSV)