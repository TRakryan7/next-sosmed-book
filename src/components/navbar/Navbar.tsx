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
        <footer className="sticky bg-[#fbfbfb] px-2 w-full bg-[] h-20 block bottom-0">
            <div className='absolute w-[95%] bg-white mx-auto rounded-3xl py-2 px-1 shadow-lg'>
                <ul className="flex flex-row justify-around items-center text-black">
                    <li className={pathname == "/home" ? "active" : ""}>
                        <Link href={'/home'} >
                            <GoHome className='w-6 h-6'/>
                        </Link>
                    </li>
                    <li className={pathname == "/search" ? "active" : ""}>
                        <Link href={'/search'} >
                            <AiOutlineCompass className='w-6 h-6' />
                        </Link>
                    </li>
                    <li className={pathname == "/video" ? "active" : ""}>
                        <Link href={'/video'} >
                            <BsCameraVideo className='w-6 h-6'/>
                        </Link>    
                    </li>
                    <li className={pathname == "/book" ? "active" : ""}>
                        <Link  href={'/book'} >
                            <PiBookOpenTextBold className='w-6 h-6' stroke-width="0.1"/>
                        </Link>    
                    </li>
                    <li className={pathname == "/profile" ? "active" : ""}>
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