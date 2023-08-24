'use client'
import React, { useState, LegacyRef, DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps {
    placeholder?:string;
    value?:string;
    hide?:boolean;
    type?:string;
    disabled?:boolean;
    refer?: React.RefObject<HTMLInputElement> ;
    name: string;
    onBlur?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onInput?:()=>{};
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    hide,
    disabled,
    refer,
    name,
    onChange,
    onBlur,
    onInput,
    onFocus
}) =>{

    const[focuse,setFocused] = useState(false);

    const handleFocus = (e:any)=>{
        setFocused(true);
    }

    return (
    <div className="mb-5"> 
        <label className="text-black text-sm font-bold">{placeholder}</label> 
        <input
            disabled={disabled}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
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
            <div className="mb-2 hidden peer-invalid:peer-data-[focused=true]:block">
                <span className='text-red-600 text-xs '>Please enter {placeholder}</span>
            </div>            
      </div>
    )
}

export default Input