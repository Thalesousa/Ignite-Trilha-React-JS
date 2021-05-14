import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import Router from 'next/router';

type User = {
  email: string;
  permission: string[];
  roles: string[];
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User,
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  
  const isAuthenticated = !!user;

  async function signIn({ email, password}: SignInCredentials){
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })

      const { token, refreshToken , permission, roles} = response.data;

      setUser({
        email,
        permission,
        roles,
      })

      Router.push('/dashboard');
  
    }catch (err){
      console.log(err);
    }
  }

  return(
    <AuthContext.Provider value={{ signIn, isAuthenticated, user}}>
      {children}
    </AuthContext.Provider>
  )
}