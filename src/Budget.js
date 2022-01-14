import React, { Fragment, useState } from "react";
import MonthlyIncome from "./MonthlyIncome";
import MonthlyExpenses from "./MonthlyExpenses";
import DisplayExpenses from "./DisplayExpenses";
import "./Budget.css";

let intUnbudgetAmount;

function Budget() {
  const [income, setIncome] = useState("");
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

    const arrExpenses = [
      ...expenses,
      {
        name: e.target.name.value,
        amount: e.target.amount.value
      }
    ];

    setExpenses(arrExpenses);
    setUnbudgetAmount(income, arrExpenses);
  };

  const deleteExpense = (name, amount) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.name !== name
    );
    setExpenses(filteredExpenses);
    setUnbudgetAmount(income, filteredExpenses);
  };

  const onChangeIncome = (e) => {
    setIncome(e.target.value);
    setUnbudgetAmount(e.target.value, expenses);
  };

  const setUnbudgetAmount = (income, expenses) => {
    intUnbudgetAmount = expenses.reduce((unbudget, item, index, array) => {
      let amount = false === isNaN(item.amount) ? item.amount : 0;
      return unbudget - amount;
    }, income);
  };

  return (
    <Fragment>
      <header className="budget-header">
        <h1>Time to Budget</h1>
      </header>
      <main className="budget-section">
        <MonthlyIncome
          unbudgetAmount={intUnbudgetAmount}
          onChangeIncome={onChangeIncome}
        />
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
