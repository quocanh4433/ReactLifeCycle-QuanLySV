import React, { Component } from 'react'
import '../assets/style/components/BaiTapOanTuTi.css'
import Player from './Player'
import Computer from './Computer'
import Result from './Result'
import { connect  } from 'react-redux'

class BaiTapOanTuTi extends Component {
    render() {
        return (
            <section className="bg-game">
                <div className="container mt-2">
                    <div className="row text-white text-center">
                        <div className="col-3">
                            <Player/>
                        </div>
                        <div className="col-6">
                            <Result/>
                            <button className="btn btn-success" onClick={ () => {
                                this.props.playGame()
                            }}>PLAY GAME</button>
                        </div>
                        <div className="col-3">
                            <Computer />
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
                dispatch ({
                    type: "PLAY_GAME"
                })
                count++
                if (count >= 20) {
                    // Dừng setInterval
                    clearInterval(randomComputerItem)
                    dispatch ({
                        type: "END_GAME"
                        
                    }) 
                }
            }, 100)
            
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuTi)