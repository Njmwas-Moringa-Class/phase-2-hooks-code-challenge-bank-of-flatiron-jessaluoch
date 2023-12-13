import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {

  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8001/transactions");

        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []); 

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {/* Pass the transactions data to the AccountContainer component */}
      <AccountContainer transactions={transactions} />
    </div>
  );
}

export default App;