import { FC } from 'react'
import { Box, Button } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'
import LoadingOverlay from './LoadingOverlay'

const AuthorizeCompoundOverlay: FC<{ isLoading: boolean, onAuthorizePress?: () => void }> = ({
  isLoading,
  onAuthorizePress,
}) => {
  if (isLoading) {
    return <LoadingOverlay />
  }

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
      <p className={styles.description}>
        In order to start investing you need to authorize Compound to access your DAI
      </p>
      <Button colorScheme="red" onClick={onAuthorizePress}>
        Authorize Compound
      </Button>
    </Box>
  )
}

export default AuthorizeCompoundOverlay
