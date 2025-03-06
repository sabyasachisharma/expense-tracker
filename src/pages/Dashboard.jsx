import React from 'react';
import "../App.css";
import Header from "../components/Header"
import Balance from '../components/Balance';
import { GlobalProvider } from '../context/GlobalState';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

function Dashboard() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default Dashboard;   
