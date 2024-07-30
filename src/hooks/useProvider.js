import { useContext } from "react"
import MainAppContext from "../context/MainAppProviver"

const useProvider = () => {
    return useContext(MainAppContext)
}

export default useProvider