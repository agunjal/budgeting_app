import React from "react";

function MonthlyIncome(props) {
  return (
    <aside>
      <h2>Monthly Income</h2>
      <div>
        <input
          type="number"
          name="monthly_income"
          onChange={props.onChangeIncome}
        />
      </div>
      <h3>Unbudgeted</h3>
      <p>{props.unbudgetAmount}</p>
    </aside>
  );
}

export default MonthlyIncome;
