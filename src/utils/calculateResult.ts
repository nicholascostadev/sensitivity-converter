interface FormData {
  userDPI: number
  comparisonDPI: number
  comparisonSens: number
}

interface Result {
  DPI: number
  sensitivity: number
  multiplier: number
}

export function calculateResult({
  userDPI,
  comparisonSens,
  comparisonDPI,
}: FormData): Result {
  if (userDPI <= 0) throw new Error('DPI must be greater than 0')
  if (comparisonDPI <= 0)
    throw new Error('Comparison DPI must be greater than 0')
  if (comparisonSens <= 0)
    throw new Error('Comparison Sensitivity must be greater than 0')

  const differenceOfDPI = comparisonDPI / userDPI
  const multiplier = Number(differenceOfDPI.toFixed(3))

  return {
    DPI: userDPI,
    sensitivity: Number((differenceOfDPI * comparisonSens).toFixed(3)),
    multiplier,
  }
}
