import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, { 
        transactions: []});

    // Actions
    function deleteTransactions(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch ({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}