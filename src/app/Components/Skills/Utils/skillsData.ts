// File to manage the information rendered under the technologies & skills
import { Skill } from './skill'

export const skillsData: Skill[] = [
    {
        id: 1,
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: 'Biblioteca de JavaScript para construir interfaces de usuario',
        level: 'Avanzado',
    },
    {
        id: 2,
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'Entorno de ejecución de JavaScript del lado del servidor',
        level: 'Intermedio'
    },
    {
        id: 3,
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        description: 'Superset de JavaScript con tipado estático',
        level: 'Avanzado'
    },
    {
        id: 4,
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'Lenguaje de programación',
        level: 'Avanzado'
    },
    {
        id: 5,
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'Lenguaje de marcado',
        level: 'Avanzado'
    },
    {
        id: 6,
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        description: 'Hojas de estilo',
        level: 'Avanzado'
    },
    {
        id: 7,
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'Control de versiones',
        level: 'Intermedio'
    },
    {
        id: 8,
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        description: 'Base de datos NoSQL',
        level: 'Intermedio'
    },
    {
        id: 9,
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Lenguaje de programación',
        level: 'Básico'
    }
]