import React, { useState, useEffect, useRef } from 'react'
import { ProjectData } from '../ProjectSlides/Utils/types'


interface ProjectCarousel3DProps {
    projects: ProjectData[];
}

const ProjectSelector: React.FC<ProjectCarousel3DProps> = ({ projects }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const totalSlides = projects.length;

    // Nav function (same as project carousel) 
    const handleSlideSwitching = (direction: 'next' | 'prev') => {
        let newSlideIndex: number;
        if (direction === 'next') {
            newSlideIndex = (currentSlide + 1) % totalSlides;
        } else {
            newSlideIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        }
        setCurrentSlide(newSlideIndex)
    } 

    // Limpiar hash de URL
    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(null, '', ' ');
        }
    }, []);

    const getVisibleProjects = () => {
        const prev = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        const next = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;

        return {
            prev:projects[prev],
            current:projects[currentSlide],
            next: projects[next]
        };
    };

const { prev, current, next } = getVisibleProjects();

  return (
    <div className='min-h-screen'>
        <div className='w-full max-w-7xl'>
            <h1 className='text-4xl md:text-5xl font-bold text-white text-center mb-12'>
                Featured Projects
            </h1>

            {/* Carousel Container */}
            <div ref={carouselRef} className='relative h-[600px] flex items-center justify-center'>
                {/* Previous Project (left side) */}
                <div
                    className='absolute left-0 md:left-10 transition-all duration-500 cursor-pointer'
                    style={{
                        transform: 'scale(0.7) translateX(-10%)',
                        opacity: 0.4,
                        zIndex: 1
                    }}
                    onClick={() => handleSlideSwitching('prev')}
                >
                    {/*PLACEHOLDER FOR PROJECT CARD*/}
                </div>

                {/* Current Selected Project (Center) */}
                <div
                    id={current.id}
                    className='relative transition-all duration-500'
                    style={{
                        transform: 'scale(1)',
                        opacity: 1,
                        zIndex: 10
                    }}
                >
                    {/* PLACEHOLDER PROJ CARD PROJ={CURRENT} ISaCTIVE={TRUE} */}
                </div>

                {/* Next Project, (right) */}
                <div
                    className='absolute right-0 md:right-10 transition-all duration-500 cursor-pointer'
                    style={{
                        transform: 'scale(0.7) translateX(10%)',
                        opacity: 0.4,
                        zIndex: 1
                    }}
                    onClick={() => handleSlideSwitching('next')}
                >
                    {/* PLACEHOLDER FOR PROJECT CARD PROJ=NEXT ISACTIVE=FALSE */}
                </div>

                {/* SLIDE NAV BUTTONS */}
                <button
                    onClick={() => handleSlideSwitching('prev')}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label='Previous Projects'    
                >
                    ❮
                </button>

                <button
                    onClick={() => handleSlideSwitching('next')}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label='Next Project'
                >
                    ❯
                </button>

                {/* Indicators (UX friendly) */}
                <div className='flex justify-center gap-2 mt-8'>
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300
                                ${index === currentSlide
                                    ? 'w-8 bg-purple-400'
                                    : 'w-2 bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectSelector
