import React from 'react'
import { ProjectData } from '../ProjectSlides/Utils/types'

interface ProjectCardProps {
  project: ProjectData;
  isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive })  => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-110
        ${
          isActive
            ? 'w-[350px] md:w-[450px] h-[500px] md:h-[550px]'
            : 'w-[300px] md:w-[380px] h-[450px] md:h-[500px] pointer-events-none'
        }`}
    > 
      {/* Background image */}
      <img
        src={project.imageSrc}
        alt={project.title}
        className='absolute inset-0 w-full h-full object-cover pixelart'
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content (ONLY IF ACTIVE)*/}
      {isActive && (
        <div className='absolute inset-0 flex flex-col justify-end p-6'> 
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg'>
            {project.title}
          </h3>
          <p className='text-gray-200 text-sm mb-4 line-clamp-3 drop-shadow-md'>
            {project.description}
          </p>
          <button className='text-sm italic underline hover:font-bold cursor-pointer'>
            See Details
          </button>
        </div>
      )} 
      
         
      
    </div>
  )
}

export default ProjectCard
