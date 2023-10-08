import React from 'react'

function ExpenseFilter({ selected, onChangefilter }) {
    
    function handleYearChange(event) {
        const selectedYear = event.target.value;
        onChangefilter(selectedYear);
      }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", margin: "10px" }}>
            <div>
                Year
            </div>
            <div>
                <select id="year" value={selected} onChange={handleYearChange}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
