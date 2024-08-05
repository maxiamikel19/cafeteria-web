import useSWR from "swr"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/axios"

function useAuth({middleware, url}){

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate();

    const {data: user, error, mutate} = useSWR('/api/user', () => 
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login = async (dados, setErros) =>{
        try {
       const {data} = await clienteAxios.post('/api/login', dados)
       localStorage.setItem('AUTH_TOKEN', data.token)
       setErros([])
       await mutate()     
        } catch (error) {
            setErros(Object.values(error.response.data.errors))
        }
    }
    
    const logout = async () => {
        try {
            await clienteAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    useEffect( () => {
        if(middleware === 'guest' && url && user){
            navigate(url)
        }

        if(middleware === 'auth' && error){
            navigate('/auth/login')
        }
    },[user, error])


    return{
        login,
        logout,
        user,
        error
    }

}
export {useAuth}