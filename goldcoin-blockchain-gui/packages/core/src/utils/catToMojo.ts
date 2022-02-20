import Big from 'big.js';
import Unit from '../constants/Unit';
import goldcoinFormatter from './goldcoinFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return goldcoinFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}