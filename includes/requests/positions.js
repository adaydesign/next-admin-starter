import { POSITION_URI, HEADER_WITH_AUTH } from './contants'

const axios = require('axios');

export const getAllPositions = (token) => axios.get(POSITION_URI(), { headers: HEADER_WITH_AUTH(token) });
export const getPositionById = (token, id) => axios.get(POSITION_URI(id), { headers: HEADER_WITH_AUTH(token) });
// export const createNewPosition = (token, data) => {
//     console.log('axios data')
//     console.log(data)
//     return axios.post(POSITION_URI(), data, { headers: HEADER_WITH_AUTH(token) });
// }
export const createNewPosition = (token, data) => axios.post(POSITION_URI(), data, { headers: HEADER_WITH_AUTH(token) });

export const editPosition = (token, id, data) => axios.put(POSITION_URI(id), data, { headers: HEADER_WITH_AUTH(token) });
export const deletePosition = (token, id) => axios.delete(POSITION_URI(id), { headers: HEADER_WITH_AUTH(token) });


// import useSWR from 'swr'
// import fetch from '../lib/fetch'

// export const usePositions = (token) => {
//   return useSWR([POSITION_URI(), {headers:HEADER_WITH_AUTH(token)} ], fetch)
// }
