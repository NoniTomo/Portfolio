import { Card } from '@src/components'
import { Box, Typography } from '@src/shared/components'
import { useData } from '@src/shared/hooks/useData'

import { ProfileCard } from './components/ProfileCard/ProfileCard'
import { CardContent } from './components'

import styles from './About.module.css'

export const About = () => {
  const { info } = useData()
  return (
    <Box className={styles.container}>
      <Box className={styles.card}>
        <ProfileCard />
      </Box>
      {info.slice(1).map((infoCard) => (
        <Box key={infoCard.header} className={styles.card}>
          <Card.Content>
            <Card.Header>
              <Typography variant="h4">{infoCard.header}</Typography>
            </Card.Header>
            <Box>
              <CardContent
                data={infoCard.value}
                variant={infoCard.header === 'ФИО' ? 'row' : 'column'}
              />
            </Box>
          </Card.Content>
        </Box>
      ))}
    </Box>
  )
}
