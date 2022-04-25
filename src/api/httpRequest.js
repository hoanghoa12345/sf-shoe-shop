/* eslint-disable no-unused-vars */
import axios from 'axios'

const BASE_URL = 'https://sf-shoe-shop-be.herokuapp.com/'

const TOKEN =
    localStorage.getItem('user') === null
        ? ''
        : JSON.parse(localStorage.getItem('user')).token

const postLogin = loginCredential => {
    return axios.post(BASE_URL + 'api/users/signin', loginCredential)
}

const postRegister = userInfo => {
    return axios.post(BASE_URL + 'api/users/register', userInfo)
}

const getProducts = () => {
    return axios.get(BASE_URL + 'api/products/')
}

const getProduct = id => {
    return axios.get(BASE_URL + 'api/products/' + id)
}
const saveProduct = (productBody, TOKEN) => {
    return axios.post(BASE_URL + 'api/products/', productBody, {
        headers: {
            Authorization: `Bearer  + ${TOKEN}`
        }
    })
}

const updateProduct = (id, productBody, TOKEN) => {
    return axios.put(BASE_URL + 'api/products/' + id, productBody, {
        headers: {
            Authorization: `Bearer  + ${TOKEN}`
        }
    })
}

const deleteProduct = (id, TOKEN) => {
    return axios.delete(BASE_URL + 'api/products/' + id, {
        headers: {
            Authorization: `Bearer  + ${TOKEN}`
        }
    })
}

export {
    postLogin,
    postRegister,
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}
