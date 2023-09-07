import React, { useState } from 'react'

const ExpenseDetails = ({id,deleteHandler, array, title, amount, location }) => {
    const [titles, setTitle] = useState(title)

    const DeleteHandler = () => {
        array = array.filter(ele=>ele.id !== id)
        setTitle("updated")
        deleteHandler(array)
      
    }

    return (
        <React.Fragment>
            <div className="expense-item__description">
                <h2>{titles}</h2>
                <div>{location}</div>
                <div className="expense-item__price">${amount}</div>
                <button onClick={(e)=>DeleteHandler()}>change title</button>
            </div>
        </React.Fragment>
    )
}

export default ExpenseDetails
