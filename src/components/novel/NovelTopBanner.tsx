'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";

const NovelTopBanner = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        rtl: false,
        slides: {
          perView: 'auto',
        },
      })
    return ( 
        <>
            <section ref={ref} className="keen-slider my-7" style={{ maxWidth: 1000 }}>
                <div className="keen-slider__slide pl-4 flex flex-col" style={{ maxWidth: 310, minWidth: 310 }}>
                    <div className="w-72">
                        <h2 className="font-semibold text-lg">Senyuman Seorang Kakek</h2>
                        <p className="font-light text-xs mt-1 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium.</p>
                    </div>
                    <div className="relative mt-2 h-40 w-72 overflow-hidden rounded-2xl">
                        <Image alt='banner' className="object-cover" fill src={'/asset/banner/old_man.jpg'}/>
                    </div>
                </div>
                <div className="keen-slider__slide pl-4 flex flex-col" style={{ maxWidth: 310, minWidth: 310 }}>
                    <div className="w-72">
                        <h2 className="font-semibold text-lg">Gunung dan Sunrise</h2>
                        <p className="font-light text-xs mt-1 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium.</p>
                    </div>
                    <div className="relative mt-2 h-40 w-72 overflow-hidden rounded-2xl">
                        <Image alt='banner' className="object-cover" fill src={'/asset/banner/mountain.jpg'}/>
                    </div>
                </div>
                <div className="keen-slider__slide pl-4 flex flex-col" style={{ maxWidth: 310, minWidth: 310 }}>
                    <div className="w-72">
                        <h2 className="font-semibold text-lg">Seribu Bintang Disenyummu</h2>
                        <p className="font-light text-xs mt-1 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium.</p>
                    </div>
                    <div className="relative mt-2 h-40 w-72 overflow-hidden rounded-2xl">
                        <Image alt='banner' className="object-cover" fill src={'/asset/banner/stars.jpg'}/>
                    </div>
                </div>
                <div className="keen-slider__slide pl-4 flex flex-col" style={{ maxWidth: 310, minWidth: 310 }}>
                    <div className="w-72">
                        <h2 className="font-semibold text-lg">Para Petualang</h2>
                        <p className="font-light text-xs mt-1 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium.</p>
                    </div>
                    <div className="relative mt-2 h-40 w-72 overflow-hidden rounded-2xl">
                        <Image alt='banner' className="object-cover" fill src={'/asset/banner/nature.jpg'}/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default NovelTopBanner;