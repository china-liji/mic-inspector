import { Radix } from './types';

export const radixCircle = [Radix.Decimal, Radix.Binary, Radix.Octal, Radix.Hex, Radix.Decimal];

/**
 * Returns a string of number by specific radix
 * @param number A number
 * @param radix A specific number radix
 */
export const toNumberString = (number: number, radix: Radix): string => {
  let prefix = '';

  switch (radix) {
    case Radix.Binary:
      prefix = '0b';
      break;

    case Radix.Octal:
      prefix = '0o';
      break;

    case Radix.Hex:
      prefix = '0x';
      break;
  }

  return prefix + number.toString(radix);
};