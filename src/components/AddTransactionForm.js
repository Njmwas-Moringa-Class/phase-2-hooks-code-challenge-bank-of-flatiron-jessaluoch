import React from "react";
import { validateForm } from "./Extra";

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  })
  function handleSubmit(e){
    e.preventDefault();

    const formInput = validateForm(formData)

    if(formInput.containsEmptyInput){
      alert("Please fill in all inputs")
    }else if(!formInput.isInvalid){
  
      fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => newData(data))
      alert('Transaction Added successfully')
    }
    setFormData("")
    }
  
  function handleChange(e){
    e.preventDefault();
    const key = e.target.name
    const value = e.target.value;
    setFormData({...formData, [key]: value})
  }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
