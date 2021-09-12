import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as goldcoinIcon } from './images/goldcoin.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={goldcoinIcon} viewBox="0 0 150 58" {...props} />;
}
