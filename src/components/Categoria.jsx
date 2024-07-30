import useProvider from "../hooks/useProvider"


export default function Categoria({categoria}) {
  
  const {handleClickCategoria, categoriaSelecionado} = useProvider()
  const {id, nome, icono} = categoria

  return (
    <div 
      className={`${categoriaSelecionado.id === id ? "bg-slate-400" : "bg-white"} flex items-center text-slate-800 hover:bg-slate-200 capitalize p-2 border-b gap-4 w-full cursor-pointer`}
    >
      <img 
        src={`/img/${icono}`} 
        alt={`${nome}`}
        className="w-10" 
      />
      <button
        className="text-md w-full text-left capitalize font-semibold"
        type="button"
        onClick={ () => handleClickCategoria(id)}
      >
        {nome}
      </button>
    </div>
  )
}
