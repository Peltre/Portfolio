import React from 'react'
import ProjectCarousel from './Components/ProjectCarousel'
import { projectsData } from './Components/ProjectSlides/projectsData'

const page = () => {
  return (
    <main>
      <ProjectCarousel projects={projectsData}/>
    </main>
  )
}

export default page
