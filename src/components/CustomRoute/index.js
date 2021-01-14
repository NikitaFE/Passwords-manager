import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const CustomRoute = props => {
  const { user, type } = props;

  if (user && type === 'guest') return <Redirect to='/dashboard' />;
  else if (!user && type === 'private') return <Redirect to='/login' />;
  
  return <Route {...props} />;
};

export default CustomRoute;
