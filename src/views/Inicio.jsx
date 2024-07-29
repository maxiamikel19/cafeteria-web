import Produto from '../components/Produto'
import {produtos} from '../data/produtos'

export default function Inicio() {
  return (
    <>
      <h1 className="text-2xl font-bold pt-4">Produtos</h1>
      <p className="my-3 text-lg">Escolha os produtos do seu pedido</p>

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
