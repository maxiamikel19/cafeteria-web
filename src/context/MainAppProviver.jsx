import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias";

const MainAppContext = createContext();

const MainAppProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaSelecionado, setCategoriaSelecionado] = useState(categorias[0]);
    const [modal, setModal] = useState(false)
    const [produto, setProduto] = useState({})
    const [pedido, setPedido] = useState([])

    const handleClickCategoria = (id) => {
        //console.log(id)
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        //console.log(categoria)
        setCategoriaSelecionado(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduto = (produto) => {
        setProduto(produto)
    }

    const handleAdicionarPedido = ({imagen, categoria_id, descricao, ...produto}) => {
        //console.log(produto)
    
            if(pedido.some( produtoPedido => produtoPedido.id === produto.id)){
                const novaCantidade = pedido.map(produtoPedido => produtoPedido .id === produto.id ? produto : produtoPedido)
                setPedido(novaCantidade)
            }else{
            setPedido([...pedido, produto]) 
            }
       
        
    }
 
    return (
        <MainAppContext.Provider
            value={{
                categorias,
                categoriaSelecionado,
                handleClickCategoria,
                modal,
                handleClickModal,
                produto,
                handleSetProduto,
                pedido,
                handleAdicionarPedido
            }}
        >{children}</MainAppContext.Provider>
    )    
}

export {
    MainAppProvider
}
export default MainAppContext