"use client";

import React, { useState } from 'react'
import SkillBox from './SkillBox'
import SkillDetail from './SkillDetail'
import { skillsData } from './Utils/skillsData'
import { Skill } from './Utils/skill'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skillsData[0])
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-6 py-12 lg:py-16'>
        <h1 className='text-white font-bold text-4xl'>Skills</h1>
        {/* Left Side - Text Container */}
        <div className='grid grid-cols-2 gap-8 items-center'>
            <div className='flex flex-col'>
                <p className='text-lg pt-5 mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className='grid grid-cols-6 gap-y-10'>
                    {skillsData.map((skill) =>  (
                        <SkillBox 
                            key={skill.id}
                            skill={skill}
                            isSelected={selectedSkill?.id === skill.id}
                            onClick={() => setSelectedSkill(skill)}
                        />
                    ))}
                </div> 
            </div>

            {/* Right Side - Skill Detail */}
            <div className='flex items-center justify-center w-full'>
                {selectedSkill && (
                <div className='w-full max-w-md mx-auto'>
                    <SkillDetail skill={selectedSkill} />
                </div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
