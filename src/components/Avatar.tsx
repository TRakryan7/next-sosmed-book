import Image from "next/image";
import React from "react";

interface AvatarProps {
    images?: string
    normal?: boolean
    small?: boolean
    large?:boolean
}


const Avatar: React.FC<AvatarProps> = ({
    images,
    small,
    large,
    normal
}) => {
    return ( 
        <div>
            <div className={`relative
                            ${normal ? 'w-[4.05rem]' : ''}
                            ${normal ? 'h-[4.05rem]':''}
                            ${small ? 'w-12':''}
                            ${small ? 'h-12':''}
                            ${large ? 'w-24':''}
                            ${large ? 'h-24':''}
                            rounded-full
                            overflow-hidden
                            object-cover`}>
                <Image alt='story' className="object-cover" fill src={images || '/asset/images/placeholder.png'} />
            </div>
        </div>
     );
}
 
export default Avatar;