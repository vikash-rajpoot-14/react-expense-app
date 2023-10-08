import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import React, { useState } from 'react'

const App = ()=> {
 
  const DUMMYEXPENSE = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "US"
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "India"

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Bangladesh"

    },
  ];
  
  const [expense,setExpense] = useState(DUMMYEXPENSE);
  const addExpenseHandler = expense=>{
    setExpense((prevExpense)=>{
      return [expense,...prevExpense]
    })
  }
  return (
    <React.Fragment>
    <h2>Let's get started!</h2>
      <ExpenseForm newExpense={addExpenseHandler}/>
      <Expenses expenses={expense} />
    </React.Fragment>
  );
}

export default App;


