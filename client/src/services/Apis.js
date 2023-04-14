import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./Helper";



export const resisterfunction = async (data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v2/users/resister`,data)
}
export const editfunction = async (data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v2/users/edit`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v2/users/sendotp`,data)
}
export const getProfile = async(data)=>{
    return await commonrequest("GET",`${BACKEND_URL}/api/v2/users/info`,data)
}

export const userverify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v2/users/login`,data)
}