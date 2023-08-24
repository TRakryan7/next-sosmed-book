'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import { AiOutlineGoogle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

import Input from "../form/input";
import Button from "../form/botton";
import InputPassWord from "../form/inputPassword";
import { LoginUseCase } from "@/modules/auth/usecase/auth.usecase";
import { UserDataContext } from "../contextAuth/userContext";


interface LoginPageProps{
    changePage?: any;
}

const LoginPage: React.FC<LoginPageProps> = ({
    changePage
}) => {
    // let [isSuccess, setIsSuccess] = useState(true)
    const [state,setState] = useState({email:'',password:''})
    const { email, password } = state
    const { setData }  = UserDataContext()
    const router = useRouter()
    

    const onSubmit = async(e:any) =>{
        e.preventDefault();
        const data = new FormData(e.target);
    
        let email,password 
        
        email = Object.fromEntries(data.entries()).email
        password = Object.fromEntries(data.entries()).password
        
        const dataSubmit = { email, password }
        
        const SubmitLogin = await LoginUseCase(dataSubmit)
        
        if (SubmitLogin) {
            setData(SubmitLogin)
            router.push('/home')
        } else {
            alert('wrong email & password')
        }

    };
    
    const onChange = (e: any) => { 
        setState({ ...state, [e.target.name]: e.target.value });
   };

    return (
        <div className="w-72">
            <div className="mt-32 text-center">
                <h2 className="text-5xl font-bold text-primary italic">ParagafIn</h2>
                <p className="text-black text-xs font-semibold ml-32">write it, read it, share it!</p>
            </div>
            <div className="mt-14 border-solid border border-primary p-5 rounded-md">
                <form onSubmit={onSubmit}>
                    <Input name="email" placeholder="Email" onChange={onChange}/>
                    <InputPassWord name="password" placeholder="Password"  onChange={onChange}/>
                    <Button label="Masuk" smaller fullWidth/>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-xs text-center">
                                <span className="bg-[#fbfbfb] px-2 whitespace-nowrap text-gray-500">Lanjutkan dengan</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 mx-auto">
                    <div className="flex flex-row justify-center gap-6">
                        <div className="p-1 w-7 h-7 border border-solid flex justify-center items-center border-gray-400 text-gray-400 rounded-full hover:bg-primary hover:border-primary hover:text-[#fbfbfb]">
                            <AiOutlineGoogle width='6' heigth='6'/>
                        </div>
                        <div className="p-1 w-7 h-7 border border-solid flex justify-center items-center border-gray-400 text-gray-400 rounded-full hover:bg-primary hover:border-primary hover:text-[#fbfbfb]">
                            <BsFacebook width='6' heigth='6'/>
                        </div>
                        <div className="p-1 w-7 h-7 border border-solid flex justify-center items-center border-gray-400 text-gray-400 rounded-full hover:bg-primary hover:border-primary hover:text-[#fbfbfb]">
                            <AiOutlineTwitter width='6' heigth='6'/>
                        </div>
                    </div>
                </div>
                <div className="mt-6 mb-3 mx-auto text-center">
                    <div className="text-xs text-gray-400">Belum punya akun? <span className="text-blue-500 cursor-pointer" onClick={() => {
                            changePage(true)
                        }}> Daftar</span></div>
                </div>
            </div>
        </div>
    );
}
 
export default LoginPage;