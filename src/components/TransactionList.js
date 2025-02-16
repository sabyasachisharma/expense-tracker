
import Transaction from "./transaction";
import { GlobalContext } from "../context/GlobalState";
import React, { useContext } from "react";


const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    console.log("all transactions",transactions)
    return (
        <>
            <h3>History</h3>
            <ul className = "list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionList;