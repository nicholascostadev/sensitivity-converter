import { Stack, Text } from '@chakra-ui/react'
import { globalPaddingForContainer } from '../styles/global'

export function Summary() {
  return (
    <Stack px={globalPaddingForContainer} py="5">
      <Stack w="100%" bg="lavenderblush" borderRadius={8} p="5">
        <Text color="gray.800">
          Have you ever been in the situation where you have a different
          sensitivity and a different DPI than your favorite player and wondered
          how would that be in your own DPI?
        </Text>
        <Text color="green.400">
          Thats what this app is for, you only need to tell me your sensitivity
          and DPI + the desired sensitivity and DPI of your favorite player and
          I will tell you what would be the sensitivity if the player was using
          your DPI.
        </Text>
        <Text color="gray.800">
          PS: Yes its a basic math operation, but if you are lazy like me, it
          might be useful
        </Text>
      </Stack>
    </Stack>
  )
}
