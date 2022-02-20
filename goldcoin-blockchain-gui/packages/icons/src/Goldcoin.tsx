import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import GoldcoinIcon from './images/goldcoin.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={GoldcoinIcon} viewBox="0 0 155 60" {...props} />;
}
