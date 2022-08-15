import {
  Box,
  Button,
  Flex,
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
import { Summary } from '../components/Summary'
import { Input } from '../components/Input'
import { Result } from '../components/Result'

const schema = z.object({
  userDPI: z
    .number({
      invalid_type_error: 'DPI must be a number',
    })
    .min(1, 'DPI must be greater than 1'),
  comparisonSens: z
    .number({
      invalid_type_error: 'Sensitivity must be a number',
    })
    .positive('Sensitivity must be higher than 0'),
  comparisonDPI: z
    .number({
      invalid_type_error: 'DPI must be a number',
    })
    .min(1, 'DPI must be greater than 1'),
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
    console.log({ comparisonDPI, comparisonSens, userDPI, differenceOfDPI })

    setSensitivityResult({
      DPI: userDPI,
      sensitivity: Number((differenceOfDPI * comparisonSens).toFixed(3)),

      multiplier,
    })
  }

  const inputOptions = {
    valueAsNumber: true,
  }

  return (
    <Stack as="main" minH="calc(100vh - 80px)">
      <Summary />

      <Flex px={globalPaddingForContainer} pt="20">
        <Stack
          bg={stackBg}
          boxShadow={colorMode === 'light' ? 'base' : 'none'}
          w="100%"
          borderRadius={8}
          p="5"
        >
          <Box as="form" onSubmit={handleSubmit(calculateResult)}>
            <Input
              label="Your DPI"
              type="number"
              error={errors.userDPI}
              {...register('userDPI', inputOptions)}
            />
            <Input
              label="Comparison Sensitivity"
              type="number"
              error={errors.comparisonSens}
              {...register('comparisonSens', inputOptions)}
            />
            <Input
              label="Comparison DPI"
              type="number"
              error={errors.comparisonDPI}
              {...register('comparisonDPI', inputOptions)}
            />

            <Button colorScheme="blue" type="submit" w="100%" mt="5" size="lg">
              <Text>Calculate</Text>
            </Button>
          </Box>
        </Stack>
      </Flex>

      {sensitivityResult && <Result {...sensitivityResult} />}
    </Stack>
  )
}
