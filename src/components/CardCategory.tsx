import Image from "next/image";
interface CardCategoryProps{
    data:{}
}
const CardCategory: React.FC<CardCategoryProps> = ({
    data
}) => {
    return ( 
        <div className="w-28 h-28 shadow-lg transition hover:w-32 cursor-pointer relative">
            <div className="w-full h-full relative overflow-hidden rounded-lg">
                <h2 className="absolute text-center top-[40%] left-[23%] z-20 text-white text-sm font-semibold drop-shadow-2xl">{ data.title }</h2>
                <div className="absolute  z-10 w-full h-full bg-black opacity-30"></div>
                <Image alt="testing" className="object-cover" fill src={data.image} />
            </div>
            
        </div>
     );
}
 
export default CardCategory;