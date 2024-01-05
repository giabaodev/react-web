import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import Main from './pages/Layouts/Main';
import { privateRoutes, publicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {publicRoutes.map((puRoute, index) => (
          <Route key={index} path={puRoute.path} element={<puRoute.element />} />
        ))}
        <Route element={<ProtectedRoute />}>
          <Route path="admin" element={<Main />}>
            {privateRoutes.map((prRoute, index) => {
              return <Route key={index} path={prRoute.path} element={<prRoute.element />} />;
            })}
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
