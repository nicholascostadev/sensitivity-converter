import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  ...config,
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
    fontWeight: '400',
  },
})

export default theme
