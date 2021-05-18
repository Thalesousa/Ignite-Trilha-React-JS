import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie} from 'nookies';
import { api } from "../services/apiClient";
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

export function signOut() {
  destroyCookie(undefined, 'nextauth.token')
  destroyCookie(undefined, 'nextauth.refreshToken')

  Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/me').then(response => {
        const { email, permission, roles } = response.data

        setUser({ email, permission, roles})
      })
      .catch(() => {
        signOut()
      })
    }
  }, [])

  async function signIn({ email, password}: SignInCredentials){
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })

      const { token, refreshToken , permission, roles} = response.data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setUser({
        email,
        permission,
        roles,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

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