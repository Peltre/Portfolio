import React from 'react'
import ProjectCarousel from './Components/ProjectSlides/ProjectCarousel'
import { projectsData } from './Components/ProjectSlides/Utils/projectsData'
import Skills from './Components/Skills/Skills'

const page = () => {
  return (
    <main>
      <ProjectCarousel projects={projectsData}/>
      <Skills />
    </main>
  )
}

export default page
