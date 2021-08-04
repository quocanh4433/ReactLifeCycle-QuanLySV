import React, { Component } from 'react';
import '../assets/style/components/BaiTapOanTuTi.css';
import Player from './Player';
import Computer from './Computer';
import Result from './Result';
import { chonnhanVatAction, endGameAction } from '../redux/action/BaiTapOanTuTiAction';
import { randomComputerItemAction } from '../redux/action/BaiTapOanTuTiAction';
import { connect  } from 'react-redux';

class BaiTapOanTuTi extends Component {
    renderNhanVat = () => {
        let {mangNhanVat, chonNhaVat} = this.props;
        return mangNhanVat.map((item, index) => {
            let border = "4px solid #fff";
            if (item.isChoose) {
                border = "4px solid orange";
            }
            return <button className="btn-chonNhanVat" key={index} style={{border:`${border}`}} onClick={()=>{chonNhaVat(item.ma)}}>
                <img src={item.avatar} className="avaterNhanVat" alt="..."/>
            </button>
        })
    }

    renderStone = () => {
        let {arrStone} = this.props;
        return arrStone.map((item, index)=>{
            return  <div className="col-2" key={index}>
                <img src={item.hinhAnh} style={{width: "20px", height: "30px", objectFit:"cover" }}  alt="..." />
            </div>
        })
    }
    render() {
        return (
            <section className="bg-game">
                <div className="container mt-2">
                    <div className="row text-white text-center">
                        <div className="col-3">
                            <Player/>
                        </div>
                        <div className="col-6 mt-5">
                            <Result/>
                            <button className="btn btn-success playgame" onClick={() => {
                                this.props.playGame()
                            }}>PLAY GAME</button>
                            <div className="stone row" style={{width: "70%", margin: "20px auto"}}>
                                {this.renderStone()}
                            </div>
                        </div>
                        <div className="col-3">
                            <Computer />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-center">CHỌN NHÂN VẬT</h3>
                        <div className="chonhNhanVat" >
                            {this.renderNhanVat()}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0
            // Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(()=>{
                dispatch (randomComputerItemAction())
                count++
                if (count >= 20) {
                    // Dừng setInterval
                    clearInterval(randomComputerItem)
                    dispatch (endGameAction())
                }
            }, 100)
        },
        chonNhaVat: (maNhanVat) => {
            dispatch(chonnhanVatAction(maNhanVat))
        }
    }
}

const mapStateToProps = (state) => {
    return  {
        mangNhanVat: state.BaiTapOanTuTiReducer.mangNhanVat,
        arrStone: state.BaiTapOanTuTiReducer.arrStone,
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapOanTuTi)