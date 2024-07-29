export default function Categoria({categoria}) {
  const {id, nome, icono} = categoria
  return (
    <div className="flex items-center text-slate-800 hover:bg-slate-200 capitalize p-2 border-b gap-4 w-full cursor-pointer">
      <img 
        src={`/img/${icono}`} 
        alt={`${nome}`}
        className="w-10" 
      />
      <p>{nome}</p>
    </div>
  )
}
