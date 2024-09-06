import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Error, Project, Projects, Root } from '@pages/index'

import { ROUTES } from './constants'

import '@styles/reset.css'
import '@styles/styles.css'
import '@styles/fonts.css'

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: ROUTES.ABOUT,
        element: <About />
      },
      {
        path: ROUTES.PROJECTS,
        element: <Projects />
      },
      {
        path: ROUTES.PROJECT,
        element: <Project />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])

export const App = () => <RouterProvider router={router} />
