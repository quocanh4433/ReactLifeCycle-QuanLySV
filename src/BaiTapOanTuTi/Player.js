import React, { Component } from 'react';
import { connect } from 'react-redux';
import { datCuocAction } from '../redux/action/BaiTapOanTuTiAction';

class Player extends Component {
    renderMangDatCuoc = () => {
        let {mangDatCuoc, datCuoc} = this.props
        return mangDatCuoc.map((item, index)=> {
            let border = {}
            if (item.datCuoc) {
                border = {border: '5px solid orange'}
            }
            return <div className="col-4" key={index} >
                <button className="btnItem" style={border} onClick={()=>{datCuoc(item.ma)}}>
                    <img src={item.hinhAnh} alt=".."/> 
                </button>
            </div>
        })
    }
    renderHinhAnhDatCuoc = () => {
        let {mangDatCuoc} = this.props
        return mangDatCuoc.find(item => item.datCuoc === true).hinhAnh
    }

    renderNhanVatChon = () => {
        let {mangNhaVat} = this.props
        return mangNhaVat.find(item => item.isChoose === true).hinhAnh
    }

    renderStoneAvenger = () => {
        let {arrStoneAvenger} = this.props
        if (arrStoneAvenger.length !== 0 ){
            return arrStoneAvenger.map((item, index)=>{
                return  <div className="col-2" key={index}>
                    <img className="stoneAvengers" src={item.hinhAnh} alt="..." />
                </div>
            })
        }
    }
    render() {
        return (
            <div>
                <div className="theThink">
                    <img src={this.renderHinhAnhDatCuoc()} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <div>
                    <img src={this.renderNhanVatChon()} className="avengers" alt="..." />
                </div>
                <div className="row">
                    {this.renderMangDatCuoc()}
                </div>
                <h3 className="title">ĐÁ VÔ CỰC</h3>
                <div className="stone row mb-2">
                    {this.renderStoneAvenger()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc,
        mangNhaVat: state.BaiTapOanTuTiReducer.mangNhanVat,
        arrStoneAvenger: state.BaiTapOanTuTiReducer.arrStoneAvenger
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch (datCuocAction(maCuoc))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)