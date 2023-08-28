import Image from "next/image";
import { AiOutlineTwitter } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

import Avatar from "@/components/Avatar";
import ButtonProfile from "@/components/ButtonProfile";
import TabContent from "@/components/TabContent";

const Profile = () => {
    return ( 
        <div className="bg-white w-full">
            <div className='bg-slate-200 h-32 relative w-full'>
                <Image fill priority className="object-cover" alt='bg' src={'/asset/card/hanzi.jpg'} />
                <div className="absolute w-full flex justify-center -bottom-7 ">
                    <div className="bg-white p-1 rounded-full">
                        <Avatar large />
                    </div>
                </div>
            </div>
            <div className="bg-white pt-10 pb-4">
                <div className=" text-center">
                    <h2 className="text-black font-semibold text-lg">Tomi Kristanto</h2>
                    <p className="text-sm text-slate-500 font-light">Polyglot & Programmer</p>
                </div>
                <div className="flex flex-row justify-between text-center w-full pt-7 px-5">
                    <div className="border-r-[0.5px] border-solid border-r-slate-300 px-4">
                        <h2 className="text-black font-semibold text-base">345</h2>
                        <p className="text-xs text-slate-500 font-light">Unggahan</p>
                    </div>
                    <div className="border-r-[0.5px] border-solid border-r-slate-300 px-4">
                        <h2 className="text-black font-semibold text-base">10,9M</h2>
                        <p className="text-xs text-slate-500 font-light">Pengikut</p>
                    </div>
                    <div className="border-r-[0.5px] border-solid border-r-slate-300 px-4">
                        <h2 className="text-black font-semibold text-base">345</h2>
                        <p className="text-xs text-slate-500 font-light">Mengikuti</p>
                    </div>
                    <div className=" px-4">
                        <h2 className="text-black font-semibold text-base">909M</h2>
                        <p className="text-sm text-slate-500 font-light">Menyukai</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2 px-6 pb-3">
                <div className="w-32">
                    <ButtonProfile label="Sunting" smaller fullWidth/>
                </div>
                <div className="w-32">
                    <ButtonProfile label="Bagikan Profile" secondary smaller fullWidth/>
                </div>
                <button className="py-2 px-2 rounded-lg bg-slate-100">
                    <AiOutlineTwitter className='text-primary'/>
                </button>
                <button className="py-2 px-2 rounded-lg bg-slate-100">
                    <MdKeyboardArrowDown className='text-primary'/>
                </button>
            </div>
            <TabContent/>
        </div>
     );
}
 
export default Profile;