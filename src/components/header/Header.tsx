import { HiOutlineBell } from 'react-icons/hi'
import { BsChatLeftText } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { usePathname } from 'next/navigation';

const Header = () => {

    const pathname = usePathname()

    return ( 
        <header className='bg-[#fbfbfb] pt-5 h-24 top-0 z-[9999] w-full fixed'>
            {pathname == "/home" ? 
            <div className=" p-8  pr-12">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-black">ParagrafIn</h2>
                    <div className='flex justify-around items-center'>
                        <div className='mr-10 relative'>
                            <div className='absolute w-2 h-2 bg-red-600 rounded-full right-0 top-0'></div>
                            <HiOutlineBell stroke-width="1.3" className="w-5 h-5 text-black "/>
                        </div>
                        <div>
                            <BsChatLeftText stroke-width="0.1" className="w-4 h-4 text-black "/>
                        </div>
                    </div>
                </div>
            </div>  
            :''}
            {pathname == "/search" ? 
            <div className=" py-2 ">
                <div className="flex justify-center items-center">
                    <h2 className="text-xl font-bold text-black">Jelajah</h2>
                </div>
            </div>  
            :''}
            {pathname == "/profile" ? 
            <div className=" py-8 px-3">
                < div className="flex justify-between items-center px-7">
                    <IoIosArrowBack className='w-5 h-5'/>        
                    <div className='flex items-center'>
                        <h2 className="text-lg font-bold text-black">tm_skristanto</h2>
                        <div className='text-blue-500 ml-1'>
                            <MdVerified/>
                        </div>    
                    </div>
                    <BsThreeDots className='w-5 h-5'/>    
                </div>
            </div>  
            :''}
  
        </header>
     );
}
 
export default Header;