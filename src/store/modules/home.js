import {HOME,BANNER} from '../types.js'
import {getQuery} from '../services.js'

const state = {
    home:[],
    banner:[]
}

const actions={
    [HOME]: ({commit,state},payload) => {
        getQuery('/music/raking')
        .then(
            result=>{
                commit(HOME,result.data.topList);
                // console.log(HOME,result.data.topList)
            }
        )
    },

    [BANNER]:({commit,state},payload)=>{
        getQuery('/music/precommend')
        .then(
            result=>{
                commit(BANNER,result.focus.data.content)
                // console.log(BANNER,result.focus.data.content)
            }
        )
    }
}

const mutations={
    [HOME]:(state,payload)=>state.home=payload,
    [BANNER]:(state,payload)=>state.banner=payload,
}

export default{
    namespaced:true,
    state,actions,mutations
}