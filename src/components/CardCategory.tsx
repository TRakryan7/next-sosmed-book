'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
interface CardCategoryProps{
    data: {};
    index: number
    
}
const CardCategory: React.FC<CardCategoryProps> = ({
    data, index
}) => {
    const [isZero, setIsZero] = useState(1)

    // const checkZero = (num: number) => {

    //     if (num % 3 == 0 ) {
    //         setIsZero(0)
    //     } else {
    //         // setIsZero(1)
    //         if (num != 2 && num % 2 == 0) {
    //             setIsZero(0)
    //         } else {
    //             setIsZero(1)
    //         }

    //     }

    // }

    // useEffect(() => {
    //     checkZero(index)
    // },[])
    return ( 

    <>
        {
            data?.type === 0  ? 
            <div className="w-44 h-36 shadow-lg transition cursor-pointer relative">
                <div className="w-full h-full relative overflow-hidden rounded-lg">
                    <div className="absolute w-full top-[40%] z-20 text-white ">
                        <h2 className="text-sm font-semibold drop-shadow-2xl text-center">{ data.title }</h2>
                    </div>
                    <div className="absolute  z-10 w-full h-full bg-black opacity-30"></div>
                    <Image alt="testing" className="object-cover" fill src={data.image} />
                </div>
            </div>
            
            :
            
            <div className="w-36 h-36 shadow-lg transition cursor-pointer relative">
                <div className="w-full h-full relative overflow-hidden rounded-lg">
                    <div className="absolute w-full top-[40%] z-20 text-white ">
                        <h2 className="text-sm font-semibold drop-shadow-2xl text-center">{ data.title }</h2>
                    </div>
                    <div className="absolute  z-10 w-full h-full bg-black opacity-30"></div>
                    <Image alt="testing" className="object-cover" fill src={data.image} />
                </div>
                
            </div>
            
           
        }
        </>
     );
}
 
export default CardCategory;