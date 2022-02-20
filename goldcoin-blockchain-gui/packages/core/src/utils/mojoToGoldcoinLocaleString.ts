import Big from 'big.js';
import Unit from '../constants/Unit';
import goldcoinFormatter from './goldcoinFormatter';

export default function mojoToGoldcoinLocaleString(mojo: string | number | Big) {
  return goldcoinFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.GOLDCOIN)
    .toLocaleString();
}