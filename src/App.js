import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import React from 'react'

const App = ()=> {
  const expenses = [
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
  
 const AddExpenseTOArray=(expense)=>{
    expenses.push(expense)
  }
  const AddNewExpense = (expense)=>{
    console.log(expense);
    AddExpenseTOArray(expense)
    console.log(expenses)
}

  return (
    <React.Fragment>
    <h2>Let's get started!</h2>
      <ExpenseForm newExpense={AddNewExpense}/>
      <Expenses expenses={expenses} />
    </React.Fragment>
  );
}

export default App;


