const stateDefault = {
    mangSV : [
        {maSV: "01", hoTen: "Trần Văn C", soDienThoai: "0908765434", email: "tranvanc000@gmail.com"},
        {maSV: "02", hoTen: "Nguyễn Hoàng B", soDienThoai: "0876543221", email: "nguyenhoangb@gmail.com"},
        {maSV: "04", hoTen: "Trần Văn C", soDienThoai: "0912346545", email: "tranvanc123@gmail.com"},
        {maSV: "05", hoTen: "Nguyễn Hoàng B", soDienThoai: "0823456734", email: "nguyenhoangb@gmail.com"},
    ],
    SVChinhSua: {
        maSV: "",
        hoTen: "",
        soDienThoai: "",
        email: ""
    },
    SVTimKiem: []
}

export const QuanLySVReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "XOA_SV": {
            state.mangSV = [...state.mangSV.filter(SV => SV.maSV !== action.maSV)]
            return {...state}
        }
        case "THEM_SV": {
            state.mangSV = [...state.mangSV, action.SV]
            return {...state}
        }
        case "CHINH_SUA_SV": {
            state.SVChinhSua = action.SVChinhSua 
            return {...state}
        }
        case "CAP_NHAT_SV": {
            let index = state.mangSV.findIndex(sinhVien => sinhVien.maSV === action.SVCapNhat.maSV)
            if(index !== -1){
                state.mangSV[index] = action.SVCapNhat
            }
            state.mangSV = [...state.mangSV]
            return {...state}
        }
        case "TIM_KIEM_SV": {
            state.SVTimKiem = []
            state.mangSV.forEach((sinhVien, index) => {
                for (let key in sinhVien){
                    if (sinhVien[key].toLowerCase() === action.keyword.toLowerCase()){
                        state.SVTimKiem = [...state.SVTimKiem, sinhVien]
                    }
                }
            })
            state.mangSV = [...state.SVTimKiem]
            return {...state}
        }
        default: return state
    }
}
