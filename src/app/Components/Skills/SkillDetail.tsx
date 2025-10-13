import React from 'react'
import { Skill } from './Utils/skill'

interface SkillDetailProps {
    skill: Skill
}

const SkillDetail = ({ skill }: SkillDetailProps) => {
  return (
    <div>
      {/* Big Icon */}
      <div className='flex justify-center mb-6'>
        <div className='bg-gradient-to-br from-amber-100 to amber-200 rounded-sm p-8 shadow-lg'>
            <img
                src={skill.icon}
                alt={skill.name}
                className='w-32 h-32 object-contain overflow-hidden'
            />
        </div>
      </div>

      {/* Name */}
      <h2 className='text-3xl font-bold text-white text-center mb-2'>
        {skill.name}
      </h2>

      <p className='text-white text-center mb-6 max-w-md'> 
        {skill.description}
      </p>

      {/* Level */}
      <div className='flex justify-center mb-6'>
        <span className='bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
            {skill.level}
        </span> 
      </div>

      {/* Progress bar */}
      <div className='w-full max-w-md'>
        <div className='flex justify-between text-sm text-white mb-2'>
            <span>Nivel de dominio</span>
            <span>{skill.level}</span>
        </div>

        <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
                className='bg-gradient-to-r from-amber-400 to-amber-600h-2 rounded-full transtion-all duration-500'
                style={{
                    width: skill.level === 'Advanced' ? '90%' :
                           skill.level === 'Intermediate' ? '60%' : '30%' 
                }}
            >
            </div>
        </div>
      </div>
    </div>
  )
}

export default SkillDetail
