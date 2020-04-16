import {OFFICERTYPE_URI, HEADER_WITH_AUTH} from './contants'

const axios = require('axios');

export const getAllOfficers = (token) => axios.get( OFFICERTYPE_URI(), {headers:HEADER_WITH_AUTH(token)} );
export const getOfficerTypeById = (token, id) => axios.get( OFFICERTYPE_URI(id), {headers:HEADER_WITH_AUTH(token)} );
export const createNewOfficerType = (token, data) => axios.post( OFFICERTYPE_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
export const editOfficerType = (token, id, data) => axios.put( OFFICERTYPE_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
export const deleteOfficerType = (token, id) => axios.delete( OFFICERTYPE_URI(id) , {headers:HEADER_WITH_AUTH(token)} );