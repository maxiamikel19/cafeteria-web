import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const MainAppContext = createContext();

const MainAppProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionado, setCategoriaSelecionado] = useState({});
    const [modal, setModal] = useState(false)
    const [produto, setProduto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

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
                toast.success('Cantidade do produto alterada com sucesso.')
            }else{
            setPedido([...pedido, produto]) 
            toast.success('Produto adicionado ao pedido com sucesso.')
            }
       
        
    }

    const handleEditarQtdProdutoNoPedido = (id) => {
        //console.log(id)
        const produtoEditado = pedido.filter(produto => produto.id === id)[0]
        setProduto(produtoEditado)
        setModal(!modal)
    }

    const handleEliminarProdutoNoPedido = (id) => {
        const pedidoAtualizado = pedido.filter( produto => produto.id !== id)
        setPedido(pedidoAtualizado)
        toast.success("Eliminado com sucesso!")
    }

    const obterCategorias = async () => {
        try {
            //console.log(import.meta.env.VITE_API_URL)
            const {data} = await clienteAxios('/api/categorias')
            //console.log(data.data)
            setCategorias(data.data)
            setCategoriaSelecionado(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        obterCategorias();
    }, [])

    useEffect( () => {
        const totalPedido = pedido.reduce( (total, produto) => (produto.preco * produto.cantidade) + total, 0)
        setTotal(totalPedido)
    }, [pedido])
 
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
                handleAdicionarPedido,
                handleEditarQtdProdutoNoPedido,
                handleEliminarProdutoNoPedido,
                total
            }}
        >{children}</MainAppContext.Provider>
    )    
}

export {
    MainAppProvider
}
export default MainAppContext