import type { Wallet } from '@goldcoin/api';
import { WalletType } from '@goldcoin/api';
import { mojoToCATLocaleString, mojoToGoldcoinLocaleString } from '@goldcoin/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToGoldcoinLocaleString(value);
}
