import {HOLIDAY_URI, HEADER_WITH_AUTH} from './contants'

const axios = require('axios');

export const getAllHolidays = (token) => axios.get( HOLIDAY_URI(), {headers:HEADER_WITH_AUTH(token)} );
export const getHolidayById = (token, id) => axios.get( HOLIDAY_URI(id), {headers:HEADER_WITH_AUTH(token)} );
export const createNewHoliday = (token, data) => axios.post( HOLIDAY_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
export const editHoliday = (token, id, data) => axios.put( HOLIDAY_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
export const deleteHoliday = (token, id) => axios.delete( HOLIDAY_URI(id), {headers:HEADER_WITH_AUTH(token)} );


// import useSWR from 'swr'
// import fetch from '../lib/fetch'

// export const useHolidays = (token) => {
//   return useSWR([HOLIDAY_URI(), {headers:HEADER_WITH_AUTH(token)} ], fetch)
// }
