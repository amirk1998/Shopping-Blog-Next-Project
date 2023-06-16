import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'signin': {
      axios
        .post('http://localhost:5000/api/user/signin', action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success('با موفقیت وارد شدید', {
            id: 'my-unique-toast-id',
          });
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error?.response?.data?.message);
          toast.error(error?.response?.data?.message, {
            id: 'my-unique-toast-id',
          });
        });
    }
    default: {
      return { ...state };
    }
  }
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initialState);

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
