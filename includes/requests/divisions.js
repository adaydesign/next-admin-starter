import {DIVISION_URI, HEADER_WITH_AUTH} from './contants'

const axios = require('axios');

export const getAllDivisions = (token) => axios.get( DIVISION_URI(), {headers:HEADER_WITH_AUTH(token)} );
export const getDivisionById = (token, id) => axios.get( DIVISION_URI(id), {headers:HEADER_WITH_AUTH(token)} );
export const createNewDivision = (token, data) => axios.post( DIVISION_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
export const editDivision = (token, id, data) => axios.put( DIVISION_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
export const deleteDivision = (token, id) => axios.delete( DIVISION_URI(id), {headers:HEADER_WITH_AUTH(token)} );


// import useSWR from 'swr'
// import fetch from '../lib/fetch'

// export const useDivisions = (token) => {
//   return useSWR([DIVISION_URI(), {headers:HEADER_WITH_AUTH(token)} ], fetch)
// }
