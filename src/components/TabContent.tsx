'use client'
import { useEffect } from 'react'

import { HiMiniSquares2X2 } from 'react-icons/hi2'
import { BsCameraVideo } from 'react-icons/bs'
import { PiBookOpenTextBold } from 'react-icons/pi'
import { FaRegImage } from 'react-icons/fa'
import CardPhotoTumbnail from './CardTumbnail/CardPhotoTumbnail'
import { dataPhotoPosting } from '@/testingData'


const TabContent = () => {

    const dataPhoto = dataPhotoPosting;
    useEffect(() => {
        import('preline')
      }, [])
    return ( 
        <div className="sticky">
                <div className="">
                    <nav className="flex w-full justify-around mt-4 items-center" aria-label="Tabs" role="tablist">
                        <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-24 py-2 text-center  items-center gap-2  border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-slate-400 border-solid  active" id="basic-tabs-item-1" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
                            <HiMiniSquares2X2 className="w-5 h-5 m-auto"/>
                        </button>
                        <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-24 py-2 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-slate-400 " id="basic-tabs-item-2" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
                            <PiBookOpenTextBold className="w-5 h-5 m-auto"/>
                        </button>
                        <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-24 py-2 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-slate-400 " id="basic-tabs-item-3" data-hs-tab="#basic-tabs-3" aria-controls="basic-tabs-3" role="tab">
                            <FaRegImage className="w-5 h-5 m-auto"/>
                        </button>
                        <button type="button" className="font-semibold hs-tab-active:text-primary hs-tab-active:border-primary w-24 py-2 px-1  items-center gap-2 border-b-[1px] boder-gray-400 text-sm whitespace-nowrap text-slate-400 " id="basic-tabs-item-4" data-hs-tab="#basic-tabs-4" aria-controls="basic-tabs-4" role="tab">
                            <BsCameraVideo className="w-5 h-5 m-auto"/>
                        </button>
                    </nav>
                </div>

                <div className="pt-4 px-4 h-full w-full">
                    <div id="basic-tabs-1" className='' role="tabpanel" aria-labelledby="basic-tabs-item-1">
                        <div className='flex flex-wrap gap-2'>
                            Test 1
                        </div>    
                    </div>
                    <div id="basic-tabs-2" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-2">
                        Test 2
                    </div>
                    <div id="basic-tabs-3" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-3">
                        <div className='flex flex-wrap gap-2'>
                            {
                                dataPhoto.map((item: any, index: number) => {
                                    return (
                                        <div key={index}>
                                            <CardPhotoTumbnail image={item.post} url={ item.slug } />                                               
                                        </div>    
                                    )  
                                })
                            }
                        </div>
                    </div>
                    <div id="basic-tabs-4" className="hidden" role="tabpanel" aria-labelledby="basic-tabs-item-4">
                        Test 4
                    </div>
                </div>
            
        </div>
     );
}
 
export default TabContent;