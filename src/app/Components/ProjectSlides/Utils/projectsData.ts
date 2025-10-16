import { ProjectData } from "./types";

export const projectsData: ProjectData[] = [
  {
    id: 'proj1',
    title: 'Knights of Dango',
    description: 'Un juego de aventuras épico donde controlas caballeros en busca del legendario Dango. Desarrollado con Unity y C#, presenta mecánicas de combate fluidas y un sistema de progresión profundo.',
    imageSrc: '/images/kod_bg_asset.png',
    technologies: ['Unity', 'C#', 'Blender', '2D Animation'],
    link: 'https://tu-proyecto1.com',
  },
  {
    id: 'proj2',
    title: 'Proyecto 2',
    description: 'Descripción de tu segundo proyecto. Aquí puedes explicar las características principales, los desafíos que enfrentaste y las soluciones que implementaste.',
    imageSrc: '/images/placeholder.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    link: 'https://tu-proyecto2.com',
  }
];
