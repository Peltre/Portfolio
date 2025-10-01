import React from 'react'

import backgroundAsset from "../../Assets/kod_bg_asset.png"

const Proj1 = () => {
  return (
    <div id='proj1' className='carousel-item relative w-full h-150 overflow-hidden'>
        <div className='flex absolute w-[200%] h-full animate-slide'>
        {/* Image looping */}
            <img 
                src={backgroundAsset.src} 
                alt="Project BG" 
                className="w-1/2 h-full object-fit pixelart"
            />
            <img 
                src={backgroundAsset.src} 
                alt="Project BG" 
                className="w-1/2 h-full object-fit pixelart"
                />
            </div>

       {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 z-5'/>
        {/* Text Content */}
        <div className='absolute inset-0 flex flex-col items-start justify-center z-10 text-white px-12 left-[8%] bottom-[15%]'>
            <div className='max-w-lg'>
                <h1 className='text-4xl font-bold mb-3'>Knights Of Dango</h1>
                <p className='text-lg'>
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                    Hola este es el baile del tilin
                </p>
            </div>
        </div>
    </div>
  )
}

export default Proj1
