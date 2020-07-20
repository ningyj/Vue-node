import axios from '../plugins/axios.js';

function getQuery( url, params = {} ) {
    return axios({
        url, params
    }).then(
        res => res.data
    )
}

export { getQuery }