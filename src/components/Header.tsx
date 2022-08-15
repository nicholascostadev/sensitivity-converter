import { Flex, Heading, useColorMode } from '@chakra-ui/react'
import { globalPaddingForContainer } from '../styles/global'
import { ToggleThemeButton } from './ToggleThemeButton'

export function Header() {
  const { colorMode } = useColorMode()

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
      </Flex>
      <ToggleThemeButton />
    </Flex>
  )
}
