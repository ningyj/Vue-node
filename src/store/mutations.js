import * as types from './types.js'
export default{
    [types.NAV]:(state,payload)=>state.bNav=payload,
    [types.TAB]:(state,payload)=>state.bTab=payload,
    [types.LOADING]:(state,payload)=>state.bLoading=payload,
}