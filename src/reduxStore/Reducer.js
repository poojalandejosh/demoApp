import { Admin } from "./Type";

const initialState = {
  singleTranLoading: "",
  singleTran: [],
  singleTranErr: "",

  adminloginDataLoading: "",
  adminloginData: JSON.parse(window.localStorage.getItem("adminData")),
  adminloginDataErr: [],

  customerloginDataLoading: "",
  customerloginData: JSON.parse(window.localStorage.getItem("userData")),
  customerloginDataErr: [],

  customerListLoading: "",
  customerList: [],
  customerListErr: [],

  singleUserDataLoading: "",
  singleUserData: JSON.parse(window.localStorage.getItem("userInfo")),
  singleUserDataErr: [],

  transactionsDataLoading: "",
  transactionsData: [],
  transactionsDataErr: [],

  loading: false,
  error: [],
  loginRole: "",

  userDeletedLoading: "",
  userDeleted: [],
  userDeletedErr: "",

  createTransactionLoading: "",
  createTransaction: [],
  createTransactionErr: [],

  allTransactionLoading: "",
  allTransaction: [],
  allTransactionErr: [],

  createUserResLoading: "",
  createUserRes: [],
  createUserResErr: [],

  token: JSON.parse(window.localStorage.getItem("key")),
  userToken: JSON.parse(window.localStorage.getItem("userkey")),
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case Admin.ADMIN_LOGIN_REQUEST: {
      return {
        ...state,
        adminloginDataLoading: true,
      };
    }
    case Admin.ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        adminloginData: action.payload,
        adminloginDataErr: [],
        adminloginDataLoading: false,
      };
    }
    case Admin.ADMIN_LOGIN_FAILURE: {
      return {
        ...state,
        adminloginDataErr: action.payload,
        adminloginDataLoading: false,
      };
    }
    case Admin.CUSTOMER_LOGIN_REQUEST: {
      return {
        ...state,
        customerloginDataLoading: true,
      };
    }
    case Admin.CUSTOMER_LOGIN_SUCCESS: {
      return {
        ...state,
        customerloginData: action.payload,
        customerloginDataErr: [],
        customerloginDataLoading: false,
      };
    }
    case Admin.CUSTOMER_LOGIN_FAILURE: {
      return {
        ...state,
        customerloginDataErr: action.payload,
        customerloginDataLoading: false,
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
        customerListLoading: true,
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
        customerListErr: action.payload,
        customerListLoading: false,
      };
    }
    case Admin.SINGLE_CUSTOMER_REQUEST: {
      return {
        ...state,
        singleUserDataLoading: true,
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
        singleUserDataErr: action.payload,
        singleUserDataLoading: false,
      };
    }
    case Admin.GET_USER_TRANSACTION_REQUEST: {
      return {
        ...state,
        singleTranLoading: true,
      };
    }
    case Admin.GET_USER_TRANSACTION_SUCCESS: {
      return {
        ...state,
        singleTran: action.payload,
        singleTranLoading: false,
      };
    }
    case Admin.GET_USER_TRANSACTION_FAILURE: {
      return {
        ...state,
        singleTranErr: action.payload,
        singleTranLoading: false,
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
        createTransactionLoading: true,
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
        createTransactionErr: action.payload,
        createTransactionLoading: false,
      };
    }
    case Admin.CLEAR_TRANSACTION_DATA: {
      return {
        ...state,
        createTransactionErr: [],
        createTransaction: action.payload,
        createTransactionLoading: false,
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
        createUserResLoading: true,
      };
    }
    case Admin.CREATE_USER_SUCCESS: {
      return {
        ...state,
        createUserRes: action.payload,
        createUserResLoading: false,
      };
    }
    case Admin.CREATE_USER_FAILURE: {
      return {
        ...state,
        createUserResErr: action.payload,
        createUserResLoading: false,
      };
    }
    case Admin.CLEAR_CREATE_USER_RESPONSE: {
      return {
        ...state,
        createUserResLoading: false,
        createUserResErr: [],
        createUserRes: [],
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
        singleTranLoading: "",
        singleTran: [],
        singleTranErr: "",
        adminloginDataLoading: "",
        adminloginData: [],
        adminloginDataErr: [],
        customerloginDataLoading: "",
        customerloginData: [],
        customerloginDataErr: [],
        customerListLoading: "",
        customerList: [],
        customerListErr: [],
        singleUserDataLoading: "",
        singleUserData: [],
        singleUserDataErr: [],
        transactionsDataLoading: "",
        transactionsData: [],
        transactionsDataErr: [],
        loading: false,
        error: [],
        loginRole: "",
        userDeletedLoading: "",
        userDeleted: [],
        userDeletedErr: "",
        createTransactionLoading: "",
        createTransaction: [],
        createTransactionErr: [],
        allTransactionLoading: "",
        allTransaction: [],
        allTransactionErr: [],
        createUserResLoading: "",
        createUserRes: [],
        createUserResErr: [],
        token: "",
        userToken: "",
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        singleTranLoading: "",
        singleTran: [],
        singleTranErr: "",
        adminloginDataLoading: "",
        adminloginData: [],
        adminloginDataErr: [],
        customerloginDataLoading: "",
        customerloginData: [],
        customerloginDataErr: [],
        customerListLoading: "",
        customerList: [],
        customerListErr: [],
        singleUserDataLoading: "",
        singleUserData: [],
        singleUserDataErr: [],
        transactionsDataLoading: "",
        transactionsData: [],
        transactionsDataErr: [],
        loading: false,
        error: [],
        loginRole: "",
        userDeletedLoading: "",
        userDeleted: [],
        userDeletedErr: "",
        createTransactionLoading: "",
        createTransaction: [],
        createTransactionErr: [],
        allTransactionLoading: "",
        allTransaction: [],
        allTransactionErr: [],
        createUserResLoading: "",
        createUserRes: [],
        createUserResErr: [],
        token: "",
        userToken: "",
      };
    }
    default:
      return state;
  }
};
