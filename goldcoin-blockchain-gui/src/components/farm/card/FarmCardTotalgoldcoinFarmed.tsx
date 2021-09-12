import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { mojo_to_goldcoin } from '../../../util/goldcoin';
import useCurrencyCode from '../../../hooks/useCurrencyCode';
import { FormatLargeNumber } from '@goldcoin/core';

export default function FarmCardTotalgoldcoinFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalgoldcoinFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return mojo_to_goldcoin(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total goldcoin Farmed</Trans>}
      value={<FormatLargeNumber value={totalgoldcoinFarmed} />}
      loading={loading}
    />
  );
}
