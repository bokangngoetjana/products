import {createContext} from 'react'

export interface ICustomer{
 id: number;
 title: string;
 price: number;
 description: string;
 category: string;
 image: string;
}
export interface ICustomerStateContext{
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    customer?: ICustomer; //single customer of type interface ICustomer
    customers?: ICustomer[]; //array of customers
}
export interface ICustomerActionContext {
    getCustomers: () => void;
    getCustomer: (id: number) => void;
    createCustomer: (customer: ICustomer) => void;
    updateCustomer: (customer: ICustomer) => void;
    deleteCustomer: (id: number) => void;
}
export const INITIAL_STATE: ICustomerStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false
}
export const CustomerStateContext = createContext<ICustomerStateContext>(INITIAL_STATE);

//holds the methods to interact with customers
export const CustomerActionContext = createContext<ICustomerActionContext>({
    //created using co-pilot instead of undefined
    getCustomers: () => {},
    getCustomer: (_id: number) => {},
    createCustomer: (_customer: ICustomer) => {},
    updateCustomer: (_customer: ICustomer) => {},
    deleteCustomer: (_id: number) => {},
});