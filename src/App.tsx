import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import "./scss/flex.scss";
import "./scss/fonts.scss";
import "./scss/sizes.scss";
import "./scss/padding.scss";
import "./scss/margin.scss";
import "./scss/hover.scss";
import "./scss/border.scss";
import "./scss/colors.scss";
import "./global.scss";
import CommonLayout from './layout/CommonLayout';
import { IRoutes, routes } from './routes/routes';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  return (
    <Routes>
      {
        routes.map((route: IRoutes) => (
          route.isPrivate
            ? (
              <Route element={<ProtectedRoute />}>
                <Route
                  path={route.path}
                  element={<CommonLayout child={< route.element />} />}
                />
              </Route>
            )
            : <Route
              path={route.path}
              element={<CommonLayout child={< route.element />} />}
            />
        ))
      }
    </Routes>
  );
}

export default App
