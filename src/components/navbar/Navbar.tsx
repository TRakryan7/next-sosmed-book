import { GoHome } from 'react-icons/go'
import { AiOutlineCompass } from 'react-icons/ai'
import { BsCameraVideo } from 'react-icons/bs'
import { PiBookOpenTextBold } from 'react-icons/pi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import Link from 'next/link'

const Navabar = () => {
    return ( 
        <footer className="relative px-2 w-full h-20 block bottom-0">
            <div className='absolute w-[95%] bg-white mx-auto rounded-2xl p-3 shadow-lg'>
                <ul className="flex flex-row justify-around items-center">
                    <li>
                        <Link href={'/home'}>
                            <GoHome />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/search'}>
                            <AiOutlineCompass />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/video'}>
                            <BsCameraVideo />
                        </Link>    
                    </li>
                    <li>
                        <Link href={'/book'}>
                            <PiBookOpenTextBold />
                        </Link>    
                    </li>
                    <li>
                        <Link href={'/profile'}>
                            <HiOutlineUserCircle />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Navabar;