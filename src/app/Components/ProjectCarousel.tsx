"use client";

import React, { useEffect, useState, useRef } from 'react'
import Proj1 from './ProjectSlides/Proj1';
import Proj2 from './ProjectSlides/Proj2';

const ProjectCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Array containing slide ids
    const slideIds = ['#proj1', '#proj2'];
    const totalSlides = slideIds.length;

    const handleSlideSwitching = (direction: 'next' | 'prev') => {
        let newSlideIndex: number;

        if (direction === 'next') {
            newSlideIndex = (currentSlide + 1) % totalSlides;
        } else {
            newSlideIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        }

        const targetElement = document.querySelector(slideIds[newSlideIndex]);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            setCurrentSlide(newSlideIndex);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const slideIndex = slideIds.findIndex(
                            id => id === `#${entry.target.id}`
                        );
                        if (slideIndex !== -1) {
                            setCurrentSlide(slideIndex);
                        }
                    }
                });
            },
            { threshold: 0.5, root: carousel }
        );

        slideIds.forEach(id => {
            const element = document.querySelector(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

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
                onClick={() => handleSlideSwitching('prev')} // When on Proj1, '❮' takes you to Proj2 (if using a looping structure)
                className='imgCarouselButton btn btn-circle' // Added DaisyUI classes for style
            >
                ❮
            </button>
            
            {/* Button to go to Next Slide (Proj2) */}
            <button 
                onClick={() => handleSlideSwitching('next')}
                className='imgCarouselButton btn btn-circle' // Added DaisyUI classes for style
            >
                ❯
            </button>
        </div>
    </div>
  )
}

export default ProjectCarousel
