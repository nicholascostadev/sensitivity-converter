import { Button, Flex, Heading, HStack, useColorMode } from '@chakra-ui/react'
import { GithubLogo } from 'phosphor-react'
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
      <HStack>
        <Button
          as="a"
          href="https://github.com/nicholascostadev/sensitivity-converter"
          target="_blank"
          rel="noreferrer"
          colorScheme="gray"
          leftIcon={<GithubLogo />}
        >
          Source Code
        </Button>

        <ToggleThemeButton />
      </HStack>
    </Flex>
  )
}
