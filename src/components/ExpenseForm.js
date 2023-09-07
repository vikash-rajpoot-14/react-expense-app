import React, { useState } from 'react'
import "../UI/Card.css"
import Card from '../UI/Card'
import "./ExpenseItem.css"

function ExpenseForm() {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [formData, setFormdata] = useState([])

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    const locationHandler = (e) => {
        setLocation(e.target.value)
    }
    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let obj = {
            title, date, amount, location
        }
        console.log(obj)
        console.log(formData)
        setFormdata([...formData,obj])
    }


    return (
        <Card className="form">
            <div className='formparent'>
                <div className='formchild'>
                    <label>Title</label>
                    <input value={title} onChange={(e) => titleHandler(e)} name='title' type="text" />
                </div>
                <div className='formchild'>
                    <label>Amount</label>
                    <input value={amount} onChange={(e) => amountHandler(e)} name='amount' type="text" />
                </div>

                <div className='formchild'>
                    <label>Location</label>
                    <input value={location} onChange={(e) => locationHandler(e)} name='location' type="text" />
                </div>
                <div className='formchild'>
                    <label>Date</label>
                    <input value={date} onChange={(e) => dateHandler(e)} name='date' type="date" />
                </div>
                <div className='formchild'>
                    <button onClick={e => submitHandler(e)} type="submit">submit</button>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseForm
