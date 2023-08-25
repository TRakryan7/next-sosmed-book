import Image from "next/image";
import React from "react";

interface AvatarProps {
    images?: string
    small?:boolean
}


const Avatar: React.FC<AvatarProps> = ({
    images,
    small
}) => {
    return ( 
        <div>
            <div className={`relative
                            ${small ? 'w-12':'w-[4.05rem]'}
                            ${small ? 'h-12':'h-[4.05rem]'}
                            rounded-full
                            overflow-hidden
                            object-cover`}>
                <Image alt='story' className="object-cover" fill src={images || '/asset/images/placeholder.png'} />
            </div>
        </div>
     );
}
 
export default Avatar;