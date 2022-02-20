import Big from 'big.js';
import Unit from '../constants/Unit';
import goldcoinFormatter from './goldcoinFormatter';

export default function goldcoinToMojo(goldcoin: string | number | Big): number {
  return goldcoinFormatter(goldcoin, Unit.GOLDCOIN)
    .to(Unit.MOJO)
    .toNumber();
}