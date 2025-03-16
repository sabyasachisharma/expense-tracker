import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "../components/transaction";
import { useNavigate } from "react-router-dom";

const AllTransactions = () => {
    const { transactions } = useContext(GlobalContext);
    const navigate = useNavigate();
    return (
        <div>
            <h1>All Transactions</h1>
            <ul className="list">
                { transactions.length > 0 ? (
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                ) : (
                    <li>No transactions</li>
                )}
            </ul>
            <button className="btn" onClick={() => navigate("/dashboard")}>Go back</button>
        </div>
    )
}

export default AllTransactions