import { Box, Typography } from '@src/shared/components'
import clsx from 'clsx'

import styles from './CardContent.module.css'

export type CardContentProps = {
  data: unknown[] | string
  variant: 'row' | 'column'
}

export const CardContent = ({ data, variant = 'column' }: CardContentProps) => {
  if (Array.isArray(data) === true) {
    return (
      <Box
        className={clsx(
          styles.card__list,
          variant === 'row' ? styles.card__list_row : styles.card__list_column
        )}
      >
        {data.map((element, index) => (
          <CardContent key={index} data={element as unknown[] | string} variant={variant} />
        ))}
      </Box>
    )
  } else {
    return <Typography variant="p">{data}</Typography>
  }
}
