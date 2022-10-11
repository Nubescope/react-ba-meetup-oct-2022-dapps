import { FC } from 'react'
import { Box, Button } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'

const ConnectOverlay: FC<{ onConnectPress?: () => void }> = ({ onConnectPress }) => {
  return (
    <Box
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '.95',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFF',
        border: '1px solid #DDD',
        borderRadius: '10px',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <p className={styles.description}>Please, connect your wallet to start investing</p>
      <Button colorScheme="blue" onClick={onConnectPress}>
        Connect
      </Button>
    </Box>
  )
}

export default ConnectOverlay
