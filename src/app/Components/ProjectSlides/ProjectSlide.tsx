import React from 'react'
import { ProjectData } from './types'

interface ProjectSlideProps {
    project: ProjectData
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => {
    return (
        <div 
            id={project.id}
            className='carousel-item relative w-full h-150 overflow-hidden'
        >
            <div className='flex absolute w-[200%] h-full animate-slide'>
            {/* Image Looping */}
                <img
                    src={project.imageSrc}
                    alt='ProjectBg'
                    className='w-1/2 h-full object-fit pixelart'
                />

                <img
                    src={project.imageSrc}
                    alt='ProjectBg'
                    className='w-1/2 h-full object-fit pixelart'
                />
            </div>

            {/* Overlay to darken image */}
            <div className='absolute inset-0 bg-black/60 z-5'/>

            {/* Text Content */}
            <div className='absolute inset-0 flex flex-col items-start justify-center z-10 text-white px-12 left-[8%] bottom-[15%]'>
                <div className='max-w-lg'>
                    <h1 className='text-4xl font-bold mb-3'>{project.title}</h1>
                    <p className='text-lg'>{project.description}</p>
                </div>  
            </div>
        </div>
    )
}


export default ProjectSlide
