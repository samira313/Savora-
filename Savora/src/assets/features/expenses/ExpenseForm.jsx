import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "./expenseSlice";

function ExpenseForm({ editingExpense, setEditingExpense }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(editingExpense?.category || "Food");

   
    useEffect(() => {
        if (editingExpense) {
            setTitle(editingExpense.title);
            setAmount(editingExpense.amount);
        }
    }, [editingExpense]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    if (!title.trim() || !amount) {
            alert("Please enter title and amount");
            return;
          }

      
        if (editingExpense) {
            dispatch(editExpense({ id: editingExpense.id, title, amount: Number(amount), category}));
            setEditingExpense(null);
        } else {
            dispatch(addExpense({
                id: Date.now(),
                title,
                amount: Number(amount),
                category
            }));
        }

        setTitle("");
        setAmount("");
        setCategory("Food")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Expense Title:
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            {/* {dropdown} */}
            <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            >
              <option value="Food">Food</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </select>
          
            <label>
                Amount:
                <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </label>
            <button type="submit">
                {editingExpense ? "Update Expense" : "Add Expense"}
            </button>
        </form>
    );
}

export default ExpenseForm;
