import { Box, Skeleton } from '@mantine/core'

import styles from './ProfileDataCard.module.css'

export const ProfileDataCardSkeleton = () => (
  <Box className={styles.card}>
    {Array.from({ length: 6 }, (_, index) => (
      <Box key={index} className={styles.card_section}>
        <Skeleton width="24" height="24" />
        <Box>
          <Skeleton width="80" height="12" m="2 0" />
          <Skeleton width="110" height="18" m="7 0" />
        </Box>
      </Box>
    ))}
  </Box>
)
