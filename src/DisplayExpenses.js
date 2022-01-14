import React from "react";

function DisplayExpenses(props) {
  const elementList = [];

  props.expensesList.map((item, index, array) => {
    const name = item.name;
    const amount = item.amount;
    elementList.push(
      <div className="display-entry" key={index}>
        <span>{name}</span>
        <span>{amount}</span>
        <button type="button" onClick={() => props.deleteEntry(name, amount)}>
          X
        </button>
      </div>
    );
    return elementList;
  });

  return <div className="display-entries">{elementList}</div>;
}

export default DisplayExpenses;
