import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './restrictedRoute';
import { useEffect, lazy } from "react";
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { PrivateRoute } from './privateRoute';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './layout';


const RegisterPage = lazy(() => import('../pages/registredPage'));
const LoginPage = lazy(() => import('../pages/loginPage'));
const Contacts = lazy(() => import('../pages/contacts'));

export default function App() {

  const dispatch = useDispatch();
   const { isRefreshing } = useAuth();


    useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


    return isRefreshing ? (
    <b>Refreshing user...</b>
    ) : (
        <Routes>
                <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
            />
            </Route>
    </Routes>
    )
  }


