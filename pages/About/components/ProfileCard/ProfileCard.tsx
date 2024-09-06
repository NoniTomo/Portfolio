import { Avatar, Box, Typography } from '@src/shared/components'
import { useData } from '@src/shared/hooks/useData'

import styles from './ProfileCard.module.css'

export const ProfileCard = () => {
  const { info } = useData()
  const initial = (info[0].value as string[]).join(' ')
  return (
    <Box className={styles.card}>
      <Box className={styles.card_background} />
      <Box className={styles.card_avatar}>
        <Avatar component="div" className={styles.avatar} />
      </Box>
      <Box className={styles.card_content}>
        <Typography variant="h4">{initial}</Typography>
      </Box>
    </Box>
  )
}
