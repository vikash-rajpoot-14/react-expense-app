import React from 'react'
import "./ExpenseItem.css"

function ExpenseItem() {
    let date = new Date(25,1,2023)
    console.log(date)
    let carname = "Honda";
    let price = 29.5;
    let LocationOfExpenditure  = "GOA"
    return (
        <div>
            <div className="expense-item">
                <div>{carname}</div>
                <div className="expense-item__description">
                    <h2>{date.toISOString()}</h2>
                    <div style={{color:'white'}}>{LocationOfExpenditure}</div>
                    <div className="expense-item__price">${price}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem
