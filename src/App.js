import Expenses from "./components/Expenses";
import React from 'react'

const App = ()=> {
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
    <React.Fragment>
    <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </React.Fragment>
  );
}

export default App;


