import { useSelector } from 'react-redux';
import { selectTotalExpenses } from "./assets/features/expenses/expenseSlice";
import './styles/AppStyles.css';
import BudgetForm from './assets/features/budget/budgetForm';
import BudgetList from './assets/features/budget/BudgetList';
import ExpenseForm from './assets/features/expenses/ExpenseForm';
import ExpenseList from './assets/features/expenses/ExpenseList';

function App() {
 const budget = useSelector((state) => state.budget.amount);

  const totalExpenses = useSelector(selectTotalExpenses);
  const remaining = Number(budget) - Number(totalExpenses);

  return (
    <div className='App'>
      <h1>Savora Budget Tracker</h1>
      <BudgetForm />
      <BudgetList />
      <ExpenseForm />
      <ExpenseList />
      <p>Your budget is: €{budget}</p>
<p>Total expenses: €{totalExpenses}</p>
<p>Remaining budget: €{remaining}</p>

    </div>
  )
}

export default App
