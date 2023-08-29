'use client'

import { FiSearch } from 'react-icons/fi'
import { useState,useEffect } from 'react'
import { useOutsideClick } from '@/utils/helps'
import CardProfile from './CardProfile';

interface SearchBarProps {
    placeholder?: string;
    regular?: boolean;
    value?:string;
    type?:string;
    disabled?:boolean;
    hide?: boolean;
    match?: boolean;
    repass?:boolean;
    name?:string ;
    onBlur?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onInput?:(event:React.ChangeEvent<HTMLInputElement>) => void;
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder,
    value,
    regular,
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
}) => {
    const [focus, setFocus] = useState(false)
    
    const onClick = useOutsideClick (() => {
         setFocus(false)
        // console.log('click outside of me')
    })

    useEffect(() => {
        import('preline')
    }, [])
    
    return ( 
        <> 
            {regular ? 
                <section className="flex flex-col w-full  justify-center items-center pb-2 bg-white px-5 top-24 sticky z-40 ">
                    <div  className="flex flex-row w-full">
                        <div className={`w-full flex flex-row items-center
                                        px-3
                                        border-2
                                        rounded-md
                                        bg-white
                                        ${focus ? 'outline-primary' : 'outline-none'}
                                        ${focus ? 'border-primary' :'border-gray-300'}
                                        transition
                                        disabled:opacity-70
                                        disabled:cursor-not-allowed`}>
                            <div className='h-5 w-5                                 '>
                                <FiSearch className={`h-5 w-5  ${focus ? 'text-primary':'text-gray-300' }`} />
                            </div>
                            <input
                                onFocus={() => { setFocus(true) }}
                                placeholder='Cari'
                                className="
                                        w-full
                                        p-[0.5rem]
                                        text-sm
                                        bg-white
                                        text-black
                                        outline-none ">
                            </input>
                        </div>
                    </div>
                </section>
            
            
            
            :
            
            
            
                <section ref={onClick} className="flex flex-col w-full  justify-center items-center pb-2 bg-white px-5 top-24 sticky z-40 ">
                    <div  className="flex flex-row w-full">
                        <div className={`w-full flex flex-row items-center
                                        px-3
                                        border-2
                                        rounded-md
                                        bg-white
                                        ${focus ? 'outline-primary' : 'outline-none'}
                                        ${focus ? 'border-primary' :'border-gray-300'}
                                        transition
                                        disabled:opacity-70
                                        disabled:cursor-not-allowed`}>
                            <div className='h-5 w-5                                 '>
                                <FiSearch className={`h-5 w-5  ${focus ? 'text-primary':'text-gray-300' }`} />
                            </div>
                            <input
                                onFocus={() => { setFocus(true) }}
                                placeholder='Cari'
                                className="
                                        w-full
                                        p-[0.5rem]
                                        text-sm
                                        bg-white
                                        text-black
                                        outline-none ">
                            </input>
                        </div>
                    </div>
                    <div className={` h-[39.5rem] w-full bg-white absolute top-10 flex flex-col items-center transform duration-300 opacity-0 ${ focus ? 'visible opacity-100':'invisible'}`}>
                        <div className="">
                            <nav className="flex w-full justify-around mt-4" aria-label="Tabs" role="tablist">
                                <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-16 py-1 text-center  items-center gap-2  border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-black border-solid  active" id="basic-tabs-item-1" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
                                    Populer
                                </button>
                                <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-16 py-1 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-black " id="basic-tabs-item-2" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
                                    Akun
                                </button>
                                <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-16 py-1 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-black " id="basic-tabs-item-3" data-hs-tab="#basic-tabs-3" aria-controls="basic-tabs-3" role="tab">
                                    Novel
                                </button>
                                <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-16 py-1 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-black " id="basic-tabs-item-4" data-hs-tab="#basic-tabs-4" aria-controls="basic-tabs-4" role="tab">
                                    Video
                                </button>
                                <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-16 py-1 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-black " id="basic-tabs-item-5" data-hs-tab="#basic-tabs-5" aria-controls="basic-tabs-5" role="tab">
                                    Tagar
                                </button>
                            </nav>
                        </div>

                        <div className="pt-4 px-4 h-full w-full bg-white">
                            <div id="basic-tabs-1" className='' role="tabpanel" aria-labelledby="basic-tabs-item-1">
                                <CardProfile/>
                                <CardProfile/>
                                <CardProfile/>
                                <CardProfile/>
                                <CardProfile/>
                            </div>
                            <div id="basic-tabs-2" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-2">
                                <CardProfile/>
                                <CardProfile/>
                                <CardProfile/>
                                <CardProfile/>
                            </div>
                            <div id="basic-tabs-3" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-3">
                                <CardProfile/>
                                <CardProfile/>
                                <CardProfile/>
                            </div>
                            <div id="basic-tabs-4" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-4">
                                <CardProfile/>
                            </div>
                            <div id="basic-tabs-5" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-5">
                                <CardProfile/>
                                <CardProfile/>
                            </div>
                        </div>
                    </div>

                </section>
            }
        </>
     );
}
 
export default SearchBar;