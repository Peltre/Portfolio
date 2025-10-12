import React from 'react'
import ProjectCarousel from './Components/ProjectSlides/ProjectCarousel'
import { projectsData } from './Components/ProjectSlides/Utils/projectsData'

const page = () => {
  return (
    <main>
      <ProjectCarousel projects={projectsData}/>
    </main>
  )
}

export default page
