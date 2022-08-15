import { Button, Icon, Tooltip, useColorMode } from '@chakra-ui/react'
import { Moon, Sun } from 'phosphor-react'

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  if (colorMode === 'dark') {
    return (
      <Tooltip
        hasArrow
        borderRadius={8}
        label="Toggle to Light Theme"
        aria-label="Toggle To Light Theme"
      >
        <Button gap="2" onClick={toggleColorMode}>
          <Icon as={Sun} />
        </Button>
      </Tooltip>
    )
  }

  return (
    <Tooltip
      hasArrow
      borderRadius={8}
      label="Toggle to Dark Theme"
      aria-label="Toggle To Dark Theme"
    >
      <Button gap="2" onClick={toggleColorMode}>
        <Icon as={Moon} />
      </Button>
    </Tooltip>
  )
}
