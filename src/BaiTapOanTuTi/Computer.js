import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
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
                <img src="./img/playerComputer.png" style={{ width: "200px" }} alt="..." />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOanTuTiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)