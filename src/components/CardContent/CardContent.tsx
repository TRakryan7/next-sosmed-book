import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmarkStar } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

import Avatar from '../Avatar';
import Image from 'next/image';

interface CardContentProps {
    data:{}
}



const CardContent: React.FC<CardContentProps> = ({
data
}) => {

    // console.log(data)
    return ( 
        <div className="w-full h-auto pb-7 bg-white my-4 rounded-2xl shadow-xl">
            <div className='w-full flex justify-between py-4 px-4'>
                <div className='flex'>
                    <Avatar small/>
                    <div className='ml-3 mt-1'>
                        <h2 className='text-black font-semibold'>{ data.name }</h2>
                        <p className='font-light text-sm text-gray-500'>{ data.active }</p>
                    </div>
                </div>
                <div className='mr-8 mt-1 text-black'>
                    <BsThreeDots className='w-5 h-5'/>
                </div>
            </div>
            <div className='mt-2 px-5 rounded-3xl'>
                <div className='relative h-64 rounded-xl overflow-hidden'>
                    <Image alt='post' className='object-cover'  fill src={data.image}/>
                 </div>            
            </div>
            <div className='px-5 my-4'>
                <p className='text-xs text-gray-500 font-light flex-wrap leading-4'>
                    {data.contain}
                </p>
            </div>
            <div className='flex justify-between items-center px-5'>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center'>
                        <AiOutlineHeart className='w-6 h-6 text-black'/>
                        <span className='ml-1 text-gray-500'>{ data.likes }</span>
                    </div>
                    <div className='flex items-center'>
                        <FaRegComment stroke-width="0.1" className='w-6 h-6 text-black'/>
                        <span className='ml-1 text-gray-500'>{ data.comments }</span>
                    </div>
                    <div >
                        <BiLinkExternal stroke-width="0.1" className='w-6 h-6 text-black'/>
                    </div>
                </div>
                <div>
                    <BsBookmarkStar className='w-6 h-6 text-black'/>
                </div>
            </div>
        </div>
     );
}
 
export default CardContent;