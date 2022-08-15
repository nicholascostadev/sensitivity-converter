import {
  Box,
  Container,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { InstagramLogo, TwitterLogo } from 'phosphor-react'
import { SocialButton } from './SocialButton'

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 nicholascostadev. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.vom/NicholasCosta04'}
          >
            <Icon as={TwitterLogo} />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://instagram.com/nicholas_m_costa'}
          >
            <Icon as={InstagramLogo} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
