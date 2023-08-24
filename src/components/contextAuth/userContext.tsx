"use client"

import { CheckLogin } from "@/modules/auth/usecase/auth.usecase"
import { useRouter } from "next/navigation";
import { type } from "os";
import { createContext, useContext, useEffect, useState } from "react"

type UserContextType = {
    userData: any
    setData: (userData:any)=>void
}

const UserContextDefaultValues: UserContextType = {
    userData: null,
    setData: ()=>{}
}

export const UserContext = createContext<UserContextType>(UserContextDefaultValues)

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const router = useRouter()
    
    const [userData, setUserData] = useState(null);

    const setData = (userData:any) => {
        setUserData(userData);
      };

    
    const value = {
        userData,
        setData
    }
    
    const AuthenticationAuth = async() => {
        const DataUser = await CheckLogin()

        
        if (DataUser) {
            console.log('context', DataUser)
            setUserData(DataUser)
        }
    }

    useEffect(() => {
        AuthenticationAuth()
    }, [])

    return (
        <UserContext.Provider value={{value}}>
                <div >
                    {children}
                </div>
         </UserContext.Provider>
    )
}

export function UserDataContext () {
    // console.log('check',a)
    return useContext(UserContext)
}