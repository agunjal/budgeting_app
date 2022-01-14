import React, { Fragment } from "react";
import MonthlyIncome from "./MonthlyIncome";
import MonthlyExpenses from "./MonthlyExpenses";
import "./Budget.css";

function Budget() {
  return (
    <Fragment>
      <header className="budget-header">
        <h1>Time to Budget</h1>
      </header>
      <main className="budget-section">
        <MonthlyIncome />
        <MonthlyExpenses />
      </main>
      <p>Budget</p>
    </Fragment>
  );
}

export default Budget;
