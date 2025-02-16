import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [errorText, setErrorText] = useState('');
    const [errorAmount, setErrorAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);

    }

    const handleTextChange = (e) => {
        const value = e.target.value;

        if (/[^0-9]/.test(value) || value === "") {
            setText(value);
            setErrorText("")
        }
        else {
            setErrorText("Please enter a valid text")
        }
    }

    const handleAmountChange = (e) => {
        const value = e.target.value;
    
        // Regular expression to allow only numbers, negative sign (-), and decimals (.)
        if (/^-?\d*\.?\d*$/.test(value)) {
            setAmount(value);
            setErrorAmount(""); // Clear error if valid
        }
    };    

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text..." />
                    { errorText && <p style={{ color: "red" }}>{errorText}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount..." />
                    {errorAmount && <p style={{ color: "red" }}>{errorAmount}</p>}
                </div>
                <button className="btn" onClick={onSubmit}>Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;