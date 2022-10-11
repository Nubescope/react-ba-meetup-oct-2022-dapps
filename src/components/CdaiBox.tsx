import { FC } from 'react'
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoadingOverlay from './LoadingOverlay'

const CdaiBox: FC<{ balance: string, isLoading: boolean, onWithdrawPress?: () => void }> = ({
  balance,
  isLoading,
  onWithdrawPress,
}) => {
  return (
    <Box className={styles.card} display="flex" flexDir="column" alignItems="center">
      <Stat mb="3" textAlign="center">
        <StatLabel>Compound DAI</StatLabel>
        <StatNumber>${balance}</StatNumber>
      </Stat>
      <Image alt="Compound logo" src="/compound.svg" width={100} height={100} />
      <Button mt="5" disabled={!onWithdrawPress} onClick={onWithdrawPress}>
        Withdraw
      </Button>
      {isLoading && <LoadingOverlay />}
    </Box>
  )
}

export default CdaiBox
