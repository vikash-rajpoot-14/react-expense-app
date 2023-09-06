import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"

const Expenses=()=> {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
          location: "US"
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location : "England" },
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
  return (
    <Card className="expenses">
    <ExpenseItem location={expenses[0].location} date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
    <ExpenseItem location={expenses[1].location} date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
    <ExpenseItem location={expenses[2].location} date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
    <ExpenseItem location={expenses[3].location} date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />
  </Card>
  )
}

export default Expenses
