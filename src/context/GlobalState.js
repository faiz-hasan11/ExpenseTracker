import React , {createContext , useReducer} from "react"
import AppReducer from "./AppReducer"
const initialState = {
    transactions: [
        {id:0 , text:"Food" , amount:-250},
        {id:1 ,text:"Clothes" , amount:-250},
        {id:2 ,text:"ATM" , amount:100},
        {id:3 ,text:"Bank" , amount:700}
    ]
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => 
{
    const [state,dispatch] = useReducer(AppReducer , initialState)

    function deleteTransaction(id)
    {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })        
    }
    function addTransaction(transaction)
    {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })        
    }


    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}