import { createContext, useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useReducerAsync } from 'use-reducer-async';
import Router from 'next/router';
import http from '@/services/httpService';

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_PENDING':
      return { user: null, loading: true, error: null };
    case 'ACTION_SUCCESS':
      return { user: action.payload, loading: false, error: null };
    case 'ACTION_REJECT':
      return { user: null, loading: false, error: action.error };
    default: {
      return { ...state };
    }
  }
};

const asyncActionHandlers = {
  // SIGN In
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: 'ACTION_PENDING' });
      http
        .post('/user/signin', action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success('با موفقیت وارد شدید', {
            id: 'signin-toast-id',
          });
          dispatch({ type: 'ACTION_SUCCESS', payload: data });
          Router.push('/');
        })
        .catch((error) => {
          dispatch({
            type: 'ACTION_REJECT',
            error: error?.response?.data?.message,
          });
          toast.error(error?.response?.data?.message, {
            id: 'signin-toast-id',
          });
        });
    },
  // SIGN Up
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: 'ACTION_PENDING' });
      http
        .post('/user/signup', action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success('با موفقیت وارد شدید', {
            id: 'signup-toast-id',
          });

          dispatch({ type: 'ACTION_SUCCESS', payload: data });
          Router.push('/');
        })
        .catch((error) => {
          dispatch({
            type: 'ACTION_REJECT',
            error: error?.response?.data?.message,
          });
          toast.error(error?.response?.data?.message, {
            id: 'signup-toast-id',
          });
        });
    },
  // Load User
  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: 'ACTION_PENDING' });
      http
        .get('/user/load', {
          withCredentials: true,
        })
        .then(({ data }) => {
          dispatch({ type: 'ACTION_SUCCESS', payload: data });
        })
        .catch((error) => {
          dispatch({
            type: 'ACTION_REJECT',
            error: error?.response?.data?.message,
          });
        });
    },

  // SIGN Out
  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      http
        .get('/user/logout', {
          withCredentials: true,
        })
        .then(({ data }) => {
          window.location.href = '/';
        })
        .catch((error) => {
          dispatch({
            type: 'ACTION_REJECT',
            error: error?.response?.data?.message,
          });
        });
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({ type: 'LOAD_USER' });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
