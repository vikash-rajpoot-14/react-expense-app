import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import "../UI/Card.css"
import ExpenseDetails from './ExpenseDetails'


const ExpenseItem = ({ title, amount, date, location }) =>{
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <ExpenseDetails amount={amount} location={location} title={title} />
        </Card>
    )
}

export default ExpenseItem
