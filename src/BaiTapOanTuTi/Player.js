import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    renderMangDatCuoc = () => {
        let {mangDatCuoc, datCuoc} = this.props
        return mangDatCuoc.map((item, index)=> {
            let border = {}
            if (item.datCuoc) {
                border = {border: '5px solid orange'}
            }
            return <div className="col-4" key={index} >
                <button className="btnItem" style={border} onClick={()=>{
                    datCuoc(item.ma)
                }}>
                    <img src={item.hinhAnh} alt=".."/> 
                </button>
            </div>
        })
    }
    renderHinhAnhDatCuoc = () => {
        let {mangDatCuoc} = this.props
        return mangDatCuoc.find( item => item.datCuoc === true )
    }
    render() {
        return (
            <div>
                <div className="theThink">
                    <img src={this.renderHinhAnhDatCuoc().hinhAnh} style={{ width: "100px", transform: "rotate(120deg)" }} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/player.png" style={{width: "200px"}} alt="..." />
                <div className="row">
                    {this.renderMangDatCuoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch ({
                type: "CHON_KEO_BUA_BAO",
                maCuoc
            })
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)