import { Admin } from "./Type";
import axios from "axios";

export const adminLoginRequest = () => {
  return {
    type: Admin.ADMIN_LOGIN_REQUEST,
  };
};
export const adminLoginSucess = (payload) => {
  return {
    type: Admin.ADMIN_LOGIN_SUCCESS,
    payload,
  };
};
export const adminLoginFailure = (err) => {
  return {
    type: Admin.ADMIN_LOGIN_FAILURE,
    payload: err,
  };
};

export const customerLoginRequest = () => {
  return {
    type: Admin.CUSTOMER_LOGIN_REQUEST,
  };
};
export const customerLoginSucess = (payload) => {
  return {
    type: Admin.CUSTOMER_LOGIN_SUCCESS,
    payload,
  };
};
export const customerLoginFailure = (err) => {
  return {
    type: Admin.CUSTOMER_LOGIN_FAILURE,
    payload: err,
  };
};

export const cutomerListRequest = () => {
  return {
    type: Admin.CUSTOMER_LIST_REQUEST,
  };
};
export const cutomerListSucess = (payload) => {
  return {
    type: Admin.CUSTOMER_LIST_SUCCESS,
    payload,
  };
};
export const cutomerListFailure = (err) => {
  return {
    type: Admin.CUSTOMER_LIST_FAILURE,
    payload: err,
  };
};

export const transactionRequest = () => {
  return {
    type: Admin.TRANSACTION_REQUEST,
  };
};
export const transactionSucess = (payload) => {
  return {
    type: Admin.TRANSACTION_SUCCESS,
    payload,
  };
};
export const transactionFailure = (err) => {
  return {
    type: Admin.TRANSACTION_FAILURE,
    payload: err,
  };
};

export const singleCustRequest = () => {
  return {
    type: Admin.SINGLE_CUSTOMER_REQUEST,
  };
};
export const singleCustSucess = (payload) => {
  return {
    type: Admin.SINGLE_CUSTOMER_SUCCESS,
    payload,
  };
};
export const singleCustFailure = (err) => {
  return {
    type: Admin.SINGLE_CUSTOMER_FAILURE,
    payload: err,
  };
};

export const deleteCustomerRequest = () => {
  return {
    type: Admin.DELETE_CUSTOMER_REQUEST,
  };
};
export const deleteCustomerSucess = (payload) => {
  return {
    type: Admin.DELETE_CUSTOMER_SUCCESS,
    payload,
  };
};
export const deleteCustomerFailure = (err) => {
  return {
    type: Admin.DELETE_CUSTOMER_FAILURE,
    payload: err,
  };
};
export const setLoginToken = (payload) => {
  return {
    type: Admin.SET_TOKEN,
    payload,
  };
};
export const deleteUser = (payload) => {
  return {
    type: Admin.DELETE_SINGLE_USER,
    payload,
  };
};

export const adminLogout = () => {
  return {
    type: Admin.ADMIN_LOGOUT,
  };
};

export const customerLogout = () => {
  return {
    type: Admin.CUSTOMER_LOGOUT,
  };
};
export const createTransactionRequest = () => {
  return {
    type: Admin.CREATE_TRANSACTION_REQUEST,
  };
};
export const createTransactionSucess = (payload) => {
  return {
    type: Admin.CREATE_TRANSACTION_SUCCESS,
    payload,
  };
};
export const createTransactionFailure = (err) => {
  return {
    type: Admin.CREATE_TRANSACTION_FAILURE,
    payload: err,
  };
};
export const getAllTransactionRequest = () => {
  return {
    type: Admin.ALL_TRANSACTION_REQUEST,
  };
};
export const getAllTransactionSucess = (payload) => {
  return {
    type: Admin.ALL_TRANSACTION_SUCCESS,
    payload,
  };
};
export const getAllTransactionFailure = (err) => {
  return {
    type: Admin.ALL_TRANSACTION_FAILURE,
    payload: err,
  };
};
export const updateUserRequest = () => {
  return {
    type: Admin.UPDATE_USER_INFO_REQUEST,
  };
};
export const updateUserSucess = (payload) => {
  return {
    type: Admin.UPDATE_USER_INFO_SUCCESS,
    payload,
  };
};
export const updateUserFailure = (err) => {
  return {
    type: Admin.UPDATE_USER_INFO_FAILURE,
    payload: err,
  };
};
export const transactionUserRequest = () => {
  return {
    type: Admin.GET_USER_TRANSACTION_REQUEST,
  };
};
export const transactionUserSucess = (payload) => {
  return {
    type: Admin.GET_USER_TRANSACTION_SUCCESS,
    payload,
  };
};
export const transactionUserFailure = (err) => {
  return {
    type: Admin.GET_USER_TRANSACTION_FAILURE,
    payload: err,
  };
};
export const createUserRequest = () => {
  return {
    type: Admin.CREATE_USER_REQUEST,
  };
};
export const createUserSucess = (payload) => {
  return {
    type: Admin.CREATE_USER_SUCCESS,
    payload,
  };
};
export const createUserFailure = (err) => {
  return {
    type: Admin.CREATE_USER_FAILURE,
    payload: err,
  };
};
export const clearErr = () => {
  return {
    type: Admin.CLEAR_ERR,
  };
};
export const settingToken = (payload) => {
  return {
    type: Admin.SET_TOKEN,
    payload,
  };
};
export const settingUserToken = (payload) => {
  return {
    type: Admin.SET_USER_TOKEN,
    payload,
  };
};

