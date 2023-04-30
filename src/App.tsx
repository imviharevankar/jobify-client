import { Routes, Route } from 'react-router-dom';
import './App.css';
import "./scss/flex.scss";
import "./scss/fonts.scss";
import "./scss/sizes.scss";
import "./scss/padding.scss";
import "./scss/margin.scss";
import "./scss/hover.scss";
import "./scss/border.scss";
import "./scss/colors.scss";
import "./scss/table.scss";
import "./global.scss";
import "./scss/modal.scss";
import CommonLayout from './layout/CommonLayout';
import { IRoutes, routes } from './routes/routes';
import ProtectedRoute from './routes/ProtectedRoute';
import { Suspense } from 'react';
import CustomSpinner from './components/custom/CustomSpinner';
import MessageModal from './components/modals/MessageModal';
import { useData } from './context/DataContext';
import { resources } from './util/resources';
import { DataActionKeys } from './context/type/dataContext';
import { SUCCESS } from './util/constants';
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";

function App() {
  const { dataState, dataDispatcher } = useData();

  const handleMessageModal = (): void => {
    dataDispatcher({ type: DataActionKeys.MESSAGE_MODAL, payload: false })
  }

  return (
    <>
      <MessageModal
        open={true}
        okCancel={handleMessageModal}
        message={dataState.message}
        btnText={resources?.ok}
        btnAction={handleMessageModal}
        icon={
          dataState.apiStatus === SUCCESS
            ? <CheckCircleOutlined className='fs_80' />
            : <WarningOutlined className='fs_80' />
        }
      />
      <Suspense fallback={
        <CustomSpinner />
      } >
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
      </Suspense>
    </>
  );
}

export default App
