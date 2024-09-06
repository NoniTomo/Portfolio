import { Outlet } from 'react-router-dom'
import { Box } from '@src/shared/components'

import { Footer, Navbar } from './'

import styles from './Root.module.css'

export const Root = () => (
  <Box>
    <Box className={styles['wrapper__nav']}>
      <Navbar />
    </Box>
    <Box className={styles.wrapper}>
      <Box className={styles['wrapper__content']}>
        <Outlet />
      </Box>
      <Footer className={styles.footer} />
    </Box>
  </Box>
)
