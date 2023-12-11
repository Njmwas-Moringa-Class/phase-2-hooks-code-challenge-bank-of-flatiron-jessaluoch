import React, { useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [ search, setSearch] = useState(""); 
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((r) => r.json())
      .then((data) => setTransactions(data)) 
  }, [])

  function updatedTransactions(newTransactions) {
   const updatedTransactionsArray = [...transactions, newTransactions]
   setTransactions(updatedTransactionsArray)
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm newData={updatedTransactions} />
      <TransactionsList transactions={transactions} setTransactions={setTransactions} search={search} />
    </div>
  );
}


export default AccountContainer;