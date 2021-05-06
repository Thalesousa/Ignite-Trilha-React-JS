import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import style from '../styles/global.module.css';

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent){
    event.preventDefault()
    const data = {
      email, 
      password,
    }

    await signIn(data);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  )
}