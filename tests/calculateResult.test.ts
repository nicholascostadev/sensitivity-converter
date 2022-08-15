import { describe, it, expect } from 'vitest'
import { calculateResult } from '../src/utils/calculateResult'

describe('calculateResult situations', () => {
  it('should return 0.165 of sensitivity', () => {
    expect(
      calculateResult({
        userDPI: 1600,
        comparisonDPI: 800,
        comparisonSens: 0.33,
      }),
    ).toStrictEqual({
      DPI: 1600,
      sensitivity: 0.165,
      multiplier: 0.5,
    })
  })
  it('should return 2.034 of sensitivity', () => {
    expect(
      calculateResult({
        userDPI: 800,
        comparisonDPI: 1600,
        comparisonSens: 1.017,
      }),
    ).toStrictEqual({
      DPI: 800,
      sensitivity: 2.034,
      multiplier: 2,
    })
  })
  it('should throw an error if userDPI is lower than or equal to 0', () => {
    expect(() =>
      calculateResult({
        userDPI: -800,
        comparisonDPI: 800,
        comparisonSens: 1.017,
      }),
    ).toThrowError('DPI must be greater than 0')
  })
  it('should throw an error if comparisonDPI is lower than or equal to 0', () => {
    expect(() =>
      calculateResult({
        userDPI: 800,
        comparisonDPI: -800,
        comparisonSens: 1.017,
      }),
    ).toThrowError('Comparison DPI must be greater than 0')
  })
  it('should throw an error if comparisonSens is lower than or equal to 0', () => {
    expect(() =>
      calculateResult({
        userDPI: 800,
        comparisonDPI: 800,
        comparisonSens: -1.017,
      }),
    ).toThrowError('Comparison Sensitivity must be greater than 0')
  })
})
