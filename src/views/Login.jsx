import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const [erros,setErros] = useState([]);
  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
  });

  const handleLogin = async e => {
    e.preventDefault();

    const dados = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    login(dados, setErros)
 
  }
  return (
    <>
      <h1 className="text-2xl text-center">Login</h1>
      <p className="text-sm text-center">Informe as suas cred&ecirc;ciais</p>

      <div className="bg-white shadow-md rounded-md mt10 px-5 py-10">
        <form  
          autoComplete="OFF"
          noValidate
          onSubmit={handleLogin}
        >
          
          {erros ? erros.map( (erro, i)=><Alerta key={i}>{erro}</Alerta>) : null}
            <div className="mb-4">
                <label 
                    htmlFor="email"
                    className="text-slate-800"
                >Email</label>
                <input 
                    type="email" 
                    className="mt-2 w-full p-3 bg-gray-50 border rounded"
                    id="email"
                    name="email"
                    placeholder="Ex: amikelmaxi@email.com"
                    ref={emailRef}
                />
            </div>

            <div className="mb-4">
                <label 
                    htmlFor="password"
                    className="text-slate-800"
                >Senha</label>
                <input 
                    type="password" 
                    className="mt-2 w-full p-3 bg-gray-50 border rounded"
                    id="password"
                    name="password"
                    placeholder="Ex: ******"
                    ref={passwordRef}
                />
            </div>

            <input 
                type="submit" 
                value="Acessar sua conta"
                className="mt-8 bg-slate-800 cursor-pointer hover:bg-slate-600 uppercase w-full p-4 text-slate-400 rounded-lg"
            />
        </form>
      </div>

      <nav className="mt-5 text-slate-600 flex justify-between">
        <Link to="/auth/registro">
            N&atilde;o tem conta? Cria uma
        </Link>

        <Link to="/auth/recuperar">
            Esqueceu a senha?
        </Link>
      </nav>
    </>
  )
}
