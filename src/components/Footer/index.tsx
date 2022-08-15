import { Flex, Link, Text } from '@chakra-ui/react'
import { Copyright } from 'phosphor-react'
import { globalPaddingForContainer } from '../../styles/global'

export function Footer() {
  return (
    <Flex
      bg="gray.600"
      p={['2', '5']}
      as="footer"
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
