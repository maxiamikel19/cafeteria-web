import useProvider from "../hooks/useProvider"
import ResumeProduto from "./ResumeProduto"
export default function Resume() {
  
  const {pedido} = useProvider()

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-xl font-normal text-center uppercase">
        Seu pedido
      </h1>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl text-red-700">* Não tem pedido *</p>
        ) : (
          pedido.map(produto => (
            <ResumeProduto 
            key={produto.id}
              produto={produto}
            />
          ))
        )}
      </div>
        <p className="text-xl mt-10 capitalize">
          total:{''}
        </p>

        <form className="w-full">
          <div className="mt-5">
            <input 
              type="submit" 
              value="Confirmar pedido"
              className="w-full bg-indigo-800 uppercase hover:bg-indigo-600 text-white font-semibold p-3 mt-5 rounded"
            />
          </div>
        </form>
      

    </aside>
  )
}
