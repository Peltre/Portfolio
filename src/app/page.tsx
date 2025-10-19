import React from 'react'
import ProjectCarousel from './Components/ProjectSlides/ProjectCarousel'
import { projectsData } from './Components/ProjectSlides/Utils/projectsData'
import Skills from './Components/Skills/Skills'
import ProjectSelector from './Components/ProjectSelector/ProjectSelector'

const page = () => {
  return (
    <main>
      <ProjectCarousel projects={projectsData}/>
      <Skills />
      <ProjectSelector projects={projectsData}/>
    </main>
  )
}

export default page
