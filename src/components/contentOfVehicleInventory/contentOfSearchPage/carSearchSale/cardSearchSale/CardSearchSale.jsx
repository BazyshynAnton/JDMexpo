import { Box } from '@mui/material'

import styles from '../../../carSale/cardSale/CardSale.module.css'

const CardSale = ({ card }) => {
  return (
    <Box className={styles.mainCardContainer}>
      <Box className={styles.imgContainer}>
        <Box className={styles.imgAvailableSoldContainer}>
          <img src={card.imgTwo} alt="available/sold" />
        </Box>
        <img src={card.img} alt={card.text} />
      </Box>
      <Box className={styles.textContainer}>
        <p>{card.text}</p>
        <Box className={styles.btnContainer}>
          <button>learn more</button>
        </Box>
      </Box>
    </Box>
  )
}

export default CardSale
