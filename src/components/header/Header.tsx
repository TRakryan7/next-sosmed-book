import { HiOutlineBell } from 'react-icons/hi'
import { BsChatLeftText } from 'react-icons/bs'


const Header = () => {
    return ( 
        <header className='bg-[#fbfbfb] pt-5 h-24 top-0 z-[9999] w-full sticky'>
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
        </header>
     );
}
 
export default Header;