import React, { Fragment, useState, useRef } from "react";
import MonthlyIncome from "./MonthlyIncome";
import MonthlyExpenses from "./MonthlyExpenses";
import DisplayExpenses from "./DisplayExpenses";
import "./Budget.css";

function Budget() {
  const [expenses, setExpenses] = useState([]);

  const submitExpenses = (e) => {
    e.preventDefault();
    if (
      undefined === e.target.name.value ||
      "" === e.target.name.value ||
      undefined === e.target.amount.value ||
      "" === e.target.amount.value
    ) {
      return;
    }

    setExpenses((expenses) => [
      ...expenses,
      {
        name: e.target.name.value,
        amount: e.target.amount.value
      }
    ]);
  };

  const deleteExpense = (name, amount) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.name !== name
    );
    setExpenses(filteredExpenses);
  };

  return (
    <Fragment>
      <header className="budget-header">
        <h1>Time to Budget</h1>
      </header>
      <main className="budget-section">
        <MonthlyIncome />
        <section>
          <MonthlyExpenses submitExpenses={submitExpenses} />
          <DisplayExpenses
            deleteEntry={deleteExpense}
            expensesList={expenses}
          />
        </section>
      </main>
      <p>Budget</p>
    </Fragment>
  );
}

export default Budget;
