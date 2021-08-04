import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    renderStoneThanos = () => {
        let {arrStoneThanos} = this.props
        if (arrStoneThanos.length !== 0 ){
            return arrStoneThanos.map((item, index)=>{
                return  <div className="col-2" key={index}>
                    <img className="stoneThanos" src={item.hinhAnh} alt="..." />
                </div>
            })
        }
    }
    render() {
        let keyframe = `@keyframes mymove${Date.now()} {
            from {top: 0px;}
            to {top: 200px;}
        }`
        return (
            <div>
                <div className="theThink">
                    <style>
                        {keyframe}
                    </style>
                    <img style={{animation: `mymove${Date.now()} 0.5s`}} src={this.props.computer.hinhAnh} className="img-computer"  alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img src="./img/character/thanos.png" className="thanos" alt="..." />
                <h3 className="title title-thanos">ĐÁ VÔ CỰC </h3>
                <div className="stone row mb-2">
                    {this.renderStoneThanos()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOanTuTiReducer.computer,
        arrStoneThanos: state.BaiTapOanTuTiReducer.arrStoneThanos
    }
}

export default connect(mapStateToProps)(Computer)