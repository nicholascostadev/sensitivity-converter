import {
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export function SocialButton({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) {
  return (
    <Link href={href} isExternal>
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Link>
  )
}
