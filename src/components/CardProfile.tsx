import { AiOutlineClose } from 'react-icons/ai'

import Avatar from "./Avatar";

const CardProfile = () => {
    return ( 
        <div className="w-full flex flex-row justify-between items-center my-4">
            <div className="flex items-center">
                <Avatar small />
                <div className='ml-4'>
                    <h2 className='font-semibold text-lg'>Testing</h2>
                    <p className='font-light text-xs'>Testsing</p>
                </div>
            </div>
            <div className='cursor-pointer mr-5'>
                <AiOutlineClose/>
            </div>
        </div>
     );
}
 
export default CardProfile;