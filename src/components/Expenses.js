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
      <ExpenseFilter selected={selectedyear} onChangefilter={selectedyearHandler} />
      {filteredExpense.length > 1 ? (
        <ul>{filteredExpense.map((expense) => <ExpenseItem key={expense.id} location={expense.location} date={expense.date} title={expense.title} amount={expense.amount} />)}</ul>
      ) : (
        filteredExpense.length === 1 ? (<>
          <div className='text'>"Only single Expense here. Please add more..."</div>
          <ul>{filteredExpense.map((expense) => <ExpenseItem key={expense.id} location={expense.location} date={expense.date} title={expense.title} amount={expense.amount} />)}</ul>
        </>
        ) : (<div className='text'>"Please add new Expense..."</div>)
      )}
    </Card>
  )
}

export default Expenses
