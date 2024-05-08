import { Admin } from "./Type";

const initialState = {
  singleTran: [],
  adminloginData: JSON.parse(window.localStorage.getItem("adminData")),
  customerloginData: JSON.parse(window.localStorage.getItem("userData")),
  customerList: [],
  singleUserData: JSON.parse(window.localStorage.getItem("userInfo")),
  transactionsData: [],
  loading: false,
  error: [],
  loginRole: "",
  userDeleted: [],
  createTransaction: [],
  allTransaction: [],
  createUserRes: [],
  token: JSON.parse(window.localStorage.getItem("key")),
  userToken: JSON.parse(window.localStorage.getItem("userkey")),
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case Admin.ADMIN_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        adminloginData: action.payload,
        loading: false,
      };
    }
    case Admin.ADMIN_LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.CUSTOMER_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.CUSTOMER_LOGIN_SUCCESS: {
      return {
        ...state,
        customerloginData: action.payload,
        loading: false,
      };
    }
    case Admin.CUSTOMER_LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.ALL_TRANSACTION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.ALL_TRANSACTION_SUCCESS: {
      return {
        ...state,
        allTransaction: action.payload,
        loading: false,
      };
    }
    case Admin.ALL_TRANSACTION_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.CUSTOMER_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.CUSTOMER_LIST_SUCCESS: {
      return {
        ...state,
        customerList: action.payload,
        loading: false,
      };
    }
    case Admin.CUSTOMER_LIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.SINGLE_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.SINGLE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        singleUserData: action.payload,
        loading: false,
      };
    }
    case Admin.SINGLE_CUSTOMER_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.GET_USER_TRANSACTION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.GET_USER_TRANSACTION_SUCCESS: {
      return {
        ...state,
        singleTran: action.payload,
        loading: false,
      };
    }
    case Admin.GET_USER_TRANSACTION_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case Admin.TRANSACTION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.TRANSACTION_SUCCESS: {
      return {
        ...state,
        transactionsData: action.payload,
        loading: false,
      };
    }
    case Admin.TRANSACTION_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.DELETE_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.DELETE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        userDeleted: action.payload,
        loading: false,
      };
    }
    case Admin.DELETE_CUSTOMER_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case Admin.CREATE_TRANSACTION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.CREATE_TRANSACTION_SUCCESS: {
      return {
        ...state,
        createTransaction: action.payload,
        loading: false,
      };
    }
    case Admin.CREATE_TRANSACTION_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.UPDATE_USER_INFO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.UPDATE_USER_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case Admin.UPDATE_USER_INFO_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.CREATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.CREATE_USER_SUCCESS: {
      return {
        ...state,
        createUserRes: action.payload,
        loading: false,
      };
    }
    case Admin.CREATE_USER_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case Admin.SET_USER_TOKEN: {
      return {
        ...state,
        userToken: action.payload,
      };
    }
    case Admin.DELETE_SINGLE_USER: {
      let newListData = [...state?.customerList?.data];

      let newDeleteData = newListData?.filter((itm) => {
        return newListData.indexOf(itm) !== action.payload;
      });
      return {
        ...state,
        customerList: newDeleteData,
        loading: false,
      };
    }
    case Admin.CLEAR_ERR: {
      return {
        ...state,
        error: [],
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        singleTran: [],
        adminloginData: [],
        customerloginData: [],
        customerList: [],
        singleUserData: [],
        transactionsData: [],
        loading: false,
        error: [],
        loginRole: "",
        userDeleted: [],
        createTransaction: [],
        allTransaction: [],
        createUserRes: [],
        token: "",
        userToken: "",
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        singleTran: [],
        adminloginData: [],
        customerloginData: [],
        customerList: [],
        singleUserData: [],
        transactionsData: [],
        loading: false,
        error: [],
        loginRole: "",
        userDeleted: [],
        createTransaction: [],
        allTransaction: [],
        createUserRes: [],
        token: "",
        userToken: "",
      };
    }
    default:
      return state;
  }
};
