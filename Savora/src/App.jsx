import './App.css'
import BudgetForm from './assets/features/budget/budgetForm'
import BudgetList from './assets/features/budget/BudgetList'

function App() {
 

  return (
    <div className='App'>
      <h1>Savora Budget Tracker</h1>
      <BudgetForm />
      <BudgetList />
    </div>
  )
}

export default App
