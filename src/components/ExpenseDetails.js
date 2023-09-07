import React, { useState } from 'react'

const ExpenseDetails = ({id,deleteHandler, array, title, amount, location }) => {
    const [amounts, setAmount] = useState(amount)
    // console.log(titles)
    const AddExpense = () => {
        // array = array.filter(ele=>ele.id !== id)
        // setTitle("updated")
        // deleteHandler(array)
        // console.log("after",titles)
        setAmount(100)
      
    }

    return (
        <React.Fragment>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div>{location}</div>
                <div className="expense-item__price">${amounts}</div>
                <button onClick={(e)=>AddExpense()}>change title</button>
            </div>
        </React.Fragment>
    )
}

export default ExpenseDetails
