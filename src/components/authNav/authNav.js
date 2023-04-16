import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div style={{ display:'flex', gap:'40px'}}>
      <NavLink style={{textDecoration:'none', color:'blue'}} to="/register">
        Register
      </NavLink>
      <NavLink style={{textDecoration:'none', color:'blue'}} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
