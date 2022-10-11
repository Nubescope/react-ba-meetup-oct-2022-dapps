// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { foramtAddress } from '../helpers'

// import AddressButton from "./AddressButton";

interface Props {
  address?: string;
  onConnectPress?: () => void;
  onDisconnectPress?: () => void;
}

const Nav: React.FC<Props> = ({ address, onConnectPress, onDisconnectPress }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box px={4} bg={useColorModeValue('gray.100', 'gray.900')} role="navigation">
      <Flex align="center" justify="space-between" h={16}>
        <Box fontSize={['sm', 'md', '2xl']}>
          <Text as="span" fontWeight="bold">
            React Meetup
          </Text>
        </Box>

        <Flex align="center">
          <Stack direction="row" spacing={3} alignItems="center">
            {address && <Text>{foramtAddress(address)}</Text>}
            {!address && (
              <Button colorScheme="blue" onClick={onConnectPress}>
                Connect
              </Button>
            )}
            {address && (
              <Button colorScheme="blue" onClick={onDisconnectPress}>
                Disconnect
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Nav
