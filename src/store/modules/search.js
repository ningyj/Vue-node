import { SEARCH,RESULT } from '../types.js'
import { getQuery } from '../services.js'

const state = {
    search: [],
    result:[],

}

const actions = {
    [SEARCH]: ({ commit, state }, payload) => {
        getQuery('/music/hotSearch')
            .then(
                result => {
                    commit(SEARCH, result.data.hotkey);
                    // console.log(SEARCH, result.data.hotkey)
                }
            )
    },
    [RESULT]: ({ commit, state }, payload) => {
        getQuery('/music/search',payload)
            .then(
                result => {
                    commit(RESULT, result.data.song.list);
                    // console.log(RESULT, result.data.hotkey)
                }
            )
    },
}

const mutations={
    [SEARCH]:(state,payload)=>state.search=payload,
    [RESULT]:(state,payload)=>state.result=payload,
}

export default{
    namespaced:true,
    state,actions,mutations
}