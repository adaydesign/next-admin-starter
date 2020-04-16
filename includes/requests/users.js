import {USER_URI, HEADER_WITH_AUTH} from './contants'

const axios = require('axios');

export const getUserById = (uid, token) => axios.get( USER_URI(uid), {headers:HEADER_WITH_AUTH(token)} );
export const createNewUser = (token, data) => axios.post( USER_URI(), data , {headers:HEADER_WITH_AUTH(token)} );