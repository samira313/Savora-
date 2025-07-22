import { useSelector } from "react-redux";

function BudgetList() {
    const budget = useSelector((state) => state.budget.amount);
     

    return <p>Your budget is: €{budget}</p>
}

export default BudgetList ;