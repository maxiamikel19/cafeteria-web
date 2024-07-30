import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias";

const MainAppContext = createContext();

const MainAppProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaSelecionado, setCategoriaSelecionado] = useState(categorias[0]);

    const handleClickCategoria = (id) => {
        //console.log(id)
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        //console.log(categoria)
        setCategoriaSelecionado(categoria)
    }

 
    return (
        <MainAppContext.Provider
            value={{
                categorias,
                categoriaSelecionado,
                handleClickCategoria
            }}
        >{children}</MainAppContext.Provider>
    )    
}

export {
    MainAppProvider
}
export default MainAppContext