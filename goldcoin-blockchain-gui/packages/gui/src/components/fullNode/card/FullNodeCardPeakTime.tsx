import React from 'react';
import { Trans } from '@lingui/macro';
import { CardSimple } from '@goldcoin/core';
import { useGetLatestPeakTimestampQuery } from '@goldcoin/api-react';
import { unix_to_short_date } from '../../../util/utils';

export default function FullNodeCardPeakTime() {
  const { data: timestamp, isLoading, error } = useGetLatestPeakTimestampQuery();

  const value = timestamp
    ? unix_to_short_date(timestamp)
    : '';

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Peak Time</Trans>}
      tooltip={<Trans>This is the time of the latest peak sub block.</Trans>}
      value={value}
      error={error}
    />
  );
}
