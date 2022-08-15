import {
  Box,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { globalPaddingForContainer } from '../styles/global'

interface SensitivityResultProps {
  sensitivity: number
  DPI: number
  multiplier: number
}

export function Result({
  DPI,
  multiplier,
  sensitivity,
}: SensitivityResultProps) {
  const { colorMode } = useColorMode()
  const stackBg = useColorModeValue('white', 'gray.700')

  return (
    <Box px={globalPaddingForContainer}>
      <Stack
        boxShadow={colorMode === 'light' ? 'base' : 'none'}
        w="100%"
        bg={stackBg}
        p="5"
        borderRadius={8}
      >
        <Text>DPI: {DPI}</Text>
        <Text>Sensitivity: {sensitivity}</Text>
        <Text>Multiplier: {multiplier}</Text>
      </Stack>
    </Box>
  )
}
