import { Routes, Route } from 'react-router-dom';
import './App.css'
import CommonLayout from './layout/CommonLayout';
import { IRoutes, routes } from './routes/routes';

function App() {

  return (
    <Routes>
      {
        routes.map((item: IRoutes) => (
          <Route
            key={item.path}
            path={item.path}
            element={<CommonLayout child={< item.element />} />}
          />
        ))
      }
    </Routes>
  );
}

export default App
