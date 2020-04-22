import {PERMISSION_URI, HEADER_WITH_AUTH} from './contants'

const axios = require('axios');

export const getAllPermissions = (token) => axios.get( PERMISSION_URI(), {headers:HEADER_WITH_AUTH(token)} );

// export const getWorkdayById = (token, id) => axios.get( WORKDAY_URI(id), {headers:HEADER_WITH_AUTH(token)} );
// export const createNewWorkday = (token, data) => axios.post( WORKDAY_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
// export const editWorkday = (token, id, data) => axios.put( WORKDAY_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
// export const deleteWorkday = (token, id) => axios.delete( WORKDAY_URI(id), {headers:HEADER_WITH_AUTH(token)} );

