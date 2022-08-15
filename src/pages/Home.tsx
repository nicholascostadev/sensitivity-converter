import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { globalPaddingForContainer } from '../styles/global'
import { useState } from 'react'

const schema = z.object({
  userDPI: z.number().min(1, 'DPI must be greater than 1'),
  comparisonSens: z.number().positive('Sensitivity must be higher than 0'),
  comparisonDPI: z.number().min(1, 'DPI must be greater than 1'),
})

type FormData = z.infer<typeof schema>

interface SensitivityResultProps {
  sensitivity: number
  DPI: number
  multiplier: number
}

export function Home() {
  const { colorMode } = useColorMode()
  const [sensitivityResult, setSensitivityResult] =
    useState<SensitivityResultProps | null>(null)
  const stackBg = useColorModeValue('white', 'gray.700')
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function calculateResult({
    userDPI,
    comparisonSens,
    comparisonDPI,
  }: FormData) {
    const differenceOfDPI = comparisonDPI / userDPI
    const multiplier = Number(differenceOfDPI.toFixed(3))

    if (comparisonDPI > userDPI)
      setSensitivityResult({
        DPI: userDPI,
        sensitivity: Number((differenceOfDPI * comparisonSens).toFixed(3)),
        multiplier,
      })
    else
      setSensitivityResult({
        DPI: userDPI,
        sensitivity: Number((differenceOfDPI / comparisonSens).toFixed(3)),
        multiplier,
      })
  }

  return (
    <Stack as="main" minH="calc(100vh - 80px)">
      <Stack px={globalPaddingForContainer} py="5">
        <Stack w="100%" bg="lavenderblush" borderRadius={8} p="5">
          <Text color="gray.800">
            Have you ever been in the situation where you have a different
            sensitivity and a different DPI than your favorite player and
            wondered how would that be in your own DPI?
          </Text>
          <Text color="green.400">
            Thats what this app is for, you only need to tell me your
            sensitivity and DPI + the desired sensitivity and DPI of your
            favorite player and I will tell you what would be the sensitivity if
            the player was using your DPI.
          </Text>
          <Text color="gray.800">
            PS: Yes its a basic math operation, but if you are lazy like me, it
            might be useful
          </Text>
        </Stack>
      </Stack>

      <Flex px={globalPaddingForContainer} pt="20">
        <Stack
          bg={stackBg}
          boxShadow={colorMode === 'light' ? 'base' : 'none'}
          w="100%"
          borderRadius={8}
          p="5"
        >
          <FormControl as="form" onSubmit={handleSubmit(calculateResult)}>
            <Stack>
              <FormLabel>Your DPI:</FormLabel>
              <Input
                step="any"
                {...register('userDPI', {
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Your DPI goes here"
              />
              {errors.userDPI && (
                <Text color="tomato">{errors.userDPI.message}</Text>
              )}
              <FormLabel>Comparison Sensitivity:</FormLabel>
              <Input
                step="any"
                {...register('comparisonSens', {
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="The other sensitivity goes here"
              />
              {errors.comparisonSens && (
                <Text color="tomato">{errors.comparisonSens.message}</Text>
              )}
              <FormLabel>Comparison DPI:</FormLabel>
              <Input
                step="any"
                {...register('comparisonDPI', {
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="The other DPI goes here"
              />
              {errors.comparisonDPI && (
                <Text color="tomato">{errors.comparisonDPI.message}</Text>
              )}
            </Stack>
            <Button colorScheme="blue" type="submit" w="100%" mt="5" size="lg">
              <Text>Calculate</Text>
            </Button>
          </FormControl>
        </Stack>
      </Flex>

      {sensitivityResult && (
        <Box px={globalPaddingForContainer}>
          <Stack
            boxShadow={colorMode === 'light' ? 'base' : 'none'}
            w="100%"
            bg={stackBg}
            p="5"
            borderRadius={8}
          >
            <Text>DPI: {sensitivityResult.DPI}</Text>
            <Text>Sensitivity: {sensitivityResult.sensitivity}</Text>
            <Text>Multiplier: {sensitivityResult.multiplier}</Text>
          </Stack>
        </Box>
      )}
    </Stack>
  )
}