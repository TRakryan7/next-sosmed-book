import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmarkStar } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

import Avatar from '../Avatar';
import Image from 'next/image';

const CardContent = () => {
    return ( 
        <div className="w-full h-auto bg-white my-4 rounded-2xl shadow-xl">
            <div className='w-full flex justify-between py-4 px-4'>
                <div className='flex'>
                    <Avatar small/>
                    <div className='ml-3 mt-1'>
                        <h2 className='text-black font-semibold'>My Profile</h2>
                        <p className='font-light text-sm'>52 menit ago</p>
                    </div>
                </div>
                <div className='mr-8 mt-1 text-black'>
                    <BsThreeDots className='w-5 h-5'/>
                </div>
            </div>
            <div className='mt-2 px-5 rounded-3xl'>
                <div className='relative h-64 rounded-xl overflow-hidden'>
                    <Image alt='post' className='object-cover'  fill src={'https://source.unsplash.com/360x360?hanzi'}/>
                 </div>            
            </div>
            <div className='px-5 my-4'>
                <p className='text-xs font-light flex-wrap leading-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam reprehenderit quasi ratione. Mollitia sint amet architecto dicta quidem obcaecati tempore.
                </p>
            </div>
            <div className='flex justify-between items-center px-5 mb-5'>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center'>
                        <AiOutlineHeart className='w-6 h-6 text-black'/>
                        <span className='ml-1'>123</span>
                    </div>
                    <div className='flex items-center'>
                        <FaRegComment stroke-width="0.1" className='w-6 h-6 text-black'/>
                        <span className='ml-1'>142</span>
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