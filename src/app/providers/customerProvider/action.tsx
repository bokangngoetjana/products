import {createAction} from "redux-actions";
import {ICustomer, ICustomerStateContext} from "./context";

export enum CustomerActionEnums{
    //each action has three states (get/create/update/delete): pending, success, error

    getCustomersPending = "GET_CUSTOMERS_PENDING",
    getCustomersSuccess = "GET_CUSTOMERS_SUCCESS",
    getCustomersError = "GET_CUSTOMERS_ERROR",

    getCustomerPending = "GET_CUSTOMER_PENDING",
    getCustomerSuccess = "GET_CUSTOMER_SUCCESS",
    getCustomerError = "GET_CUSTOMER_ERROR",

    createCustomerPending = " CREATE_CUSTOMER_PENDING",
    createCustomerSuccess = "CREATE_CUSTOMER_SUCCESS",
    createCustomerError = "CREATE_CUSTOMER_ERROR",

    updateCustomerPending = "UPDATE_CUSTOMER_PENDING",
    updateCustomerSuccess = "UPDATE_CUSTOMER_SUCCESS",
    updateCustomerError = "UPDATE_CUSTOMER_ERROR",

    deleteCustomerPending = "DELETE_CUSTOMER_PENDING",
    deleteCustomerSuccess = "DELETE_CUSTOMER_SUCCESS",
    deleteCustomerError = "DELETE_CUSTOMER_ERROR",
    
}
export const getCustomersPending = createAction<ICustomerStateContext>(
    CustomerActionEnums.getCustomersPending, 
    () => ({isPending: true, isSuccess: false, isError:false})
);
export const getCustomersSuccess = createAction<ICustomerStateContext, ICustomer[]>(
    CustomerActionEnums.getCustomersSuccess,
    (customers: ICustomer[]) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        customers, //include fetched customers in state
    })
);
export const getCustomersError = createAction<ICustomerStateContext>(
    CustomerActionEnums.getCustomersError, () => ({isPending: false, isSuccess: false, isError: true})
);

//Single Product Actions
//get customers
export const getCustomerPending = createAction<ICustomerStateContext>(
    CustomerActionEnums.getCustomerPending, 
    () => ({isPending: true, isSuccess: false, isError:false})
);
export const getCustomerSuccess = createAction<ICustomerStateContext, ICustomer>(
    CustomerActionEnums.getCustomersSuccess,
    (customer: ICustomer) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        customer, //include fetched customers in state
    })
);
export const getCustomerError = createAction<ICustomerStateContext>(
    CustomerActionEnums.getCustomerError, () => ({isPending: false, isSuccess: false, isError: true})
);

//create customers
export const createCustomerPending = createAction<ICustomerStateContext>(
    CustomerActionEnums.createCustomerPending, 
    () => ({isPending: true, isSuccess: false, isError:false})
);
export const createCustomerSuccess = createAction<ICustomerStateContext, ICustomer>(
    CustomerActionEnums.getCustomerSuccess,
    (customer: ICustomer) => ({
        isPending: false,
        isSuccess: true,
        isError: false,
        customer, //include fetched customers in state
    })
);
export const createCustomerError = createAction<ICustomerStateContext>(
    CustomerActionEnums.getCustomerError, () => ({isPending: false, isSuccess: false, isError: true})
);

export const updateCustomerPending = createAction<ICustomerStateContext>(
    CustomerActionEnums.updateCustomerPending, 
    () => ({isPending: true, isSuccess: false, isError: false})
)
export const updateCustomerSuccess = createAction<ICustomerStateContext>(
    CustomerActionEnums.updateCustomerSuccess, 
    () => ({isPending: false, isSuccess: true, isError: false})
)
export const updateCustomerError = createAction<ICustomerStateContext>(
    CustomerActionEnums.updateCustomerError, 
    () => ({isPending: false, isSuccess: false, isError: true})
)


export const deleteCustomerPending = createAction<ICustomerStateContext>(
    CustomerActionEnums.deleteCustomerPending, 
    () => ({isPending: true, isSuccess: false, isError: false})
)
export const deleteCustomerSuccess = createAction<
ICustomerStateContext, 
ICustomer>(
    CustomerActionEnums.deleteCustomerSuccess, 
    (customer: ICustomer) => ({
        isPending: false, isSuccess: true, isError: false, customer})
)
export const deleteCustomerError = createAction<ICustomerStateContext>(
    CustomerActionEnums.deleteCustomerError, 
    () => ({isPending: false, isSuccess: false, isError: true})
)
