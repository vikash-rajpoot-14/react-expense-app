import React, { useState } from 'react'
import "../UI/Card.css"
import Card from '../UI/Card'
import "./ExpenseItem.css"

function ExpenseForm({ toggle, setToggle, newExpense }) {
    const [userInput, setUserInput] = useState({ title: "", amount: "", location: "", date: "" })

    const titleHandler = (e) => {
        setUserInput((prev) => { return { ...prev, title: e.target.value } })
    }

    const dateHandler = (e) => {
        setUserInput((prev) => { return { ...prev, date: e.target.value} })
    }
    const locationHandler = (e) => {
        setUserInput((prev) => { return { ...prev, location: e.target.value } })
    }
    const amountHandler = (e) => {
        setUserInput((prev) => { return { ...prev, amount: e.target.value } })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let expense = {
            id: Math.random().toFixed(3) * 1000 + "",
            ...userInput
        }
        newExpense(expense)
        toggleHandler()
        setUserInput({ title: "", amount: "", location: "", date: "" })

    }
   
    const toggleHandler = ()=>{
        setToggle(!toggle)
    }

    return (
        <React.Fragment>
            {toggle ? (
                <div><div className='formchild'>
                    <button onClick={()=> toggleHandler()} type="submit">Add New Expense</button>
                </div></div>
            ) : (
                <Card className="form">
                    <div className='formparent'>
                        <div className='formchild'>
                            <label>Title</label>
                            <input value={userInput.title} onChange={titleHandler} name='title' type="text" />
                        </div>
                        <div className='formchild'>
                            <label>Amount</label>
                            <input value={userInput.amount} onChange={amountHandler} name='amount' type="text" />
                        </div>

                        <div className='formchild'>
                            <label>Location</label>
                            <input value={userInput.location} onChange={locationHandler} name='location' type="text" />
                        </div>
                        <div className='formchild'>
                            <label>Date</label>
                            <input value={userInput.date} onChange={dateHandler} name='date' type="date" />
                        </div>
                        <div className='formchild'>
                            <button onClick={()=> toggleHandler()}>Cancel</button>
                            <button onClick={e => submitHandler(e)} type="submit">Add Expense</button>
                        </div>
                    </div>
                </Card>
            )}
        </React.Fragment>

    )
}

export default ExpenseForm
