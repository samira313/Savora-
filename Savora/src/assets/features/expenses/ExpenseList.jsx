import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteExpense } from "./expenseSlice";
function ExpenseList({ setEditingExpense }) {
    const expenses = useSelector((state) => state.expenses.items);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    
    // Save the search term to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem("searchTerm", searchTerm);
    }, [searchTerm]);

    // Load the saved search term from local storage when the component mounts
    useEffect(() => {
      const saved = localStorage.getItem("searchTerm");
      if (saved) setSearchTerm(saved);
    }, [])

    useEffect(() => {
      localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])
    
   console.log(JSON.stringify(expenses, null, 2))
    const filteredExpenses = expenses.filter(
  (expense) =>
    expense.title &&
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
);


    return (
        <div>
          <input
          type="text"
          placeholder="Search..."
           value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "5px", marginBottom: "10px", width: "100%"}}
          />
            <h3>Expenses</h3> 
            <ul>
                {filteredExpenses.map((expense) => 
                <li key={expense.id}>
                    {expense.title} - €{expense.amount}
                    <button onClick={() => setEditingExpense(expense)}>✏️</button>
                    <button onClick={() => dispatch(deleteExpense(expense.id))}>❌</button>
                    
                </li>
            )}
            </ul>
        </div>
    )

}

export default ExpenseList;