import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// const { NEXT_PUBLIC_URL_API } = process.env

enum REQUEST_TIMEOUT {
    default = 30000,
}
const tokenAdmin = ''
const  request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API_v2,
    timeout: REQUEST_TIMEOUT.default,
    headers:{
        'Tokencybersoft': process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT
    }
});

const requestAdmin = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API,
    timeout: REQUEST_TIMEOUT.default,
    headers: {
        'Tokencybersoft': process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT,
        'Authorization': `Bearer ${tokenAdmin}`
    }
});


const InterceptorsRequest =  (config:any) => {
    return config
}
const InterceptorsErrors =  (error:any) => {
    return Promise.reject(error);
}
const InterceptorsResponse = (res:AxiosResponse)=>{
    if(res && res.data){
        return res.data
    }
    return res;
}

// Request interception definition 
request.interceptors.request.use(InterceptorsRequest, InterceptorsErrors)
request.interceptors.response.use(InterceptorsResponse, InterceptorsErrors)
requestAdmin.interceptors.request.use(InterceptorsRequest, InterceptorsErrors)
requestAdmin.interceptors.response.use(InterceptorsResponse, InterceptorsErrors)

export { request, requestAdmin }