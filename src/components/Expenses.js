import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"

const Expenses=({expenses})=> {
  const [expense,setExpense] = useState(expenses)
   
  return (
    <Card className="expenses">
      <ul>{expense.map((expense,index)=><ExpenseItem deleteHandler={setExpense} array={expenses} key={expense.id} id={expense.id} location={expense.location} date={expense.date} title={expense.title} amount={expense.amount} />)}</ul>
    {/* <ExpenseItem location={expenses[0].location} date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} /> */}
    {/* <ExpenseItem location={expenses[1].location} date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} /> */}
    {/* <ExpenseItem location={expenses[2].location} date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} /> */}
    {/* <ExpenseItem location={expenses[3].location} date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} /> */}
  </Card>
  )
}

export default Expenses
