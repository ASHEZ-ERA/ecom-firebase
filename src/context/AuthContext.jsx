import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, loading: false, error: null };

    case "LOGOUT":
      return { ...state, user: null, loading: false, error: null };

    case "LOADING":
      return { ...state, loading: true, error: null };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      dispatch({ type: "LOADING" });
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
      throw error
    }
  };

  const signup = async(email,password) =>{
    try{
        dispatch({type: "LOADING"})
        await createUserWithEmailAndPassword(auth, email,password)

    }catch(error){
        dispatch({type:"ERROR", payload: error.message})
        throw error

    }
  }

  const logout = async() => {
    try {
        dispatch({type: "LOADING"})
        await auth.signOut()
    }catch(error){
        dispatch({type: "ERROR", payload: error.message})
        throw error
    }
  }
  return (
    <AuthContext.Provider value={{...state, login, signup, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContext)
}
