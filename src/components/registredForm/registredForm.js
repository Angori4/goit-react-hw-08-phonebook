import { FormLabel, Input,Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '50px' }} onSubmit={handleSubmit} autoComplete="off">
      <FormLabel >
        Username
        <Input style={{paddingLeft:'12px'}}type="text" name="name" />
      </FormLabel>
      <FormLabel >
        Email
        <Input style={{paddingLeft:'12px'}} type="email" name="email" />
      </FormLabel>
      <FormLabel >
        Password
        <Input style={{paddingLeft:'12px'}} type="password" name="password" />
      </FormLabel>
      <Button style={{width:'120px'}} variant="contained" type='sumbit'>Register</Button>
    </form>
  );
};
