import React from 'react'

const ExpenseDetails=({title,amount , location})=> {
    return (
        <React.Fragment>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div>{location}</div>
                <div className="expense-item__price">${amount}</div>
            </div>
        </React.Fragment>
    )
}

export default ExpenseDetails
