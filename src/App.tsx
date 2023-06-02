import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aaa", amount: 14, category: "Utilities" },
    { id: 3, description: "aaa", amount: 20, category: "Utilities" },
  ];
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={() => console.log("asdf")}
      ></ExpenseList>
    </div>
  );
}

export default App;
