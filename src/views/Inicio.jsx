import useProvider from '../hooks/useProvider'
import Produto from '../components/Produto'
import {produtos as data} from '../data/produtos'

export default function Inicio() {

  const {categoriaSelecionado} = useProvider();

  //Filtrar os produtos por sua respetiva categoria
  const produtos = data.filter(produto => {
    return produto.categoria_id === categoriaSelecionado.id
  })

  return (
    <>
      <h1 className="text-2xl font-bold pt-4 capitalize">{categoriaSelecionado.nome}</h1>
      <p className="my-3 text-lg">Escolha o(s) {categoriaSelecionado.nome}(s) do seu pedido</p>
    
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {produtos.map( produto => (
          <Produto 
            produto = {produto}
            key={produto.id}
          />          
        ))}
      </div>
    </>
  )
}
