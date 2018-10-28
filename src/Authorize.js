import React, { useContext } from 'react';

import LogIn from './LogIn';

import { User } from './contexts/User';


export default function({children}) {
  const context = useContext(User);

  return context.auth ? children : <LogIn />;

}