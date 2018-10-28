import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const User = createContext();

const initialState = {
  auth: false,
  user: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "authorize":
      return { ...state, auth: true, user: action.payload.user };
    case "logout":
      return initialState;
    default:
      return state;
  }
};

let userInit;

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, initialState);
  const value = { user, dispatch };

  if (!userInit) {
      const token = localStorage.getItem('token');
      const promise = axios.get(`${process.env.REACT_APP_ENDPOINT}/check_auth`, { headers: { authorization: token } })
        .then(res => {
          throw dispatch({type: "authorize", payload: res.data.user});
        });
      userInit = true;
      throw promise;
  }
  return <User.Provider value={value}>{children}</User.Provider>;
}

const UserConsumer = User.Consumer;

export { User, UserProvider, UserConsumer };
