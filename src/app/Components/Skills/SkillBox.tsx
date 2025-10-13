import React from 'react'
import { Skill } from './Utils/skill'

interface SkillBoxProps {
    skill: Skill
    isSelected: boolean
    onClick: () => void
}

const SkillBox = ({ skill, isSelected, onClick }: SkillBoxProps) => {
  return (
    <div
        onClick={onClick}
        className={`rounded-sm h-8 w-8 lg:h-16 lg:w-16 flex items-center justify-center cursor-pointer transition-all hover:scale-110 p-2 ${
            isSelected
                ? 'bg-amber-400 shadow-lg ring-2 ring-amber-500'
                : 'bg-white hover:shadow-lg'
        }`}
        title={skill.name}
    >
        <img 
            src={skill.icon}
            alt={skill.name}
            className='w-full h-full object-contains'
        />
    </div>
  )
}

export default SkillBox
