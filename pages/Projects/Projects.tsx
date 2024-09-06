import { Link } from 'react-router-dom'
import { ReactComponent as GithubIcon } from '@assets/icons/Github.svg'
import { Card } from '@src/components'
import { ROUTES } from '@src/constants'
import { Typography } from '@src/shared/components'
import { useData } from '@src/shared/hooks/useData'
import clsx from 'clsx'

import styles from './Projects.module.css'

export const Projects = () => {
  const { projects } = useData()

  return (
    <>
      {projects.map((project) => (
        <Card key={project.id}>
          <Card.Media alt={project.media} src={`/assets/images/projects/${project.media}`} />
          <Card.Content className={styles.card__content}>
            <Card.Header>
              <Link
                className={clsx(styles.card__header, styles.link__text)}
                to={`${ROUTES.PROJECT}`.replace(':id', project.id)}
              >
                <Typography variant="h3" bold>
                  {project.name}
                </Typography>
              </Link>
            </Card.Header>
            <Card.Description>
              <Link className={styles.link} to={project.github}>
                <GithubIcon className={styles.link__icon} />
                <Typography className={styles.link__text} variant="p">
                  GitHub
                </Typography>
              </Link>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </>
  )
}
