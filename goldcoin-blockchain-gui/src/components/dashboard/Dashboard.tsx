import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router';
import { AppBar, Toolbar, Drawer, Divider, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  LocaleToggle,
  Flex,
  Logo,
  ToolbarSpacing,
} from '@goldcoin/core';
import { defaultLocale, locales } from '../../config/locales';
import Wallets from '../wallet/Wallets';
import FullNode from '../fullNode/FullNode';
import Plot from '../plot/Plot';
import Farm from '../farm/Farm';
import Pool from '../pool/Pool';
import Block from '../block/Block';
import DashboardSideBar from './DashboardSideBar';
import { DashboardTitleTarget } from './DashboardTitle';
import TradeManager from '../trading/TradeManager';
import BackupCreate from '../backup/BackupCreate';

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    backgroundColor: "transparent"
  }
}));

const StyledRoot = styled(Flex)`
  height: 100%;
  padding-top: 50px;
  // overflow: hidden;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) =>
    theme.palette.type === 'dark' ? 'transparent' : 'white'};
  width: ${({ theme }) => `calc(100% - ${theme.drawer.width})`};
  margin-left: ${({ theme }) => theme.drawer.width};
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  padding-top: 50px;
`;

const StyledDrawer = styled(Drawer)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 2};
  width: ${({ theme }) => theme.drawer.width};
  flex-shrink: 0;
  background-color: transparent;
  > div {
    width: ${({ theme }) => theme.drawer.width};
  }
`;

const StyledBody = styled(Box)`
  min-width: 0;
`;

const StyledBrandWrapper = styled(Flex)`
  height: 64px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: 50px;
  // border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

export default function Dashboard() {
  const { path } = useRouteMatch();
  const classes = useStyles();

  return (
    <StyledRoot>
      <BackupCreate />
      <StyledAppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <DashboardTitleTarget />
          <Flex flexGrow={1} />
          <LocaleToggle locales={locales} defaultLocale={defaultLocale} />
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent"  classes={{paper: classes.paper}}>
        <StyledBrandWrapper>
          <Logo  />
        </StyledBrandWrapper>
        <Divider />
        <DashboardSideBar />
      </StyledDrawer>
      <StyledBody flexGrow={1}>
        <ToolbarSpacing />
        <Switch>
          <Route path={`${path}`} exact>
            <FullNode />
          </Route>
          <Route path={`${path}/block/:headerHash`} exact>
            <Block />
          </Route>
          <Route path={`${path}/wallets`}>
            <Wallets />
          </Route>
          <Route path={`${path}/plot`}>
            <Plot />
          </Route>
          <Route path={`${path}/farm`}>
            <Farm />
          </Route>
          <Route path={`${path}/trade`}>
            <TradeManager />
          </Route>
        </Switch>
      </StyledBody>
    </StyledRoot>
  );
}
