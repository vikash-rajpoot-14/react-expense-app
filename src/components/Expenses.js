import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  const [selectedyear, setSelectedYear] = useState("2020");
  const selectedyearHandler = (selectedyear) => {
    setSelectedYear(selectedyear)
  }
  const filteredExpense = expenses.filter((ele) => ele.date.getFullYear().toString() === selectedyear)
  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedyear} onChangefilter={selectedyearHandler}  />
      <ul>{filteredExpense.map((expense) => <ExpenseItem key={expense.id} location={expense.location} date={expense.date} title={expense.title} amount={expense.amount} />)}</ul>
    </Card>
  )
}

export default Expenses
