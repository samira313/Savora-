import { useState } from "react";


function BudgetForm() {
const [amount, setAmount] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("budget submitted" , amount);
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