import axios from 'axios';

export const signUpFromApi = async (data) => {
    const request = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/auth/sign-up`,
        data
    })
    return request;
}

export const loginFromApi = async (data) => {
    const request = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/auth/login`,
        data
    })
    return request;
}

export const forgotPasswordFromApi = async (data) => {
    const request = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/auth/forgot-password`,
        data
    })
    return request;
}

export const resetPasswordFromApi = async (data) => {
    const request = await axios({
        method: 'post',
        url: `${process.env.APP_URL}/auth/new-password`,
        data
    })
    return request;
}

export const getInfoUserFromAPI = async (token) => {
    const request = await axios({
        method: 'get',
        headers: {Authorization: `Bearer ${token}`},
        url: `${process.env.APP_URL}/auth/get-info-customer`

    })
    return request;
}
