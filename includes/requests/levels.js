import {LEVEL_URI, HEADER_WITH_AUTH} from './contants'

const axios = require('axios');

export const getAllLevels = (token) => axios.get( LEVEL_URI(), {headers:HEADER_WITH_AUTH(token)} );
export const getLevelById = (token, id) => axios.get( LEVEL_URI(id), {headers:HEADER_WITH_AUTH(token)} );
//export const createNewLevel = (token, data) => axios.post( LEVEL_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
export const editLevel = (token, id, data) => axios.put( LEVEL_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
//export const deleteLevel = (token, id) => axios.delete( LEVEL_URI(id), {headers:HEADER_WITH_AUTH(token)} );


// import useSWR from 'swr'
// import fetch from '../lib/fetch'

// export const useLevels = (token) => {
//   return useSWR([LEVEL_URI(), {headers:HEADER_WITH_AUTH(token)} ], fetch)
// }
