import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction}) => {
    const { deleteTransactions } = useContext(GlobalContext);
    return (
        <li className={ transaction.amount < 0 ? "minus" : "plus"}>
        <span className="transaction-text">{transaction.text}</span>
        <span className="transaction-amount">{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransactions(transaction.id)}>x</button>
    </li>

    )
}

export default Transaction