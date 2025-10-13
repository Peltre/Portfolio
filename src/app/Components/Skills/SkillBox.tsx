import React from 'react'
import { Skill } from './Utils/skill'

interface SkillBoxProps {
    skill: Skill
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
