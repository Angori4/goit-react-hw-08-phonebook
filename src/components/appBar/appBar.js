// import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/userMenu/userMenu';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
