import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex', gap: '40px' , alignItems:'center'}}>
      <p >Welcome,   <span style={{fontSize:'24px'}}>{user.name}</span> </p>
      <Button variant="outlined" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
