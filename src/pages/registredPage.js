import { Helmet,HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '../components/registredForm/registredForm';

export default function Register() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
}
