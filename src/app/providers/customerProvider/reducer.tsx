import { handleActions } from "redux-actions";
import { INITIAL_STATE, ICustomerStateContext } from "./context";
import { CustomerActionEnums } from "./action";

export const CustomerReducer = handleActions<ICustomerStateContext, ICustomerStateContext>({
    [CustomerActionEnums.getCustomersPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.getCustomersSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.getCustomersError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.getCustomerPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.getCustomerSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.getCustomerError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.createCustomerPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.createCustomerSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.createCustomerError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.updateCustomerPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.updateCustomerSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.updateCustomerError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.deleteCustomerPending]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.deleteCustomerSuccess]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [CustomerActionEnums.deleteCustomerError]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
}, INITIAL_STATE );