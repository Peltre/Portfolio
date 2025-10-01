"use client";

import React, { useEffect } from 'react'
import Proj1 from './ProjectSlides/Proj1';
import Proj2 from './ProjectSlides/Proj2';

const ProjectCarousel = () => {

    const handleSlideSwitching = (E: React.MouseEvent<HTMLButtonElement>, slideId:string) => {
        E.preventDefault();
        const targetElement = document.querySelector(slideId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(null, '', ' ')
        }
    }, []);

  return (
    <div className='carousel w-full h-150 overflow-hidden'>
        {/* First Project Slide - Knights of Dango */}
        <Proj1 />
        <Proj2 />
    <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20'> 
            {/* Button to go to Proj2 (Next) -> Proj1 (Previous) */}
            {/* Targeting the IDs from Proj1.tsx and Proj2.tsx: #proj1 and #proj2 */}
            
            {/* Button to go to Previous Slide (Proj2) */}
            <button 
                onClick={(e) => handleSlideSwitching(e, '#proj2')} // When on Proj1, '❮' takes you to Proj2 (if using a looping structure)
                className='imgCarouselButton btn btn-circle' // Added DaisyUI classes for style
            >
                ❮
            </button>
            
            {/* Button to go to Next Slide (Proj2) */}
            <button 
                onClick={(e) => handleSlideSwitching(e, '#proj1')} 
                className='imgCarouselButton btn btn-circle' // Added DaisyUI classes for style
            >
                ❯
            </button>
        </div>
    </div>
  )
}

export default ProjectCarousel
