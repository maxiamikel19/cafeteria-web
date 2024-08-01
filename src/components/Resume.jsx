import useProvider from "../hooks/useProvider"
import ResumeProduto from "./ResumeProduto"
import { formatardinheiro } from "../helpers"
export default function Resume() {
  
  const {pedido, total} = useProvider()

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-xl font-normal text-center uppercase">
        pedido
      </h1>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl text-red-700">* Sua cola de pedido est&aacute; vazia ainda *</p>
        ) : (
          pedido.map(produto => (
            <ResumeProduto 
            key={produto.id}
              produto={produto}
            />
          ))
        )}
      </div>

      {pedido.length > 0 ? (
        <>
          <p className="text-xl mt-10 capitalize">
            total: {''}
            {formatardinheiro(total)}
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
        </>
        
        
      ):(
        <p></p>
      )}     
    </aside>  
  )
}
