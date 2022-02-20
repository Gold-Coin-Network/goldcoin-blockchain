import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToGoldcoinLocaleString, CardSimple } from '@goldcoin/core';
import { useGetFarmedAmountQuery } from '@goldcoin/api-react';

export default function FarmCardTotalGoldcoinFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalGoldcoinFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToGoldcoinLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Goldcoin Farmed</Trans>}
      value={totalGoldcoinFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
