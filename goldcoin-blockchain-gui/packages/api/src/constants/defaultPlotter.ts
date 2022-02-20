import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Goldcoin Proof of Space',
  options: optionsForPlotter(PlotterName.GOLDCOINPOS),
  defaults: defaultsForPlotter(PlotterName.GOLDCOINPOS),
  installInfo: { installed: true },
};
