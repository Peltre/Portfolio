"use client";

import React, { useEffect, useState, useRef } from 'react'
import ProjectSlide from './ProjectSlide';
import { ProjectData } from './Utils/types';

interface ProjectSlideProps {
    projects: ProjectData[];
}

const ProjectCarousel: React.FC<ProjectSlideProps> = ({ projects }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const totalSlides = projects.length;

    const handleSlideSwitching = (direction: 'next' | 'prev') => {
        let newSlideIndex: number;

        if (direction === 'next') {
            newSlideIndex = (currentSlide + 1) % totalSlides;
        } else {
            newSlideIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        }

        const targetElement = document.getElementById(projects[newSlideIndex].id);
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
                        const slideIndex = projects.findIndex(
                            project => project.id === `#${entry.target.id}`
                        );
                        if (slideIndex !== -1) {
                            setCurrentSlide(slideIndex);
                        }
                    }
                });
            },
            { threshold: 0.5, root: carousel }
        );

        projects.forEach(project => {
            const element = document.getElementById(project.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [projects]);

    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(null, '', ' ')
        }
    }, []);

  return (
    <div className='relative w-full'>
        <div ref={carouselRef} className='carousel w-full h-150 overflow-hidden relative'>
            {/* Render slides dynamically */}
            {projects.map((project) => (
                <ProjectSlide key={project.id} project={project} />
            ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20'>             
                {/* Button to go to Previous Slide */}
                <button 
                    onClick={() => handleSlideSwitching('prev')} // When on Proj1, '❮' takes you to Proj2 (if using a looping structure)
                    className='imgCarouselButton btn btn-circle' // Added DaisyUI classes for style
                >
                    ❮
                </button>
                
                {/* Button to go to Next Slide */}
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
