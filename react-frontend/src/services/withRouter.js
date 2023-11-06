import React from 'react';
import { useNavigate} from 'react-router-dom';

export const withRouter = (Component) => (props) => {
  const navigate = useNavigate();
  return <Component {...props} navigate={navigate} />;
};