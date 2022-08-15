import {
  Box,
  Flex,
  HStack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { Question } from 'phosphor-react'
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
      <HStack
        boxShadow={colorMode === 'light' ? 'base' : 'none'}
        w="100%"
        bg={stackBg}
        p="5"
        justify="space-around"
        borderRadius={8}
      >
        <Text>DPI: {DPI}</Text>
        <Text>Sensitivity: {sensitivity}</Text>
        <Flex justify="center" align="center" gap="1">
          <Text cursor="default">Multiplier: {multiplier}</Text>
          <Tooltip
            hasArrow
            borderRadius={8}
            label="The multiplier is the ratio of the DPI of the player to your DPI, so you just have to multiply it by the sensitivity of the player."
            aria-label="Multiplier"
          >
            <Question size={20} />
          </Tooltip>
        </Flex>
      </HStack>
    </Box>
  )
}
