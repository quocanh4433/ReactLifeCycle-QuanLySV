const stateDefault = {
    mangDatCuoc: [
        {ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true},
        {ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false},
        {ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false},
    ],
    mangNhanVat: [
        {ma: 3, hinhAnh: "./img/character/img-03.png", avatar : "./img/avatar/C03.jpg", isChoose: true},
        {ma: 4, hinhAnh: "./img/character/img-04.png", avatar : "./img/avatar/C04.jpg", isChoose: false},
        {ma: 5, hinhAnh: "./img/character/img-05.png", avatar : "./img/avatar/C05.jpg", isChoose: false},
        {ma: 6, hinhAnh: "./img/character/img-06.png", avatar : "./img/avatar/C06.jpg", isChoose: false},
        {ma: 7, hinhAnh: "./img/character/img-07.png", avatar : "./img/avatar/C07.jpg", isChoose: false},
        {ma: 9, hinhAnh: "./img/character/img-09.png", avatar : "./img/avatar/C09.jpg", isChoose: false},
        {ma: 10, hinhAnh: "./img/character/img-10.png", avatar : "./img/avatar/C10.jpg", isChoose: false},
        {ma: 11, hinhAnh: "./img/character/img-11.png", avatar : "./img/avatar/C11.jpg", isChoose: false},
        {ma: 12, hinhAnh: "./img/character/img-12.png", avatar : "./img/avatar/C12.jpg", isChoose: false},
        {ma: 13, hinhAnh: "./img/character/img-13.png", avatar : "./img/avatar/C13.jpg", isChoose: false},
        {ma: 14, hinhAnh: "./img/character/img-14.png", avatar : "./img/avatar/C14.jpg", isChoose: false},
        {ma: 15, hinhAnh: "./img/character/img-15.png", avatar : "./img/avatar/C15.jpg", isChoose: false},
        {ma: 16, hinhAnh: "./img/character/img-16.png", avatar : "./img/avatar/C16.jpg", isChoose: false},
        {ma: 17, hinhAnh: "./img/character/img-17.png", avatar : "./img/avatar/C17.jpg", isChoose: false},
        {ma: 18, hinhAnh: "./img/character/img-18.png", avatar : "./img/avatar/C18.jpg", isChoose: false},
    ],
    arrStone: [
        {ma: 1, hinhAnh: "./img/stone/S01.png", isChoose: true},
        {ma: 2, hinhAnh: "./img/stone/S02.png", isChoose: true},
        {ma: 3, hinhAnh: "./img/stone/S03.png", isChoose: true},
        {ma: 4, hinhAnh: "./img/stone/S04.png", isChoose: true},
        {ma: 5, hinhAnh: "./img/stone/S05.png", isChoose: true},
        {ma: 6, hinhAnh: "./img/stone/S06.png", isChoose: true},
    ],
    arrStoneThanos: [],
    arrStoneAvenger: [],    
    ketQua: "I Love you 300",
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
        case "CHON_NHAN_VAT": {
            let mangNhanVatUpdate = [... state.mangNhanVat]
            mangNhanVatUpdate = mangNhanVatUpdate.map((item, index)=>{
                if (item.ma === action.maNhanVat) {
                    return {...item, isChoose: true}
                }
                return {...item, isChoose: false}
            })
            state.mangNhanVat = mangNhanVatUpdate
            return {...state}
        }
        case "END_GAME": {
            state.soBanChoi += 1
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computer = state.computer
            let arrStoneThanosUpdate = [...state.arrStoneThanos]
            let arrStoneThanoAvengerUpdate = [...state.arrStoneAvenger]
            let arrStoneUpdate = [...state.arrStone]

            switch(player.ma){
                case "keo": {
                    if (computer.ma === "keo"){
                        state.ketQua = "Vẫn Còn Cơ Hội"
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Bạn Đã Thua!! Hãy Làm Lại"
                        if (state.arrStone.length >= 1) {
                            arrStoneThanosUpdate.push(state.arrStone[0])
                            arrStoneUpdate.splice(0,1)
                            state.arrStoneThanos = arrStoneThanosUpdate
                            state.arrStone = arrStoneUpdate
                        }
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "Tuyệt vời, I love you 3000"
                        if (state.arrStone.length >= 1) {
                            arrStoneThanoAvengerUpdate.push(state.arrStone[0])
                            arrStoneUpdate.splice(0,1)
                            state.arrStone = arrStoneUpdate
                            state.arrStoneAvenger = arrStoneThanoAvengerUpdate
                        }
                    }
                } break;
                case "bua": {
                    if (computer.ma === "keo"){
                        state.soBanThang += 1;
                        state.ketQua = "Tuyệt vời, I love you 3000"
                        if (state.arrStone.length >= 1) {
                            arrStoneThanoAvengerUpdate.push(state.arrStone[0])
                            arrStoneUpdate.splice(0,1)
                            state.arrStone = arrStoneUpdate
                            state.arrStoneAvenger = arrStoneThanoAvengerUpdate
                        }
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Vẫn Còn Cơ Hội"
                    } else {
                        state.ketQua = "Bạn Đã Thua!! Hãy Làm Lại"
                        if (state.arrStone.length >= 1) {
                            console.log('thêm vào thanos bua')
                            arrStoneThanosUpdate.push(state.arrStone[0])
                            arrStoneUpdate.splice(0,1)
                            state.arrStoneThanos = arrStoneThanosUpdate
                            state.arrStone = arrStoneUpdate
                        }
                    }
                } break;
                case "bao": {
                    if (computer.ma === "keo"){
                        state.soBanThang += 1;
                        state.ketQua = "Tuyệt vời, I love you 3000"
                        if (state.arrStone.length >= 1) {
                            arrStoneThanoAvengerUpdate.push(state.arrStone[0])
                            arrStoneUpdate.splice(0,1)
                            state.arrStone = arrStoneUpdate
                            state.arrStoneAvenger = arrStoneThanoAvengerUpdate
                        }
                    } else if (computer.ma === "bua") {
                        state.ketQua = "Bạn Đã Thua!! Hãy Làm Lại"
                        if (state.arrStone.length >= 1) {
                            arrStoneThanosUpdate.push(state.arrStone[0])
                            arrStoneUpdate.splice(0,1)
                            state.arrStoneThanos = arrStoneThanosUpdate
                            state.arrStone = arrStoneUpdate
                        }
                    } else {
                        state.ketQua = "Vẫn Còn Cơ Hội"
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