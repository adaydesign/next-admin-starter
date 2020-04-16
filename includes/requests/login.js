import {LOGIN_URI, HEADER_NONE_AUTH} from './contants'

const axios = require('axios');

export const postLogin = (data) => axios.post(LOGIN_URI, data, {HEADER_NONE_AUTH});