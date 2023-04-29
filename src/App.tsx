import { Routes, Route } from 'react-router-dom';
import './App.css';
import "./scss/flex.scss";
import "./scss/fonts.scss";
import "./scss/sizes.scss";
import "./scss/padding.scss";
import "./scss/margin.scss";
import "./scss/hover.scss";
import "./scss/border.scss";
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
