import axios from "axios";

const BASE_URL = "https://sf-shoe-shop-be.herokuapp.com/";

const postSignIn = (loginCredential) => {
  return axios.post(BASE_URL + "api/users/signin", loginCredential);
};

const postRegister = (userInfo) => {
  return axios.post(BASE_URL + "api/users/signin", userInfo);
};

const getProducts = () => {
  return axios.get(BASE_URL + "api/products/");
};

const getProduct = (id) => {
  return axios.get(BASE_URL + "api/products/" + id);
};

const saveProduct = (productBody, token) => {
  return axios.post(BASE_URL + "api/products/", productBody, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const updateProduct = (id, productBody, token) => {
  return axios.put(BASE_URL + "api/products/" + id, productBody, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const deleteProduct = (id, token) => {
  return axios.delete(BASE_URL + "api/products/" + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export {
  postSignIn,
  postRegister,
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
};
