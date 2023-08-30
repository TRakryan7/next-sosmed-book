'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

const NovelSlider = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: {
          perView:4.5,
          spacing: 0,
        },
      })
    return ( 
        <>
            <section className="w-full py-8">
                <div className="px-4">
                    <div>
                        <h2 className="py-2 w-20 bg-primary text-sm font-semibold text-white rounded-2xl text-center">Romansa</h2>
                        <p className="text-sm text-slate-400 mt-1 mb-5">Kumpulan Cerita Romansa</p>
                    </div>
                </div>
                <div ref={ref} className="keen-slider w-full px-1">
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/mariagge.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/summer.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/sun.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/vibrate.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/energy.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/fall.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/kingdom.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/los-angeles.jpg'} />
                        </div>
                    </div>
                    <div className="keen-slider__slide" style={{ maxWidth: 86, minWidth: 86 }}>
                        <div className="relative w-20 h-32">
                            <Image alt='slider' className="object-cover" fill src={'/asset/novel/city.jpg'} />
                        </div>
                    </div>

                </div>
            </section>
        </>
     );
}
 
export default NovelSlider;