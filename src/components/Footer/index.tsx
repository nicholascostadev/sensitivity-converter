import { Flex, Link, Text, useColorMode } from '@chakra-ui/react'
import { Copyright } from 'phosphor-react'
import { globalPaddingForContainer } from '../../styles/global'

export function Footer() {
  const { colorMode } = useColorMode()
  return (
    <Flex
      as="footer"
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
      p={['2', '5']}
      mt="5"
      borderTopEndRadius={8}
      borderTopStartRadius={8}
      flexDir="column"
      align="center"
      justify="center"
      px={globalPaddingForContainer}
    >
      <Link
        href="https://nicholascosta.dev"
        target="_blank"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="1"
      >
        <Copyright />
        nicholascostadev
      </Link>
      <Text>All rights reserved</Text>
    </Flex>
  )
}
