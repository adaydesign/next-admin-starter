// API URL
const API_URL = 'http://localhost:8000/api/v1'

// Axios Config
export const HEADER_NONE_AUTH = {
        "Content-Type": "application/json"
}

export const HEADER_WITH_AUTH = (token) => {
    return {...HEADER_NONE_AUTH, 
        "Authorization": `Bearer ${token}`
    }
}

export const HEADER_WITH_BASICAUTH = (auth) => {
    return {...HEADER_NONE_AUTH, 
        "Authorization": `Basic ${auth}`
    }
}

// Services
export const LOGIN_URI = `${API_URL}/login`
export const USER_URI = (id) => `${API_URL}/users`+`${id!=undefined?'/'+id:''}`
export const DEPARTMENT_URI = (courtCode) => `${API_URL}/departments`+`${courtCode!=undefined?'/'+courtCode:''}`
export const DIVISION_URI = (id) => `${API_URL}/divisions`+`${id!=undefined?'/'+id:''}`


