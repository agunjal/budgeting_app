import React from "react";

function MonthlyExpenses() {
  return (
    <section>
      <form>
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
    </section>
  );
}

export default MonthlyExpenses;