export const adminLogin = (data) => {
  return (dispatch) => {
    dispatch(adminLoginRequest);
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        dispatch(adminLoginSucess(res));
      })
      .catch((err) => {
        dispatch(adminLoginFailure(err));
      });
  };
};

export const customerLogin = (data) => {
  return (dispatch) => {
    dispatch(customerLoginRequest);
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        dispatch(customerLoginSucess(res));
      })
      .catch((err) => {
        dispatch(customerLoginFailure(err));
      });
  };
};

export const getCustomerList = (token) => {
  return (dispatch) => {
    dispatch(cutomerListRequest);
    axios
      .get("http://localhost:3000/users", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let data = res.data;
        dispatch(cutomerListSucess(data));
      })
      .catch((err) => {
        dispatch(cutomerListFailure(err));
      });
  };
};

export const getSingleCustomer = (id, token) => {
  return (dispatch) => {
    dispatch(singleCustRequest);
    axios
      .get(`http://localhost:3000/users/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let data = res.data;
        dispatch(singleCustSucess(data));
      })
      .catch((err) => {
        dispatch(singleCustFailure(err));
      });
  };
};
export const getTransaction = (id, token) => {
  return (dispatch) => {
    dispatch(transactionRequest);
    axios
      .get(`http://localhost:3000/transactions?user_id=${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let data = res.data;
        dispatch(transactionSucess(data));
      })
      .catch((err) => {
        dispatch(transactionFailure(err));
      });
  };
};

export const deleteCustomer = (id, token) => {
  return (dispatch) => {
    dispatch(deleteCustomerRequest);
    axios
      .delete(`http://localhost:3000/users/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let data = res;
        dispatch(deleteCustomerSucess(data));
        getCustomerList(token);
      })
      .catch((err) => {
        dispatch(deleteCustomerFailure(err));
      });
  };
};
export const craeteTransactionRequest = (token, data) => {
  return (dispatch) => {
    dispatch(createTransactionRequest);
    axios({
      method: "post",
      url: "http://localhost:3000/transactions",
      headers: {
        authorization: token,
      },
      data: data,
    })
      .then((res) => {
        let data = res.data;
        dispatch(createTransactionSucess(res));
      })
      .catch((err) => {
        dispatch(createTransactionFailure(err));
      });
  };
};
export const getAllUsersTransaction = (id, token) => {
  return (dispatch) => {
    dispatch(getAllTransactionRequest);
    axios
      .get(`http://localhost:3000/transactions?user_id=${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let data = res.data;
        dispatch(getAllTransactionSucess(data));
      })
      .catch((err) => {
        dispatch(getAllTransactionFailure(err));
      });
  };
};
export const updateUserInfo = (token, data, userId) => {
  return (dispatch) => {
    dispatch(updateUserRequest);
    axios({
      method: "put",
      url: `http://localhost:3000/users/${userId}`,
      headers: {
        authorization: token,
      },
      data: data,
    })
      .then((res) => {
        let data = res.data;
        dispatch(updateUserSucess(data));
      })
      .catch((err) => {
        dispatch(updateUserFailure(err));
      });
  };
};
export const getUserTransaction = (id, token) => {
  return (dispatch) => {
    dispatch(transactionUserRequest);
    axios
      .get(`http://localhost:3000/transactions/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        let data = res.data;
        dispatch(transactionUserSucess(data));
      })
      .catch((err) => {
        dispatch(transactionUserFailure(err));
      });
  };
};
export const craeteUserAction = (token, data) => {
  return (dispatch) => {
    dispatch(createUserRequest);
    axios({
      method: "post",
      url: `http://localhost:3000/users`,
      headers: {
        authorization: token,
      },
      data: data,
    })
      .then((res) => {
        let data = res.data;
        console.log("create user res...", data);
        dispatch(createUserSucess(data));
      })
      .catch((err) => {
        console.log("create err...", err);
        dispatch(createUserFailure(err));
      });
  };
};
