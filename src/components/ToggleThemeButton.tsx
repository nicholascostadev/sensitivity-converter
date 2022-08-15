import { Button, useColorMode } from '@chakra-ui/react'
import { Moon, Sun } from 'phosphor-react'

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  if (colorMode === 'dark') {
    return (
      <Button gap="2" onClick={toggleColorMode}>
        <Sun />
      </Button>
    )
  }

  return (
    <Button gap="2" onClick={toggleColorMode}>
      <Moon />
    </Button>
  )
}
