import { FC } from 'react'
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoadingOverlay from './LoadingOverlay'

const DaiBox: FC<{ balance?: string, isLoading: boolean, onDepositPress?: () => void }> = ({
  balance,
  isLoading,
  onDepositPress,
}) => {
  return (
    <Box className={styles.card} display="flex" flexDir="column" alignItems="center">
      <Stat mb="3" textAlign="center">
        <StatLabel>DAI</StatLabel>
        <StatNumber>${balance || '0.00'}</StatNumber>
      </Stat>
      <Image alt="DAI logo" src="/dai.svg" width={100} height={100} />
      <Button mt="5" disabled={!onDepositPress} onClick={onDepositPress}>
        Deposit
      </Button>
      {isLoading && <LoadingOverlay />}
    </Box>
  )
}

export default DaiBox
