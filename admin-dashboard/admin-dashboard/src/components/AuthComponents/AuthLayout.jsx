import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/auth-selectors'; // Adjust the path

const AuthLayout = () => {
  

  const user = useSelector(selectUser);
  console.log(user);
  // Check if the user is authenticated with both token and type
  if (user.token) {
    // Redirect to the dashboard or another authenticated route
    return <Navigate to="/dashboards" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
