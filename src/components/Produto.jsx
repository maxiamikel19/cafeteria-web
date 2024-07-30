import useProvider from '../hooks/useProvider'
import { formatardinheiro } from '../helpers'

export default function Produto({produto}) {
  
  const {handleClickModal, handleSetProduto} = useProvider()  
  const {nome, descricao,imagen, preco} = produto
  
  return (
    <div className="border p-4 bg-white shadow rounded">
      <img 
         src={`../img/${imagen}`}
         alt={nome}
         className="w-full h-160"
      />

        <div className="text-sm p-5">
            <h3 className="text-xl text-indigo-950 tracking-tight font-mono">{nome}</h3>
            <p>{descricao}</p>
            <p className="font-bold text-2xl text-orange-600 text-center">{formatardinheiro(preco)}</p>
        </div>

        <button
            type="button"
            className="w-full bg-indigo-800 hover:bg-slate-400 text-white font-semibold p-3 mt-5 rounded"
            onClick={() =>{
              handleClickModal(); 
              handleSetProduto(produto);
            }}
        >
            Selecionar
        </button>
    </div>
  )
}
