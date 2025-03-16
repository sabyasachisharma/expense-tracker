import React from 'react';
import "../App.css";
import Header from "../components/Header"
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <button className="btn" onClick={() => navigate("/transactions")}>View all transactions</button>
      </div>
    </>
  );
}

export default Dashboard;   
