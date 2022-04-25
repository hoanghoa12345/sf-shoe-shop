import axios from "axios";

const BASE_URL = "https://sf-shoe-shop-be.herokuapp.com/";

const postSignIn = (loginCredential) => {
  return axios.post(BASE_URL + "api/users/signin", loginCredential);
};

const postRegister = (userInfo) => {
  return axios.post(BASE_URL + "api/users/signin", userInfo);
};
//user 

const getUser = (token) => {
  return axios.get(BASE_URL + 'api/users/list/',{
    headers: {
      Authorization: "Bearer " + token
    }
  })
}

const getUsers = (id) => {
  return axios.get(BASE_URL + '/api/users/' + id)
}
const saveUser = (userBody, token) => {
  return axios.post(BASE_URL + "api/users/register", userBody, {
    headers: {
      Authorization: "Bearer " + token,
    }
  })
}
const updateUser = ( id,userBody, token) => {
  return axios.put(BASE_URL + "api/users/update-profile/" + id,userBody, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

const deleteUser = (id, token) => {
  return axios.post(BASE_URL + "api/users/" + id, {
    header: {
      Authorization: "Bearer " + token
    }
  })
}
//product
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
  getUsers,
  getUser,
  saveUser,
  updateUser,
  deleteUser,
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
};
