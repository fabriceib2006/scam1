import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../services/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = authService.getCurrentUser();
        if (!currentUser) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
