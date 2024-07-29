import { categorias } from "../data/categorias";
import Categoria from "./Categoria";

export default function Sidebar() {
  return (
    <aside className="md:w-72 border">
      <div className="p-4">
        <img 
            src="../img/logo-oficials.png" 
            alt="Alide Logo" 
            className="w-40 m-auto"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-center text-xl tracking-tight p-4 bg-slate-600 text-blue-300 font-semibold">Categorias</h1>
        {categorias.map(categoria => (
            <Categoria 
              key={categoria.id}
              categoria = {categoria}
            />
        ))}
      </div>

      <div className="my-5 py-5">
        <button
          className="w-full bg-slate-600 text-blue-300 font-semibold p-3 truncate"
          type="button"
        >
          Cancelar pedido
        </button>
      </div>
    </aside>
  )
}
