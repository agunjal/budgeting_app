import React from "react";

function MonthlyExpenses(props) {
  return (
    <form onSubmit={props.submitExpenses}>
      <div className="line-field">
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div className="line-field">
        <input type="number" name="amount" placeholder="Amount" />
      </div>
      <button type="submit" name="Add" value="Add">
        + Add
      </button>
    </form>
  );
}

export default MonthlyExpenses;
