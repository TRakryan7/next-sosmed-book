"use client"

import { CheckLogin } from "@/modules/auth/usecase/auth.usecase"
import { useRouter } from "next/navigation";
import { createContext,useContext, useEffect, useState } from "react"

// const AuthContext = createContext()

type AuthContextType = {
    show: any
}

interface AuthProviderProp{
    children:React.ReactNode
}
const AuthContextDefaultValues: AuthContextType = {
    show: null
}

export const AuthContext = createContext<AuthContextType>(AuthContextDefaultValues)

export const AuthProvider: React.FC<AuthProviderProp> = ({children}) => {
    const router = useRouter()

    const [show, setShow] = useState(false);

    const AuthenticationAuth = async() => {
        const DataUser = await CheckLogin()

        
        if (DataUser === null) {

            router.push('/')
        } else {
            setShow(true)
        }

    }

    const value = {
        show
    }

    useEffect(() => {
        AuthenticationAuth()
    }, [])

    return (
        <AuthContext.Provider value={value}>

            {show && (

                <>
                    {children}
                </>
            )}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}