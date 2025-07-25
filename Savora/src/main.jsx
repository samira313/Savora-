import React  from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { store } from './store.js';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
