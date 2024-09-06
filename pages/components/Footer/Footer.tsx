import { Link } from 'react-router-dom'
import { ReactComponent as GithubIcon } from '@assets/icons/Github.svg'
import { ReactComponent as VkIcon } from '@assets/icons/Vk.svg'
import type { BoxProps } from '@src/shared/components'
import { Box, Typography } from '@src/shared/components'
import { useData } from '@src/shared/hooks/useData'
import clsx from 'clsx'

import styles from './Footer.module.css'

export type FooterProps = {} & BoxProps<'div'>

export const Footer = ({ ...props }: FooterProps) => {
  const { contacts } = useData()
  return (
    <Box component="footer" {...props}>
      <Link className={clsx(styles.link, styles.toback)} to={contacts[0].link}>
        <VkIcon className={styles.link__icon} />
        <Typography variant="h5" className={styles.link__text}>
          {contacts[0].resource}
        </Typography>
      </Link>
      <Link className={clsx(styles.link, styles.toback)} to={contacts[0].link}>
        <GithubIcon className={styles.link__icon} />
        <Typography variant="h5" className={styles.link__text}>
          {contacts[1].resource}
        </Typography>
      </Link>
    </Box>
  )
}
