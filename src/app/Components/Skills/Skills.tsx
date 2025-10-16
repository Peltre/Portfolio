"use client";

import React, { useState } from 'react'
import SkillBox from './SkillBox'
import SkillDetail from './SkillDetail'
import { skillsData } from './Utils/skillsData'
import { Skill } from './Utils/skill'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skillsData[0])
  return (
    <div className='min-h-screen p-8'>
      <div className='container mx-0 lg:mx-15 mt-15 py-12 lg:py-16'>
        {/* Grid */}
        <div className='flex justify-center'>    
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
                {/* Left Side - Text Container */}
                <div className='flex flex-col'>
                    <h1 className='text-white font-bold text-4xl'>Skills</h1>
                    <p className='text-lg pt-5 mb-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4'>
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
            <div className='flex items-center justify-center lg:justify-start'>
                {selectedSkill && (
                    <SkillDetail skill={selectedSkill} />
                )}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
