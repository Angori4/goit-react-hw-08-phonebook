import { Input, Button, FormLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form style={{padding:'50px', display:'flex', gap:'20px'}} onSubmit={handleSubmit} autoComplete="off">
      <FormLabel >
        Email
        <Input style={{paddingLeft:'12px'}} type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input style={{paddingLeft:'12px'}} type="password" name="password" />
      </FormLabel>
      <Button type="submit">Log In</Button>
    </form>
  );
};
