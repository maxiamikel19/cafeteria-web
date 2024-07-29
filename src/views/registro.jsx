export default function Registro() {
  return (
    <div>
      <h1 className="text-2xl text-center">Criar sua conta</h1>
      <p className="text-sm text-center">Informe  os dados silicitados no formulario para criar sua conta</p>

      <div className="bg-white shadow-md rounded-md mt10 px-5 py-10">
        <form action="">
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
                />
            </div>

            <input 
                type="submit" 
                value="Criar sua conta"
                className="mt-8 bg-slate-800 hover:bg-slate-600 uppercase w-full p-4 text-slate-400 rounded-lg"
            />
        </form>
      </div>
    </div>
  )
}
