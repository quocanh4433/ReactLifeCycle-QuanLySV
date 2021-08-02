const stateDefault = {
    mangDatCuoc: [
        {ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true},
        {ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false},
        {ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false},
    ],
    ketQua: "I'm IronMan, I Love you 300",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false},
}

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO":{

            // CÁCH 1
            // *****************************************
            // let mangCuocUpdate = [... state.mangDatCuoc]
            // mangCuocUpdate = mangCuocUpdate.map((item, index) =>{
            //     return {...item, datCuoc:false}
            // })
            // console.log("mang Update", mangCuocUpdate)
            // let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc)
            // if (index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true 
            // }
            // state.mangDatCuoc = mangCuocUpdate
            // return {...state}

            //CÁCH 2
            // *******************************************
            let mangCuocUpdate = [... state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item, index) =>{
                if (item.ma === action.maCuoc) {
                    return {...item, datCuoc:true}
                }
                return {...item, datCuoc:false}
            })
            state.mangDatCuoc = mangCuocUpdate
            return {...state}
        }
        case "PLAY_GAME": {
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            console.log(Math.floor(Math.random()*3))
            state.computer = quanCuocNgauNhien
            return {...state}
        }
        case "END_GAME": {
            state.soBanChoi += 1
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computer = state.computer

            switch(player.ma){
                case "keo": {
                    if (computer.ma === "keo"){
                        state.ketQua = "Bạn Hòa"
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Quá Non"
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "Tuyệt với, I love you 3000"
                    }
                } break;
                case "bua": {
                    if (computer.ma === "keo"){
                        state.soBanThang += 1;
                        state.ketQua = "Tuyệt với, I love you 3000"
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Bạn Hòa"
                    } else {
                        state.ketQua = "Quá Non"
                    }
                } break;
                case "bao": {
                    if (computer.ma === "keo"){
                        state.soBanThang += 1;
                        state.ketQua = "Tuyệt với, I love you 3000"
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Quá Non"
                    } else {
                        state.ketQua = "Bạn Hòa"
                    }
                } break;
                default: state.soBanThang += 1; state.ketQua = "Tuyệt với, I love you 3000"
                return {...state}
            }
        }
        default: return {...state}
    }
}

export default BaiTapOanTuTiReducer