import React, { useState} from "react";
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'

interface InputPassWordProps {
    placeholder?:string;
    value?:string;
    type?:string;
    disabled?:boolean;
    hide?: boolean;
    match?: boolean;
    repass?:boolean;
    name:string ;
    onBlur?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onInput?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassWord: React.FC<InputPassWordProps> = ({
    placeholder,
    value,
    type,
    hide,
    repass,
    disabled,
    name,
    match,
    onChange,
    onBlur,
    onInput,
    onFocus
}) =>{

    const [isShow,setShow] = useState(false)
    const[focuse,setFocused] = useState(false);

    const handleFocus = (e:any)=>{
        setFocused(true);
    }
    return (
      <div className="mb-5">
        <span className="text-black text-sm font-bold">{placeholder}</span>
          <div className="flex flex-row w-full relative">
            <div className="w-full">
            <input
                disabled={disabled}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={isShow ? 'text':'password'}
                onInput={onInput}
                onBlur={handleFocus}
                data-focused = {focuse.toString()}
                name={name}
                required
                className="
                        w-full
                        p-[0.4rem]
                        my-2
                        text-xs
                        peer
                        bg-white
                        border-2
                        border-base
                        rounded-md
                        outline-none
                        text-based
                        focus:border-primary
                        transition
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                "
            >
            </input>
                {
                    repass ?
                        <div className={`mb-2 ${match ? 'hidden':''}`}>
                            <span className='text-red-600 text-sm '>Password tidak cocok</span>
                        </div>
                            :
                        <div className="mb-2 hidden peer-invalid:peer-data-[focused=true]:block">
                            <span className='text-red-600 text-sm '>Please enter {placeholder}</span>
                        </div>
                }       

            </div>
            <span
                    className="
                        mt-4
                        ml-1
                        right-2
                        absolute
                    "
                    onClick={()=>{setShow(!isShow)}}>
                    {isShow ? <AiOutlineEye color="grey" size={20}/>:<AiOutlineEyeInvisible color="grey" size={20}/>}
            </span>
         
        </div>
  
      </div>
    )
}

export default InputPassWord