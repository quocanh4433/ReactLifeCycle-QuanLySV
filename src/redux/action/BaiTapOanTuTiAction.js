import { CHON_NHAN_VAT, PLAY_GAME, END_GAME, CHON_KEO_BUA_BAO } from "../types/BaiTapOanTuTiType"

export const chonnhanVatAction = (maNhanVat) => {
    return {
        type: CHON_NHAN_VAT,
        maNhanVat
    }
}

export const randomComputerItemAction = () => {
    return {
        type: PLAY_GAME
    }
}

export const endGameAction = () => {
    return {
        type: END_GAME
    }
}

export const datCuocAction = (maCuoc) => {
    return {
        type: CHON_KEO_BUA_BAO,
        maCuoc
    }
}
