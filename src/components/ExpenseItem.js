import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import "../UI/Card.css"
import ExpenseDetails from './ExpenseDetails'


const ExpenseItem = ({id, array, deleteHandler, title, amount, date, location }) =>{
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <ExpenseDetails id={id} deleteHandler={deleteHandler} array={array} amount={amount} location={location} title={title} />
        </Card>
    )
}

export default ExpenseItem
