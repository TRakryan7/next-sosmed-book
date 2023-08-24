import Image from "next/image";
import React from "react";

interface AvatarProps {
    images?:string
}


const Avatar: React.FC<AvatarProps> = ({
    images
}) => {
    return ( 
        <div>
            <div className="relative w-[4.05rem] h-[4.05rem] rounded-full overflow-hidden">
                <Image alt='story' className="" fill src={images || '/asset/images/placeholder.png'} />
            </div>
        </div>
     );
}
 
export default Avatar;