import { useState, useEffect } from "react";
import useProvider from "../hooks/useProvider"
import { formatardinheiro } from "../helpers";

export default function ModalProduto() {
    
    const {handleClickModal,produto, handleAdicionarPedido, pedido, editar} = useProvider();

    const {id,nome,descricao,preco,imagen} = produto
    const [cantidade, setCantidade] = useState(1)
    const [edicao, setEdicao] = useState(false)


    const handleClickAdicionar = () => {
      if(cantidade >= 5){
        return
      }
      return setCantidade(cantidade + 1)
    }

    const handleClickDisminuir = () => {
      if(cantidade <= 1){
        return
      }
      return setCantidade(cantidade - 1)
    }


   useEffect( ()=> {
      if(pedido.some( arrayPedido => arrayPedido.id === produto.id)){
        const editado = pedido.filter(arrayPedido=> arrayPedido.id === produto.id)[0]
        setCantidade(editado.cantidade)
        setEdicao(true)
      }
   }, [pedido])

  return (
    <div >
        <div className="flex justify-end">
            <span>
                <button
                    type="button"
                    className="font-normal text-md text-red-500 uppercase hover:text-slate-900"
                    onClick={handleClickModal}
                >
                    fechar
                </button>
            </span>
        </div>
        <div className="md:flex gap-10 p-5">
           <div className="md:w-1/3">
             <img 
                src={`/img/${produto.imagen}`}
                alt={`Produto ${produto.nome}`} 
            />
           </div>

           <div className=" gap-2 md:w-2/3">
             <h2 className="text-2xl font-bold ">
              {produto.nome}
             </h2>
             <p className="text-sm my-3">{produto.descricao}</p>
             <p className="font-bold text-2xl text-orange-600  my-4">{formatardinheiro(preco)}</p>
            
              <div className="flex gap-4 mt-5">
                <div>
                  <button
                    className="text-2lx"
                    type="button"
                    onClick={handleClickDisminuir}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>

                  </button>

                  <span 
                    className="text-xl p-4 "
                  >{cantidade}</span>

                  <button
                    className="text-2xl"
                    type="button"
                    onClick={handleClickAdicionar}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
                
                <div className="w-1/2 text-right font-bold text-2xl">
                  <span>Total: </span>
                  <span className="text-orange-600 pl-2">{formatardinheiro(produto.preco*cantidade)}</span>
                </div>
                
              </div>
             <button
                type="button"
                className="bg-indigo-800 hover:bg-indigo-600 text-white font-semibold p-3 mt-5 rounded flex"
                onClick={() => {
                                handleAdicionarPedido({...produto, cantidade});
                                handleClickModal();
                              }}
            >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg> 
                  <span className="pl-2">{edicao ? "Editar" : "Adicionar"}</span>
            </button>
           </div>
        </div>
    </div>
  )
}
