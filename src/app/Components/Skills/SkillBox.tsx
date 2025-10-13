import React from 'react'

interface SkillBoxProps {
    skill: {
        id: number
        name: string
        icon: string
        description: string
        level?: string
    }
}

const SkillBox = ({ skill }: SkillBoxProps) => {
  return (
    <div 
        className='rounded-sm h-12 w-12'
        title={`${skill.name} - ${skill.description}`}    
    >
    <img 
        src={skill.icon} 
        alt={skill.name}
        className='w-full h-full object-contain'
      />
    </div>
  )
}

export default SkillBox
