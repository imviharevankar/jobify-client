import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import DataContextProvider from './context/DataContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </Router>
  ,
)
