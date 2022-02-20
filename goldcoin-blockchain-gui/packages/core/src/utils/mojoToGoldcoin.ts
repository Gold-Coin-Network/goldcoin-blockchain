import Big from 'big.js';
import Unit from '../constants/Unit';
import goldcoinFormatter from './goldcoinFormatter';

export default function mojoToGoldcoin(mojo: string | number | Big): number {
  return goldcoinFormatter(mojo, Unit.MOJO)
    .to(Unit.GOLDCOIN)
    .toNumber();
}