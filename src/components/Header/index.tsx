import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { Sun, Moon } from 'phosphor-react'
import { globalPaddingForContainer } from '../../styles/global'

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const stateOfToggleColorscheme = true

  return (
    <Flex
      boxShadow={colorMode === 'dark' ? 'initial' : 'sm'}
      as="header"
      py={5}
      px={globalPaddingForContainer}
    >
      <Flex px={['5', '0']} w="100%" justify="space-between" align="center">
        <Heading
          // color={colorMode === 'dark' ? 'initial' : 'white'}
          fontSize={['lg', 'xl', '2xl']}
        >
          Your sensitivity readable
        </Heading>
        {colorMode === 'dark' ? (
          <Button
            gap="2"
            onClick={toggleColorMode}
            disabled={!stateOfToggleColorscheme}
          >
            <Sun />
            {!stateOfToggleColorscheme && <Text>In progress...</Text>}
          </Button>
        ) : (
          <Button
            gap="2"
            onClick={toggleColorMode}
            disabled={!stateOfToggleColorscheme}
          >
            <Moon />
            {!stateOfToggleColorscheme && <Text>In progress...</Text>}
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
