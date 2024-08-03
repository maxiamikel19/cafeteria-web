import { createRef, useState } from "react";
import clienteAxios from "../config/axios";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";

export default function Registro() {
    
    const nameRef = createRef();
    const emailRef = createRef();
    const telefoneRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [formError, setFormError] = useState([])

    const handleSubmit = async e => {
        e.preventDefault();
        //alert('Submitted');

        const frmData = {
            name: nameRef.current.value,
            telefone: telefoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        try {
            const newRegister = await clienteAxios.post('/api/post', frmData)
            
        } catch (error) {
            setFormError(Object.values(error.response.data.errors))
        }
       // console.log(frmData)
    }

  return (
    <>
      <h1 className="text-2xl text-center">Criar sua conta</h1>
      <p className="text-sm text-center">Informe  os dados silicitados no formulario para criar sua conta</p>

      <div className="bg-white shadow-md rounded-md mt10 px-5 py-10">
        <form 
             autoComplete="OFF"
             method="POST"
             onSubmit={handleSubmit}
             noValidate
        >
            {formError ? formError.map(err => <Alerta key={err}>{err}</Alerta>) : null}

            <div className="mb-4">
                <label 
                    htmlFor="name"
                    className="text-slate-800"
                >Nome</label>
                <input 
                    type="text" 
                    className="mt-2 w-full p-3 bg-gray-50 "
                    id="name"
                    name="name"
                    placeholder="Ex: Amikel Maxi"
                    ref={nameRef}
                />
            </div>

            <div className="mb-4">
                <label 
                    htmlFor="telefone"
                    className="text-slate-800"
                >Telefone</label>
                <input 
                    type="text" 
                    className="mt-2 w-full p-3 bg-gray-50 border rounded"
                    id="telefone"
                    name="telefone"
                    placeholder="Ex: 44 9 99999999"
                    ref={telefoneRef}
                />
            </div>

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

            <div className="mb-4">
                <label 
                    htmlFor="password_confirmation"
                    className="text-slate-800"
                >Confirmar a senha</label>
                <input 
                    type="password" 
                    className="mt-2 w-full p-3 bg-gray-50 border rounded"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Ex: ******"
                    ref={passwordConfirmationRef}
                />
            </div>

            <input 
                type="submit" 
                value="Criar sua conta"
                className="mt-8 bg-slate-800 cursor-pointer hover:bg-slate-600 uppercase w-full p-4 text-slate-400 rounded-lg"
            />
        </form>
      </div>

      <nav className="mt-5 text-slate-600">
        <Link to="/auth/login">
            J&aacute; tem conta? Logar
        </Link>
      </nav>
    </>
  )
}
