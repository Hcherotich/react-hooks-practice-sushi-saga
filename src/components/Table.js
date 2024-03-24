import React from "react";

function Table({ plates = [], budget }) {
  // Calculate the total cost of the eaten sushi
  const totalCost = plates.reduce((total, plate) => total + plate.price, 0);
  // Calculate the remaining budget
  const remainingBudget = budget - totalCost;

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${remainingBudget} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
