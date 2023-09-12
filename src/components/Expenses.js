import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"

const Expenses=({expenses})=> {
  const [expense,setExpense] = useState(expenses)
   
  return (
    <Card className="expenses">
      <ul>{expense.map((expense,index)=><ExpenseItem deleteHandler={setExpense} array={expenses} key={expense.id} id={expense.id} location={expense.location} date={expense.date} title={expense.title} amount={expense.amount} />)}</ul>
  </Card>
  )
}

export default Expenses
