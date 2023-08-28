import Link from "next/link";
import Image from "next/image";
import React from "react";

interface CardPhotoTumbnailProps{
    image?: string
    url?: string 
}

const CardPhotoTumbnail: React.FC<CardPhotoTumbnailProps> = ({
    image,
    url
}) => {
    return ( 
        <Link href={url}>
            <div className="relative w-28 h-28">
                <Image alt='poscard' fill src={image} />
            </div>
        </Link>
     );
}
 
export default CardPhotoTumbnail;