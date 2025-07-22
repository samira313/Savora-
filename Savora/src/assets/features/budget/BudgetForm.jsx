import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBudget } from "./budgetSlice";


function BudgetForm() {
const dispatch = useDispatch();    
const [amount, setAmount] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(setBudget(Number(amount))); //send amount to Redux
    setAmount("");

}


return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="budget">Set your budget:</label>
        <input 
        type="number"
        id="budget"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="e.g 500"
        required
        />
        <button type="submit">Save Budget</button>
    </form>

);
}

export default BudgetForm;