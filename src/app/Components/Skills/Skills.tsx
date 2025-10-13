import React from 'react'
import SkillBox from './SkillBox'
import { skillsData  } from './Utils/skillsData'


const Skills = () => {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-6 py-12 lg:py-16'>
        {/* Text Container */}
        <div className='grid grid-cols-2 items-center'>
            <div className='flex flex-col'>
                <h1 className='text-white font-bold text-4xl'>Skills</h1>
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
                        />
                    ))}
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
