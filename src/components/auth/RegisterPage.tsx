'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

import { AiOutlineGoogle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

import Input from "../form/input";
import InputPassWord from "../form/inputPassword";
import Button from "../form/botton";
import { RegisterUseCase } from "@/modules/auth/usecase/auth.usecase";

interface RegisterPageProps{
    changePage?: any;
}


const RegisterPage: React.FC<RegisterPageProps> = ({
    changePage
}) => {
    let [isSuccess, setIsSuccess] = useState(true);
    const [errorMessage, setErrorMessage] = useState()
    let [isMatch, setIsMatch] = useState(true);
    const [state, setState] = useState({ email: '', password: '', name: '', username: '', repassword:''})
    const { email, password, name, username, repassword } = state;
    const router = useRouter()

    const onSubmit = async(e:any) =>{
        e.preventDefault();
        const data = new FormData(e.target);
    
        let email,password,name,username,repassword
        
        name = Object.fromEntries(data.entries()).name
        username = Object.fromEntries(data.entries()).username
        email = Object.fromEntries(data.entries()).email
        password = Object.fromEntries(data.entries()).password
        repassword = Object.fromEntries(data.entries()).repassword  
    
        const dataSubmit = { email, password,name,username}
          
        if (isMatch) {
            const SubmiRegister = await RegisterUseCase(dataSubmit)
            if (SubmiRegister.success) {
                router.push('/home')
            } else {
                setErrorMessage(SubmiRegister.message)
            }
      
          }
  
      };

    const onChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };


    const onChangeRepas = (e:any) => {
        setState({ ...state, [e.target.name]: e.target.value });
        if (state.password != e.target.value) {
            setIsMatch(isMatch=false);
        } else {
            setIsMatch(isMatch = true);
        }

      };
  


    return (
        <div className="w-72">
            <div className="mt-18 text-center">
                <h2 className="text-2xl font-bold text-black">Mari mulai perjalanan</h2>
                <p className="text-black text-xs font-semibold">Cara baru membaca, menulis dan membagikan Novelmu</p>
            </div>
            <div className="mt-9 border-solid border border-primary p-5 rounded-md">
                <form onSubmit={onSubmit}>
                    <Input name="name" placeholder="Nama" onChange={onChange}/>
                    <Input name="username" placeholder="Username" onChange={onChange}/>
                    <Input name="email" placeholder="Email" onChange={onChange}/>
                    <InputPassWord name="password" placeholder="Password" onChange={onChange}/>
                    <InputPassWord name="repassword" repass match={isMatch} placeholder="Password" onInput={onChangeRepas}/>
                    <Button label="Masuk" smaller fullWidth/>
                </form>

                <div className="mt-6 mb-3 mx-auto text-center">
                    <div className="text-xs text-gray-400">Sudah punya akun? <span className="text-blue-500 cursor-pointer" onClick={() => {
                            changePage(true)
                        }}> Masuk</span></div>
                </div>
            </div>
        </div>
    );
}
 
export default RegisterPage;