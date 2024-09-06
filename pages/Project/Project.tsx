import { Link, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeftIcon } from '@assets/icons/ArrowLeft.svg'
import { ReactComponent as GithubIcon } from '@assets/icons/Github.svg'
import { Card } from '@src/components'
import { ROUTES } from '@src/constants'
import { Typography } from '@src/shared/components'
import { useData } from '@src/shared/hooks/useData'
import clsx from 'clsx'

import styles from './Project.module.css'

export const Project = () => {
  const params = useParams()
  const { projects } = useData()
  const project = projects.find((project) => project.id == params.id!)!
  return (
    <>
      <Link className={clsx(styles.link, styles.toback)} to={ROUTES.PROJECTS}>
        <ArrowLeftIcon className={styles.link__icon} />
        <Typography variant="p" className={styles.link__text}>
          Назад
        </Typography>
      </Link>
      <Card key={project.id}>
        <Card.Media
          component="img"
          alt={project.media}
          src={`/assets/images/projects/${project.media}`}
        />
        <Card.Content>
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
            <Typography variant="p" align="justify">
              {project.description}
            </Typography>
            <Link className={styles.link} to={project.github}>
              <GithubIcon className={styles.link__icon} />
              <Typography className={styles.link__text} variant="p">
                GitHub
              </Typography>
            </Link>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}
