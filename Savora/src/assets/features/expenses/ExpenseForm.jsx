import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "./expenseSlice";

function ExpenseForm({ editingExpense, setEditingExpense }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

   
    useEffect(() => {
        if (editingExpense) {
            setTitle(editingExpense.title);
            setAmount(editingExpense.amount);
        }
    }, [editingExpense]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingExpense) {
            dispatch(editExpense({ id: editingExpense.id, title, amount: Number(amount) }));
            setEditingExpense(null);
        } else {
            dispatch(addExpense({
                id: Date.now(),
                title,
                amount: Number(amount),
            }));
        }

        setTitle("");
        setAmount("");
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
