import { getAxiosInstance } from "@/app/utils/axiosInstance";
import { INITIAL_STATE, ICustomer, CustomerActionContext, CustomerStateContext } from "./context";
import { CustomerReducer } from "./reducer";
import { useContext, useReducer } from "react";
import axios from "axios";
import { getCustomersError, getCustomersPending, getCustomersSuccess, getCustomerError, getCustomerPending, getCustomerSuccess, createCustomerPending, createCustomerSuccess, createCustomerError, updateCustomerPending, updateCustomerSuccess,updateCustomerError, deleteCustomerPending, deleteCustomerSuccess, deleteCustomerError } from "./action";

export const CustomerProvider = ({children} : {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(CustomerReducer, INITIAL_STATE);
    const instance = getAxiosInstance();

    const getCustomers =   async() => {
        dispatch(getCustomersPending());
        const endpoint = `https://fakestoreapi.com/customers`;
        await axios(endpoint)
        .then
    }
}