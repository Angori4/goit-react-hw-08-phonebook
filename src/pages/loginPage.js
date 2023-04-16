import { Helmet,HelmetProvider } from 'react-helmet-async';
import { LoginForm } from '../components/loginForm/loginForm';

export default function Login() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
}
