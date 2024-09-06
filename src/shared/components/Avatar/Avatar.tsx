import { Box } from '@src/shared/components'

import styles from './Avatar.module.css'

export const Avatar = ({ ...props }) => <Box component="img" className={styles.container} {...props} />
