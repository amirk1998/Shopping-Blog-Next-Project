import axios from 'axios';
import { createContext, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useReducerAsync } from 'use-reducer-async';

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN_PENDING':
      return { user: null, loading: true, error: null };
    case 'SIGNIN_SUCCESS':
      return { user: action.payload, loading: false, error: null };
    case 'SIGNIN_REJECT':
      return { user: null, loading: false, error: action.error };
    default: {
      return { ...state };
    }
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: 'SIGNIN_PENDING' });
      axios
        .post('http://localhost:5000/api/user/signin', action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success('با موفقیت وارد شدید', {
            id: 'signin-toast-id',
          });
          //
          dispatch({ type: 'SIGNIN_SUCCESS', payload: data });
          console.log(data);
        })
        .catch((error) => {
          dispatch({
            type: 'SIGNIN_REJECT',
            error: error?.response?.data?.message,
          });
          toast.error(error?.response?.data?.message, {
            id: 'signin-toast-id',
          });
        });
    },
  //
  SIGNUP: {},
  //
  SIGNOUT: {},
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

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
