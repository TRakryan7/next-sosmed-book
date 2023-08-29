import Image from "next/image";
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

const NovelCard = () => {
    return ( 
        <>
            <section className="w-full px-8 pt-8 pb-5 bg-white">
                <div className="flex flex-row gap-7">
                    <div>
                        <div className="relative w-24 h-36">
                            <Image alt={'banner'} className="object-cover" fill src={'/asset/novel/coffee.jpg'} />
                        </div>
                    </div>
                    <div className="w-2/3">
                        <div className="mt-4 ">
                            <h2 className="text-lg font-semibold">Coffee and Life</h2>
                            <div className="flex flex-wrap gap-2   mt-3">
                                <div className="py-1 w-16 bg-green-500 text-xs font-semibold text-white rounded-2xl text-center">sc-fi</div>
                                <div className="py-1 w-16 bg-zinc-600 text-xs font-semibold text-white rounded-2xl text-center">mystery</div>
                                <div className="py-1 w-16 bg-red-600 text-xs font-semibold text-white rounded-2xl text-center">action</div>
                                <div className="py-1 w-16 bg-orange-600 text-xs font-semibold text-white rounded-2xl text-center">drama</div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <AiOutlinePlus/>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-xs text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque doloribus quasi repellendus hic, cum praesentium explicabo reprehenderit ut, reiciendis eius quos! Explicabo quam reprehenderit ab impedit ipsa, maiores voluptatem.
                    </p>
                </div>
                <div className="flex justify-center items-center text-sm mt-4 cursor-pointer">
                    <span className="">Baca Selanjutnya</span>
                    <div><IoIosArrowForward/></div>
                </div>
            </section>
        </>
     );
}
 
export default NovelCard;