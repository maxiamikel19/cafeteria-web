//import { categorias } from "../data/categorias";
import useProvider from "../hooks/useProvider";
import Categoria from "./Categoria";

export default function Sidebar() {

  const {categorias} = useProvider();

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img 
            src="../img/logo-oficials.png" 
            alt="Alide Logo" 
            className="w-40 m-auto"
        />
      </div>
      <div className="mt-4 p-3">
        <h1 className="text-center text-xl tracking-tight p-4 md:bg-indigo-800  bg-transparent md:text-white text-slate-600 font-semibold">Categorias</h1>
        {categorias.map(categoria => (
            <Categoria 
              key={categoria.id}
              categoria = {categoria}
            />
        ))}
      </div>

      <div className="my-5 p-5">
        <button
          className="w-full bg-indigo-800 hover:bg-slate-400 text-white font-semibold p-3 truncate"
          type="button"
        >
          Cancelar pedido
        </button>
      </div>
    </aside>
  )
}
