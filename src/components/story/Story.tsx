
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Avatar from '../Avatar';
import { dataStory } from "@/testingData";

function Story() {
    const dataGet = dataStory;

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "free",
        slides: {
          perView: 4,
          spacing: 0,
        },
        
        
    })
    

    return ( 
        <section className="border-b-[1px] w-full border-solid h-36">
            <div ref={ref} className=" w-full h-32  py-2 keen-slider">
                <div className="keen-slider__slide px-4 mt-6 w-[4rem] flex flex-col">
                    <div className="mx-auto">
                        <Avatar />
                    </div>    
                    <p className="text-xs text-black font-semibold mx-auto mt-1">My Story</p>
                </div>
                {
                    dataStory.map((item: any, index: number) => {
                        return (
                            <div key={index} className="keen-slider__slide  mt-6 w-[4rem] flex flex-col">
                                <div className="mx-auto">
                                    <Avatar images={item.image} />
                                </div>    
                                <p className="text-xs text-black font-semibold mx-auto mt-1">{ item.name }</p>
                            </div>
                        )
                    })
                }

            </div>
      </section>      
     );
}
 
export default Story;