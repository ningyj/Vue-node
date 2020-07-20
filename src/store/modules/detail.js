import { DETAIL } from '../types.js'
import { getQuery } from '../services.js'

const state = {
    detail: [],
    src: "",
    tit: ""
}

const actions = {
    [DETAIL]: ({ commit, state }, payload) => {
        getQuery('/music/rakingDetail',payload)
            .then(
                result => {
                    commit(DETAIL, result);
                    commit('DETAIL_SRC', result);
                    commit('DETAIL_TIT', result);

                }
            )
    }
}

const mutations={
    [DETAIL]:(state,payload)=>state.detail=payload.songlist,
    DETAIL_SRC:(state,payload)=>state.src=payload.topinfo.pic_album.replace(/imgcache.qq.com/, "y.gtimg.cn"),
    DETAIL_TIT:(state,payload)=>state.tit=payload.topinfo.ListName,
}

export default{
    namespaced:true,
    state,actions,mutations
}