import { GoHome } from 'react-icons/go'
import { AiOutlineCompass } from 'react-icons/ai'
import { BsCameraVideo } from 'react-icons/bs'
import { PiBookOpenTextBold } from 'react-icons/pi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navabar = () => {

    const pathname = usePathname()

    return ( 
        <footer className="fixed bg-[#fbfbfb] px-2 w-full h-20 block bottom-0 opacity-100">
            <div className='absolute w-[95%] bg-white mx-auto rounded-3xl py-2 px-1 shadow-lg opacity-100'>
                <ul className="flex flex-row justify-around items-center text-black">
                    <li className={pathname == "/home" ? "active-router" : ""}>
                        <Link href={'/home'} >
                            <GoHome className='w-6 h-6'/>
                        </Link>
                    </li>
                    <li className={pathname == "/search" ? "active-router" : ""}>
                        <Link href={'/search'} >
                            <AiOutlineCompass className='w-6 h-6' />
                        </Link>
                    </li>
                    <li className={pathname == "/video" ? "active-router" : ""}>
                        <Link href={'/video'} >
                            <BsCameraVideo className='w-6 h-6'/>
                        </Link>    
                    </li>
                    <li className={pathname == "/book" ? "active-router" : ""}>
                        <Link  href={'/book'} >
                            <PiBookOpenTextBold className='w-6 h-6' stroke-width="0.1"/>
                        </Link>    
                    </li>
                    <li className={pathname == "/profile" ? "active-router" : ""}>
                        <Link href={'/profile'} >
                            <HiOutlineUserCircle className='w-6 h-6'/>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Navabar;