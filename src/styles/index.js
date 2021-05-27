import {StyleSheet} from 'react-native';

import {colors, padding} from '../config';

export const mainStyles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
  },
  contentCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  colReverse: {
    paddingBottom: padding.large,
    flexDirection: 'column-reverse',
  },
  centerAligned: {
    alignItems: 'center',
  },
});
