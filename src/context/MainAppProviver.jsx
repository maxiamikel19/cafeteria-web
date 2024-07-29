import { createContext } from "react"

const MainAppContext = createContext()

const MainAppProvider = ({children}) =>{
    return (
        <MainAppContext.Provider
            value={{

            }}
        >{children}</MainAppContext.Provider>
    )    
}

export {
    MainAppProvider
}
export default MainAppContext