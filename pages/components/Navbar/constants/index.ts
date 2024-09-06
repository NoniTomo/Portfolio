import { ReactComponent as AboutIcon } from '@assets/icons/AboutMe.svg'
import { ReactComponent as ProjectsIcon } from '@assets/icons/Projects.svg'
import { ROUTES } from '@src/constants'

export const buttons = [
  {
    to: ROUTES.ABOUT,
    icon: AboutIcon,
    text: 'Обо мне'
  },
  {
    to: ROUTES.PROJECTS,
    icon: ProjectsIcon,
    text: 'Мои проекты'
  }
]
